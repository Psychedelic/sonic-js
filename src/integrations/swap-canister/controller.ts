import { Default, Pair, Token, Types } from '@/declarations';
import { applyDecimals, removeDecimals, toBigNumber } from '@/utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { createTokenActor, SwapActor } from '..';
import { parseSupportedTokenList, parseAllPairs } from './utils';

/**
 * Swap Canister Controller
 * This class is responsible for handling all the requests related to the swap canister
 */
export class SwapCanisterController {
  tokenList: Token.MetadataList | null = null;
  pairList: Pair.List | null = null;
  balanceList: Token.BalanceList | null = null;

  /**
   * Create an instance that communicates with swap canister
   * Some of the functions uses the actor agent identity to identify the user that is interacting
   */
  constructor(private swapActor: SwapActor) {}

  /**
   * Get the list of supported tokens from swap canister
   */
  async getTokenList(): Promise<Token.MetadataList> {
    const response = await this.swapActor.getSupportedTokenList();
    const parsedResponse = parseSupportedTokenList(response);
    this.tokenList = parsedResponse;
    return parsedResponse;
  }

  /**
   * Get the list of pairs present in swap canister
   */
  async getPairList(): Promise<Pair.List> {
    const response = await this.swapActor.getAllPairs();
    const parsedResponse = parseAllPairs(response);
    this.pairList = parsedResponse;
    return parsedResponse;
  }

  /**
   * Get the balance of all supported tokens for a given principal id
   * This function get balances that's not present on swap canister
   */
  async getTokenBalances(principalId: string): Promise<Token.BalanceList> {
    if (!this.tokenList) await this.getTokenList();

    const principal = Principal.fromText(principalId);

    const tokens = Object.values(this.tokenList as Token.MetadataList);
    const tokenBalancePromises = tokens.map((token) =>
      createTokenActor({ canisterId: token.id })
        .then((tokenActor) => tokenActor.balanceOf(principal))
        .then((balance) => ({
          [token.id]: {
            token: applyDecimals(balance, token.decimals),
            sonic: toBigNumber(0),
            total: applyDecimals(balance, token.decimals),
          },
        }))
    );

    const promiseResults = await Promise.all(tokenBalancePromises);

    const balanceList = promiseResults.reduce(
      (acc, result) => ({ ...acc, ...result }),
      {}
    );

    const sonicBalances = await this.swapActor.getUserBalances(principal);

    sonicBalances.forEach(([tokenId, balance]) => {
      const _balance = applyDecimals(
        balance,
        (this.tokenList as Token.MetadataList)[tokenId].decimals
      );

      balanceList[tokenId].sonic = _balance;
      balanceList[tokenId].total = balanceList[tokenId].token.plus(_balance);
    });

    this.balanceList = balanceList;

    return balanceList;
  }

  /**
   * Get the principal of the agent
   */
  async getAgentPrincipal(): Promise<Principal | undefined> {
    const agent = Actor.agentOf(this.swapActor);
    if (!agent) return;

    return agent.getPrincipal();
  }

  /**
   * Approve transfers from token to swap canister
   * This function uses the actor agent identity
   * This function needs to be called before depositing into swap canister
   */
  async approve({
    tokenId,
    amount,
  }: SwapCanisterController.ApproveParams): Promise<void> {
    const principal = await this.getAgentPrincipal();
    if (!principal) throw new Error('Agent principal not found');

    if (!this.tokenList) await this.getTokenList();

    const tokenActor = await createTokenActor({ canisterId: tokenId });

    const swapPrincipal = Principal.fromText(Default.SWAP_CANISTER_ID);
    const parsedAmount = removeDecimals(
      amount,
      (this.tokenList as Token.MetadataList)[tokenId].decimals
    );

    const parsedAllowance = toBigNumber(
      await tokenActor.allowance(principal, swapPrincipal)
    );

    if (parsedAllowance.gte(parsedAmount)) return;

    const result = await tokenActor.approve(
      swapPrincipal,
      BigInt(parsedAmount.toString())
    );

    if ('Err' in result) throw new Error(JSON.stringify(result.Err));
  }

  /**
   * Deposit tokens into swap canister
   * This function uses the actor agent identity
   */
  async deposit({
    tokenId,
    amount,
  }: SwapCanisterController.DepositParams): Promise<void> {
    await this.approve({ tokenId, amount });

    const parsedAmount = removeDecimals(
      amount,
      (this.tokenList as Token.MetadataList)[tokenId].decimals
    );

    const result = await this.swapActor.deposit(
      Principal.fromText(tokenId),
      BigInt(parsedAmount.toString())
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * Withdraw tokens from swap canister
   * This function uses the actor agent identity
   */
  async withdraw({
    amount,
    tokenId,
  }: SwapCanisterController.WithdrawParams): Promise<void> {
    const principal = await this.getAgentPrincipal();
    if (!principal) throw new Error('Agent principal not found');

    if (!this.tokenList) await this.getTokenList();

    const parsedAmount = removeDecimals(
      amount,
      (this.tokenList as Token.MetadataList)[tokenId].decimals
    );

    const result = await this.swapActor.withdraw(
      Principal.fromText(tokenId),
      BigInt(parsedAmount.toString())
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }
}

export namespace SwapCanisterController {
  export type ApproveParams = {
    amount: Types.Amount;
    tokenId: string;
  };

  export type DepositParams = {
    amount: Types.Amount;
    tokenId: string;
  };

  export type WithdrawParams = {
    amount: Types.Amount;
    tokenId: string;
  };
}
