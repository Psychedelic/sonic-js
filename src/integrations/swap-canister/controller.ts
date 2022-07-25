import { Default, Pair, Token, Types } from '@/declarations';
import { Assets, Liquidity, Swap } from '@/math';
import { toBigNumber } from '@/utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { getDeadline, parseUserLPBalances } from '.';
import { ActorAdapter, createTokenActor, SwapActor } from '..';
import { parseSupportedTokenList, parseAllPairs } from './utils';

/**
 * Swap Canister Controller.
 * This class is responsible for handling all the requests related to the swap canister.
 */
export class SwapCanisterController {
  tokenList: Token.MetadataList | null = null;
  pairList: Pair.List | null = null;
  balanceList: Token.BalanceList | null = null;

  /**
   * Create an instance that communicates with swap canister.
   * Some of the functions uses the actor agent identity to identify the user that is interacting.
   * @param {SwapActor} swapActor swap actor
   */
  constructor(private swapActor: SwapActor) {}

  /**
   * Get the list of supported tokens from swap canister.
   * @returns {Promise<Token.MetadataList>}
   */
  async getTokenList(): Promise<Token.MetadataList> {
    const response = await this.swapActor.getSupportedTokenList();
    const parsedResponse = parseSupportedTokenList(response);
    this.tokenList = parsedResponse;
    return parsedResponse;
  }

  /**
   * Get the list of pairs present in swap canister.
   * @returns {Promise<Pair.List>}
   */
  async getPairList(): Promise<Pair.List> {
    const response = await this.swapActor.getAllPairs();
    const parsedResponse = parseAllPairs(response);
    this.pairList = parsedResponse;
    return parsedResponse;
  }

  /**
   * Get the balance of all supported tokens for a given principal id.
   * This function get balances from token and swap canisters.
   * @param {string?} principalId The principal id of the user or the principal from agent will be used
   * @returns {Promise<Token.BalanceList>}
   */
  async getTokenBalances(principalId?: string): Promise<Token.BalanceList> {
    if (!this.tokenList) await this.getTokenList();

    const principal = principalId
      ? Principal.fromText(principalId)
      : await this.getAgentPrincipal();

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
   * Get one token balance for a given principal id.
   * @param {SwapCanisterController.GetTokenBalanceParams} params
   * @returns {Promise<Token.Balance>}
   */
  async getTokenBalance({
    principalId,
    tokenId,
  }: SwapCanisterController.GetTokenBalanceParams): Promise<Token.Balance> {
    const principal = Principal.fromText(principalId);
    const tokenActor = await createTokenActor({
      canisterId: tokenId,
      actorAdapter: ActorAdapter.adapterOf(this.swapActor),
    });
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
   * Get the Liquidity Positions balances.
   * @param {string?} principalId The principal id of the user or the principal from agent will be used
   * @returns {Promise<Pair.Balances>}
   */
  async getLPBalances(principalId?: string): Promise<Pair.Balances> {
    const principal = principalId
      ? Principal.fromText(principalId)
      : await this.getAgentPrincipal();

    const lpBalances = await this.swapActor.getUserLPBalancesAbove(
      principal,
      BigInt(0)
    );

    return parseUserLPBalances(lpBalances);
  }

  /**
   * Get the principal of the agent.
   * It is going to throw if the principal is anonymous.
   * @returns {Promise<Principal>}
   */
  async getAgentPrincipal(): Promise<Principal> {
    const agent = Actor.agentOf(this.swapActor);
    if (!agent) throw new Error('Agent principal not found');

    const principal = await agent.getPrincipal();

    if (principal.toString() === Principal.anonymous().toString())
      throw new Error('Agent principal is anonymous');

    return agent.getPrincipal();
  }

  /**
   * Approve transfers from token to swap canister.
   * This function uses the actor agent identity.
   * This function needs to be called before depositing into swap canister.
   * @param {SwapCanisterController.ApproveParams} params
   * @returns {Promise<void>}
   */
  async approve({
    tokenId,
    amount,
  }: SwapCanisterController.ApproveParams): Promise<void> {
    const principal = await this.getAgentPrincipal();

    if (!this.tokenList) await this.getTokenList();

    const tokenActor = await createTokenActor({
      canisterId: tokenId,
      actorAdapter: ActorAdapter.adapterOf(this.swapActor),
    });

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
   * Deposit tokens into swap canister.
   * This function uses the actor agent identity.
   * @param {SwapCanisterController.DepositParams} params
   * @returns {Promise<void>}
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
   * Check and deposit if is needed for a list of tokens.
   * It is only going to deposit if the amount is not already deposited
   * and if there is enough token balance to deposit.
   * @param {SwapCanisterController.DepositTokensNeededBalanceParams} params
   * returns {Promise<void>}
   */
  async depositTokensNeededBalance(
    params: SwapCanisterController.DepositTokensNeededBalanceParams
  ): Promise<void> {
    if (!this.tokenList) await this.getTokenList();
    const principalId = (await this.getAgentPrincipal()).toString();

    for (const { amount, tokenId } of params) {
      const balance = await this.getTokenBalance({
        principalId,
        tokenId,
      });

      if (balance.sonic.lt(amount)) {
        const toDeposit = toBigNumber(amount).minus(balance.sonic);
        const requiredDepositAmount = Assets.getDepositAmount({
          token: (this.tokenList as Token.MetadataList)[tokenId],
          amount: toDeposit.toString(),
        });
        if (requiredDepositAmount.gt(balance.token)) {
          throw new Error(`Not enough ${tokenId} to deposit`);
        }
        await this.deposit({ tokenId, amount: toDeposit.toString() });
      }
    }
  }

  /**
   * Withdraw tokens from swap canister.
   * This function uses the actor agent identity.
   * @param {SwapCanisterController.WithdrawParams} params
   * @returns {Promise<void>}
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

  /**
   * Swaps an amount of tokenIn for tokenOut allowing given slippage.
   * This function uses the actor agent identity.
   * @param {SwapCanisterController.SwapParams} params
   * @returns {Promise<void>}
   */
  async swap({
    amountIn,
    tokenIn,
    tokenOut,
    slippage = Default.SLIPPAGE,
  }: SwapCanisterController.SwapParams): Promise<void> {
    const principal = await this.getAgentPrincipal();

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

    await this.depositTokensNeededBalance([
      { tokenId: tokenIn, amount: amountIn },
    ]);

    const _amountIn = toBigNumber(amountIn)
      .removeDecimals(this.tokenList[tokenIn].decimals)
      .toBigInt();

    const amountOutMin = Swap.getAmountMin({
      amount: tokenPath.amountOut.toString(),
      decimals: this.tokenList[tokenOut].decimals,
      slippage,
    })
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

  /**
   * Add two amounts of tokens to add a pair Liquidity Position.
   * This function uses the actor agent identity.
   * @param {SwapCanisterController.AddLiquidityParams} params
   * @returns {Promise<void>}
   */
  async addLiquidity({
    token0,
    token1,
    ...params
  }: SwapCanisterController.AddLiquidityParams): Promise<void> {
    await this.getAgentPrincipal();

    if (!this.tokenList) await this.getTokenList();
    if (!this.pairList) await this.getPairList();
    if (!this.pairList || !this.tokenList) throw new Error();

    const pair = this.pairList[token0][token1];
    if (pair) {
      // Verify correct pair tokens order
      const [pairToken0, pairToken1] = pair.id.split(':');

      if (pairToken0 === token1 && pairToken1 === token0) {
        let aux = token0;
        token0 = token1;
        token1 = aux;

        aux = params.amount0;
        params.amount0 = params.amount1;
        params.amount1 = aux;
      }
    } else {
      throw new Error('Pair not created');
    }

    const slippage = toBigNumber(params.slippage ?? Default.SLIPPAGE)
      .dividedBy(100)
      .toNumber();

    // Verify token amounts and received position
    if (
      Liquidity.getPosition({
        amount0: params.amount0,
        amount1: params.amount1,
        decimals0: this.tokenList[token0].decimals,
        decimals1: this.tokenList[token1].decimals,
        reserve0: this.pairList[token0][token1].reserve0,
        reserve1: this.pairList[token0][token1].reserve1,
        totalSupply: this.pairList[token0][token1].totalSupply,
        slippage,
      }).isLessThanOrEqualTo(0)
    ) {
      throw new Error('Invalid token amounts');
    }

    await this.depositTokensNeededBalance([
      { tokenId: token0, amount: params.amount0 },
      { tokenId: token1, amount: params.amount1 },
    ]);

    const amount0Desired = toBigNumber(params.amount0)
      .removeDecimals(this.tokenList[token0].decimals)
      .toBigInt();
    const amount1Desired = toBigNumber(params.amount1)
      .removeDecimals(this.tokenList[token1].decimals)
      .toBigInt();
    const amount0Min = toBigNumber(params.amount0)
      .applyTolerance(slippage, 'min')
      .removeDecimals(this.tokenList[token0].decimals)
      .toBigInt();
    const amount1Min = toBigNumber(params.amount1)
      .applyTolerance(slippage, 'min')
      .removeDecimals(this.tokenList[token1].decimals)
      .toBigInt();

    const result = await this.swapActor.addLiquidity(
      Principal.fromText(token0),
      Principal.fromText(token1),
      amount0Desired,
      amount1Desired,
      amount0Min,
      amount1Min,
      getDeadline()
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
    return;
  }

  /**
   * Removes liquidity by a given Liquidity Position amount.
   * This function uses the actor agent identity.
   * @param {SwapCanisterController.RemoveLiquidityParams} params
   * @returns {Promise<void>}
   */
  async removeLiquidity({
    token0,
    token1,
    ...params
  }: SwapCanisterController.RemoveLiquidityParams): Promise<void> {
    const principal = await this.getAgentPrincipal();

    if (!this.tokenList) await this.getTokenList();
    if (!this.pairList) await this.getPairList();
    if (!this.pairList || !this.tokenList) throw new Error();

    const pair = this.pairList[token0][token1];
    if (!pair) {
      throw new Error('Pair not created');
    }

    const amount = toBigNumber(params.amount).removeDecimals(
      Liquidity.PAIR_DECIMALS
    );
    const slippage = toBigNumber(params.slippage ?? Default.SLIPPAGE)
      .dividedBy(100)
      .toNumber();

    const { balance0, balance1 } = Liquidity.getTokenBalances({
      decimals0: this.tokenList[token0].decimals,
      decimals1: this.tokenList[token1].decimals,
      reserve0: pair.reserve0,
      reserve1: pair.reserve1,
      totalSupply: pair.totalSupply,
      lpBalance: amount,
    });

    const amount0Min = balance0
      .applyTolerance(slippage, 'min')
      .removeDecimals(this.tokenList[token0].decimals)
      .toBigInt();
    const amount1Min = balance1
      .applyTolerance(slippage, 'min')
      .removeDecimals(this.tokenList[token1].decimals)
      .toBigInt();

    const result = await this.swapActor.removeLiquidity(
      Principal.fromText(token0),
      Principal.fromText(token1),
      amount.toBigInt(),
      amount0Min,
      amount1Min,
      principal,
      getDeadline()
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
    return;
  }
}

/**
 * Type definition for the SwapCanisterController.
 */
export namespace SwapCanisterController {
  /**
   * Type definition for params of the approve function.
   * @param {Types.Amount} amount
   * @param {string} tokenId
   */
  export type ApproveParams = {
    amount: Types.Amount;
    tokenId: string;
  };

  /**
   * Type definition for params of the deposit function.
   * @param {Types.Amount} amount
   * @param {string} tokenId
   */
  export type DepositParams = {
    amount: Types.Amount;
    tokenId: string;
  };

  /**
   * Type definition for params of the withdraw function.
   * @param {Types.Amount} amount
   * @param {string} tokenId
   */
  export type WithdrawParams = {
    amount: Types.Amount;
    tokenId: string;
  };

  /**
   * Type definition for params of the swap function.
   * @param {Types.Amount} amountIn Amount of input token to swap
   * @param {string} tokenIn Input token id
   * @param {string} tokenOut Output token id
   * @param {Types.Number} slippage Percentage of slippage allowed
   */
  export type SwapParams = {
    tokenIn: string;
    tokenOut: string;
    amountIn: Types.Amount;
    slippage?: Types.Number;
  };

  /**
   * Type definition for params of the getTokenBalance function.
   * @param {string} principalId User's principal id
   * @param {string} tokenId Token id to fetch balance for
   */
  export type GetTokenBalanceParams = {
    tokenId: string;
    principalId: string;
  };

  /**
   * Type definition for params of the addLiquidity function.
   * @param {string} token0 Token id
   * @param {string} token1 Token id
   * @param {Types.Amount} amount Amount of token0 to add
   * @param {Types.Amount} amount1 Amount of token1 to add
   * @param {Types.Number} slippage Percentage of slippage allowed
   */
  export type AddLiquidityParams = {
    token0: string;
    token1: string;
    amount0: Types.Amount;
    amount1: Types.Amount;
    slippage?: Types.Number;
  };

  /**
   * Type definition for params of the depositTokensNeededBalance function.
   */
  export type DepositTokensNeededBalanceParams = DepositParams[];

  /**
   * Type definition for params of the removeLiquidity function.
   * @param {string} token0 Token id
   * @param {string} token1 Token id
   * @param {Types.Amount} amount Liquidity Position amount to remove
   * @param {Types.Number} slippage Percentage of slippage allowed
   */
  export type RemoveLiquidityParams = {
    token0: string;
    token1: string;
    amount: Types.Amount;
    slippage?: Types.Number;
  };
}
