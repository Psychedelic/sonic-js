import BigNumber from 'bignumber.js';

import { Pair } from '@/declarations/pair';

import { toExponential, toBigNumber } from '../utils';
import { Types, checkIfObject, Default } from '../';

/**
 * Math calculations for Liquidity functions.
 */
export class Liquidity {
  /**
   * Constant from Swap Canister.
   */
  static readonly MINIMUM_LIQUIDITY = toExponential(3);
  static readonly PAIR_DECIMALS = 8;

  /**
   * Calculate the opposite token value for given pair in Liquidity Position.
   * @param {Liquidity.GetOppositeAmountParams} params
   * @returns {BigNumber}
   */
  static getOppositeAmount(
    params: Liquidity.GetOppositeAmountParams
  ): BigNumber {
    const amountIn = toBigNumber(params.amountIn);
    const reserveIn = toBigNumber(params.reserveIn).applyDecimals(
      params.decimalsIn
    );
    const reserveOut = toBigNumber(params.reserveOut).applyDecimals(
      params.decimalsOut
    );

    if (
      checkIfObject(
        { amountIn, reserveIn, reserveOut },
        { isNotANumber: true, isZero: true }
      )
    ) {
      return toBigNumber(0);
    }

    const minimalAmountIn = this.getMinimalAmountIn({
      decimals: params.decimalsIn,
      decimalsOpposite: params.decimalsOut,
      reserve: params.reserveIn,
      reserveOpposite: params.reserveOut,
    });

    if (amountIn.lt(minimalAmountIn)) {
      throw new Error(`Minimal amountIn: ${minimalAmountIn.toString()}`);
    }

    const oppositeAmount = amountIn
      .multipliedBy(reserveOut)
      .dividedBy(reserveIn)
      .dp(params.decimalsOut);

    return oppositeAmount;
  }

  /**
   * Calculate the minimal amount to be input for a given token of a pair.
   * @param {Liquidity.GetMinimalAmountInParams} params
   * @returns {BigNumber}
   */
  static getMinimalAmountIn(
    params: Liquidity.GetMinimalAmountInParams
  ): BigNumber {
    const reserve = toBigNumber(params.reserve).applyDecimals(params.decimals);
    const reserveOpposite = toBigNumber(params.reserveOpposite).applyDecimals(
      params.decimalsOpposite
    );
    const halfDecimals = (decimals: Types.Decimals): BigNumber =>
      toBigNumber(1).applyDecimals(Math.floor(decimals / 2));

    const minimalAmountInByToken = halfDecimals(params.decimals);

    const minimalAmountInByOpposite = halfDecimals(params.decimalsOpposite)
      .multipliedBy(reserve)
      .dividedBy(reserveOpposite);

    return BigNumber.max(minimalAmountInByToken, minimalAmountInByOpposite).dp(
      params.decimals,
      BigNumber.ROUND_CEIL
    );
  }

  /**
   * Calculate the Liquidity Position for given amounts of a pair of tokens that is going to be added.
   * @param {Liquidity.GetPositionParams} params
   * @returns {BigNumber}
   */
  static getPosition(params: Liquidity.GetPositionParams): BigNumber {
    const slippage = toBigNumber(params.slippage ?? Default.SLIPPAGE)
      .dividedBy(100)
      .toNumber();
    const amount0Desired = toBigNumber(params.amount0).removeDecimals(
      params.decimals0
    );
    const amount1Desired = toBigNumber(params.amount1).removeDecimals(
      params.decimals1
    );
    const amount0Min = amount0Desired.applyTolerance(slippage, 'min').dp(0);
    const amount1Min = amount1Desired.applyTolerance(slippage, 'min').dp(0);
    const reserve0 = toBigNumber(params.reserve0);
    const reserve1 = toBigNumber(params.reserve1);
    const totalSupply = toBigNumber(params.totalSupply);

    let amount0: BigNumber;
    let amount1: BigNumber;

    if (reserve0.isZero() && reserve1.isZero()) {
      amount0 = amount0Desired;
      amount1 = amount1Desired;
    } else {
      const amount1Optimal = amount0Desired
        .multipliedBy(reserve1)
        .dividedBy(reserve0);
      if (amount1Desired.isGreaterThanOrEqualTo(amount1Optimal)) {
        if (!amount1Optimal.isGreaterThanOrEqualTo(amount1Min)) {
          throw new Error('Invalid amount0');
        }
        amount0 = amount0Desired;
        amount1 = amount1Optimal;
      } else {
        const amount0Optimal = amount1Desired
          .multipliedBy(reserve0)
          .dividedBy(reserve1);
        if (
          !amount0Optimal.isLessThanOrEqualTo(amount0Desired) ||
          !amount0Optimal.isGreaterThanOrEqualTo(amount0Min)
        ) {
          throw new Error('Invalid amount1');
        }
        amount0 = amount0Optimal;
        amount1 = amount1Desired;
      }
    }

    let lp: BigNumber;

    if (totalSupply.isZero()) {
      lp = amount0.multipliedBy(amount1).sqrt().minus(this.MINIMUM_LIQUIDITY);
    } else {
      const one = amount0.times(totalSupply).div(reserve0);
      const two = amount1.times(totalSupply).div(reserve1);

      lp = BigNumber.min(one, two);
    }

    return lp.dp(0);
  }

  /**
   * Calculate Share of a pool of the position based on total supply.
   * @param {Liquidity.GetShareOfPoolParams} params
   * @returns {BigNumber}
   */
  static getShareOfPool(params: Liquidity.GetShareOfPoolParams): BigNumber {
    const totalSupply = toBigNumber(params.totalSupply);

    if (totalSupply.isZero()) {
      return new BigNumber(1);
    }

    const lp = this.getPosition(params);
    const percentage = lp.dividedBy(lp.plus(totalSupply));

    return percentage;
  }

  /**
   * Calculate the amount of a token in a position based on total supply.
   * @param {Liquidity.GetUserPositionValueParams} params
   * @returns {BigNumber}
   **/
  static getUserPositionValue(
    params: Liquidity.GetUserPositionValueParams
  ): BigNumber {
    const price0 = toBigNumber(params.price0);
    const price1 = toBigNumber(params.price1);
    const reserve0 = toBigNumber(params.reserve0);
    const reserve1 = toBigNumber(params.reserve1);
    const userShares = toBigNumber(params.userShares);
    const totalShares = toBigNumber(params.totalShares);

    const object = {
      price0,
      price1,
      reserve0,
      reserve1,
      userShares,
      totalShares,
    };

    if (checkIfObject(object, { isNotANumber: true, isZero: true })) {
      return toBigNumber(0);
    }

    const token0Price = price0.multipliedBy(
      reserve0.applyDecimals(params.decimals0)
    );
    const token1Price = price1.multipliedBy(
      reserve1.applyDecimals(params.decimals1)
    );
    const priceByLP = token0Price.plus(token1Price).dividedBy(totalShares);

    return userShares.multipliedBy(priceByLP).dp(this.PAIR_DECIMALS);
  }

  /**
   * Calculate the token balances for given pair Liquidity Position.
   * @param {Liquidity.GetTokenBalancesParams} params
   * @returns {Liquidity.GetTokenBalancesResult}
   */
  static getTokenBalances(
    params: Liquidity.GetTokenBalancesParams
  ): Liquidity.GetTokenBalancesResult {
    const reserve0 = toBigNumber(params.reserve0);
    const reserve1 = toBigNumber(params.reserve1);
    const totalSupply = toBigNumber(params.totalSupply);
    const lpBalance = toBigNumber(params.lpBalance);

    const object = { reserve0, reserve1, totalSupply, lpBalance };

    if (checkIfObject(object, { isNotANumber: true, isZero: true })) {
      return {
        balance0: toBigNumber(0),
        balance1: toBigNumber(0),
      };
    }

    const balancePercentage = lpBalance.dividedBy(totalSupply);

    const balance0 = reserve0
      .multipliedBy(balancePercentage)
      .applyDecimals(params.decimals0)
      .dp(params.decimals0);

    const balance1 = reserve1
      .multipliedBy(balancePercentage)
      .applyDecimals(params.decimals1)
      .dp(params.decimals1);

    return { balance0, balance1 };
  }
}

/**
 * Type definition for the Liquidity.
 */
export namespace Liquidity {
  /**
   * Type definition for getOppositeAmount function params.
   * @param {Types.Amount} amountIn Amount of a token in a position
   * @param {Types.Number} reserveIn Amount of token in on swap canister reserve
   * @param {Types.Number} reserveOut Amount of token out on swap canister reserve
   * @param {Types.Decimals} decimalsIn Decimals of token in
   * @param {Types.Decimals} decimalsIn Decimals of token out
   */
  export interface GetOppositeAmountParams {
    amountIn: Types.Amount;
    reserveIn: Types.Number;
    reserveOut: Types.Number;
    decimalsIn: Types.Decimals;
    decimalsOut: Types.Decimals;
  }

  /**
   * Type definition for getMinimalAmountIn function params.
   * @param {Types.Number} reserve Amount of selected token on swap canister reserve
   * @param {Types.Number} reserveOpposite Amount of opposite token on swap canister reserve
   * @param {Types.Decimals} decimals Decimals of selected token
   * @param {Types.Decimals} decimalsOpposite Decimals of opposite token
   */
  export interface GetMinimalAmountInParams {
    reserve: Types.Number;
    reserveOpposite: Types.Number;
    decimals: Types.Decimals;
    decimalsOpposite: Types.Decimals;
  }

  /**
   * Type definition for getPosition function params.
   * @param {Types.Amount} amount0 Amount of token 0
   * @param {Types.Amount} amount1 Amount of token 1
   * @param {Types.Decimals} decimals0 Decimals of token 0
   * @param {Types.Decimals} decimals1 Decimals of token 1
   * @param {Types.Number} reserve0 Amount of token 0 in swap canister reserve
   * @param {Types.Number} reserve1 Amount of token 1 in swap canister reserve
   * @param {Types.Number} totalSupply Total supply of the pair
   */
  export interface GetPositionParams {
    amount0: Types.Amount;
    amount1: Types.Amount;
    decimals0: Types.Decimals;
    decimals1: Types.Decimals;
    reserve0: Types.Number;
    reserve1: Types.Number;
    totalSupply: Types.Number;
    slippage?: Types.Number;
  }

  /**
   * Type definition for getShareOfPool function params.
   */
  export type GetShareOfPoolParams = GetPositionParams;

  /**
   * Type definition for getUserPositionValue function params.
   * @param {Types.Amount} price0 Price of token 0
   * @param {Types.Amount} price1 Price of token 1
   * @param {Types.Decimals} decimals0 Decimals of token 0
   * @param {Types.Decimals} decimals1 Decimals of token 1
   * @param {Types.Number} reserve0 Amount of token 0 in swap canister reserve
   * @param {Types.Number} reserve1 Amount of token 1 in swap canister reserve
   * @param {Types.Amount} totalShares Total supply of the pair
   * @param {Types.Amount} userShare Liquidity Position of user
   */
  export interface GetUserPositionValueParams {
    decimals0: Types.Decimals;
    decimals1: Types.Decimals;
    price0: Types.Amount;
    price1: Types.Amount;
    reserve0: Types.Number;
    reserve1: Types.Number;
    totalShares: Types.Amount;
    userShares: Types.Amount;
  }

  /**
   * Type definition for getTokenBalances function params.
   * @param {Types.Decimals} decimals0 Decimals of token 0
   * @param {Types.Decimals} decimals1 Decimals of token 1
   * @param {Types.Number} reserve0 Amount of token 0 in swap canister reserve
   * @param {Types.Number} reserve1 Amount of token 1 in swap canister reserve
   * @param {Types.Amount} totalSupply Total supply of the pair
   * @param {Types.Amount} lpBalance Liquidity Position of user
   */
  export interface GetTokenBalancesParams {
    decimals0: Types.Decimals;
    decimals1: Types.Decimals;
    reserve0: Types.Number;
    reserve1: Types.Number;
    totalSupply: Types.Number;
    lpBalance: Pair.Balance;
  }

  /**
   * Type definition for getTokenBalances return.
   * @param {BigNumber} balance0 Amount of token 0
   * @param {BigNumber} balance1 Amount of token 1
   */
  export interface GetTokenBalancesResult {
    balance0: BigNumber;
    balance1: BigNumber;
  }
}
