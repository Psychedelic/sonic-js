import { Default, Pair, Token, Types } from '@/declarations';
import { Swap } from '@/math';
import { toBigNumber } from '@/utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { getDeadline } from '.';
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
   * This function get balances from token and swap canisters
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
            token: toBigNumber(balance).applyDecimals(token.decimals),
            sonic: toBigNumber(0),
            total: toBigNumber(balance).applyDecimals(token.decimals),
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
      const _balance = toBigNumber(balance).applyDecimals(
        (this.tokenList as Token.MetadataList)[tokenId].decimals
      );

      balanceList[tokenId].sonic = _balance;
      balanceList[tokenId].total = balanceList[tokenId].token.plus(_balance);
    });

    this.balanceList = balanceList;

    return balanceList;
  }

  /**
   * Get one token balance for a given principal id
   */
  async getTokenBalance({
    principalId,
    tokenId,
  }: SwapCanisterController.GetTokenBalanceParams): Promise<Token.Balance> {
    const principal = Principal.fromText(principalId);
    const tokenActor = await createTokenActor({ canisterId: tokenId });
    const tokenDecimals = await tokenActor.decimals();

    const tokenBalance = toBigNumber(
      await tokenActor.balanceOf(principal)
    ).applyDecimals(tokenDecimals);

    const sonicBalance = toBigNumber(
      (await this.swapActor.getUserBalances(principal)).find(
        ([id]) => id === tokenId
      )?.[1]
    ).applyDecimals(tokenDecimals);

    return {
      token: tokenBalance,
      sonic: sonicBalance,
      total: tokenBalance.plus(sonicBalance),
    };
  }

  /**
   * Get the principal of the agent
   */
  async getAgentPrincipal(): Promise<Principal> {
    const agent = Actor.agentOf(this.swapActor);
    if (!agent) throw new Error('Agent principal not found');

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

    if (!this.tokenList) await this.getTokenList();

    const tokenActor = await createTokenActor({ canisterId: tokenId });

    const swapPrincipal = Principal.fromText(Default.SWAP_CANISTER_ID);
    const parsedAmount = toBigNumber(amount).removeDecimals(
      (this.tokenList as Token.MetadataList)[tokenId].decimals
    );

    const parsedAllowance = toBigNumber(
      await tokenActor.allowance(principal, swapPrincipal)
    );

    if (parsedAllowance.gte(parsedAmount)) return;

    const result = await tokenActor.approve(
      swapPrincipal,
      parsedAmount.toBigInt()
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

    const parsedAmount = toBigNumber(amount).removeDecimals(
      (this.tokenList as Token.MetadataList)[tokenId].decimals
    );

    const result = await this.swapActor.deposit(
      Principal.fromText(tokenId),
      parsedAmount.toBigInt()
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
    await this.getAgentPrincipal();

    if (!this.tokenList) await this.getTokenList();

    const parsedAmount = toBigNumber(amount).removeDecimals(
      (this.tokenList as Token.MetadataList)[tokenId].decimals
    );

    const result = await this.swapActor.withdraw(
      Principal.fromText(tokenId),
      parsedAmount.toBigInt()
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  async swap({
    amountIn,
    tokenIn,
    tokenOut,
  }: SwapCanisterController.SwapParams): Promise<void> {
    const principal = await this.getAgentPrincipal();
    await this.getTokenList();

    if (!this.tokenList) await this.getTokenList();
    if (!this.pairList) await this.getPairList();
    if (!this.pairList || !this.tokenList) throw new Error();

    const tokenPath = Swap.getTokenPaths({
      pairList: this.pairList,
      tokenList: this.tokenList,
      amount: amountIn,
      tokenId: tokenIn,
    })[tokenOut];

    if (!tokenPath) throw new Error('No token path to swap');

    const balance = await this.getTokenBalance({
      principalId: principal.toString(),
      tokenId: tokenIn,
    });

    if (!balance.sonic.gt(amountIn)) {
      const toDeposit = toBigNumber(amountIn).minus(balance.sonic);
      if (!balance.token.gte(toDeposit)) {
        throw new Error(`Not enough ${tokenIn} to swap`);
      }
      await this.deposit({ tokenId: tokenIn, amount: toDeposit.toString() });
    }

    const _amountIn = toBigNumber(amountIn)
      .removeDecimals(this.tokenList[tokenIn].decimals)
      .toBigInt();

    const amountOutMin = tokenPath.amountOut
      .removeDecimals(this.tokenList[tokenOut].decimals)
      .toBigInt();

    const swapResult = await this.swapActor.swapExactTokensForTokens(
      _amountIn,
      amountOutMin,
      tokenPath.path,
      principal,
      getDeadline()
    );

    if ('err' in swapResult) throw new Error(JSON.stringify(swapResult.err));
    return;
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

  export type SwapParams = {
    tokenIn: string;
    tokenOut: string;
    amountIn: Types.Amount;
  };

  export type GetTokenBalanceParams = {
    tokenId: string;
    principalId: string;
  };
}
