import { Default, Pair, Token, Types } from '@/declarations';
import { applyDecimals, removeDecimals, toBigNumber } from '@/utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { createTokenActor, SwapActor } from '..';
import { parseSupportedTokenList, parseAllPairs } from './utils';

export class SwapCanisterController {
  tokenList: Token.MetadataList | null = null;
  pairList: Pair.List | null = null;
  balanceList: Token.BalanceList | null = null;

  constructor(private swapActor: SwapActor) {}

  async getTokenList(): Promise<Token.MetadataList> {
    const response = await this.swapActor.getSupportedTokenList();
    const parsedResponse = parseSupportedTokenList(response);
    this.tokenList = parsedResponse;
    return parsedResponse;
  }

  async getPairList(): Promise<Pair.List> {
    const response = await this.swapActor.getAllPairs();
    const parsedResponse = parseAllPairs(response);
    this.pairList = parsedResponse;
    return parsedResponse;
  }

  async getTokenBalances(principalId: string): Promise<Token.BalanceList> {
    if (!this.tokenList) await this.getTokenList();

    const tokens = Object.values(this.tokenList as Token.MetadataList);
    const tokenBalancePromises = tokens.map((token) =>
      createTokenActor({ canisterId: token.id })
        .then((tokenActor) =>
          tokenActor.balanceOf(Principal.fromText(principalId))
        )
        .then((balance) => ({
          [token.id]: applyDecimals(balance, token.decimals),
        }))
    );

    const promiseResults = await Promise.all(tokenBalancePromises);

    const balanceList = promiseResults.reduce(
      (acc, result) => ({ ...acc, ...result }),
      {}
    );

    this.balanceList = balanceList;

    return balanceList;
  }

  async getAgentPrincipal(): Promise<Principal | undefined> {
    const agent = Actor.agentOf(this.swapActor);
    if (!agent) return;

    return agent.getPrincipal();
  }

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

  async withdraw({
    amount,
    tokenId,
  }: SwapCanisterController.WithdrawParams): Promise<void> {
    const principal = await this.getAgentPrincipal();
    if (!principal) throw new Error('Agent principal not found');

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
