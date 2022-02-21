import BigNumber from 'bignumber.js';

import { Pair } from '@/declarations/pair';

import { toExponential, toBigNumber } from '../utils';
import { Types, checkIfObject } from '../';

/**
 * Math calculations for Liquidity functions.
 */
export class Liquidity {
  /**
   * Constant from Swap Canister.
   */
  static readonly MINIMUM_LIQUIDITY = toExponential(3);

  /**
   * Calculate the pair decimals for given tokens decimals.
   * @param {Liquidity.GetPairDecimalsParams} params
   * @returns {Types.Decimals}
   */
  static getPairDecimals(
    token0Decimals: Types.Decimals,
    token1Decimals: Types.Decimals
  ): Types.Decimals {
    return toBigNumber(token0Decimals)
      .plus(token1Decimals)
      .dividedBy(2)
      .dp(0, BigNumber.ROUND_FLOOR)
      .toNumber();
  }

  /**
   * Calculate the opposite token value for given pair in Liquidity Position.
   * @param {Liquidity.GetOppositeAmountParams} params
   * @returns {BigNumber}
   */
  static getOppositeAmount(
    params: Liquidity.GetOppositeAmountParams
  ): BigNumber {
    const amountIn = toBigNumber(params.amountIn);
    const reserveIn = toBigNumber(params.reserveIn);
    const reserveOut = toBigNumber(params.reserveOut);

    if (
      checkIfObject(
        { amountIn, reserveIn, reserveOut },
        { isNotANumber: true, isZero: true }
      )
    ) {
      return toBigNumber(0);
    }

    return amountIn
      .multipliedBy(reserveOut.dividedBy(toExponential(params.decimalsOut)))
      .dividedBy(reserveIn.dividedBy(toExponential(params.decimalsIn)))
      .dp(params.decimalsOut);
  }

  /**
   * Calculate the Liquidity Position for given amounts of a pair of tokens that is going to be added.
   * @param {Liquidity.GetPositionParams} params
   * @returns {BigNumber}
   */
  static getPosition(params: Liquidity.GetPositionParams): BigNumber {
    const amount0Desired = toBigNumber(params.amount0).removeDecimals(
      params.decimals0
    );
    const amount1Desired = toBigNumber(params.amount1).removeDecimals(
      params.decimals1
    );
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
        amount0 = amount0Desired;
        amount1 = amount1Optimal;
      } else {
        const amount0Optimal = amount1Desired
          .multipliedBy(reserve0)
          .dividedBy(reserve1);
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

    const decimals = Liquidity.getPairDecimals(
      params.decimals0,
      params.decimals1
    );

    return userShares.multipliedBy(priceByLP).dp(decimals);
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
