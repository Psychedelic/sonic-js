import BigNumber from 'bignumber.js';

import { Pair } from '@/declarations/pair';

import { toExponential, toBigNumber } from '../utils';
import { Types, checkIfObject } from '../';

export class Liquidity {
  /**
   * Constant from Swap Canister
   */
  static readonly MINIMUM_LIQUIDITY = toExponential(3);

  /**
   * Calculate the pair decimals for given tokens decimals
   * @param params Liquidity.GetPairDecimalsParams
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
   * Calculate the opposite token value for given pair in Liquidity Position
   * @param params Liquidity.GetOppositeAmount
   * @returns BigNumber
   */
  static getOppositeAmount(params: Liquidity.GetOppositeAmount): BigNumber {
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
   * Calculate the Liquidity Position for given amounts of a pair of tokens that is going to be added
   */
  static getPosition(params: Liquidity.GetPositionParams): BigNumber {
    const amount0Desired = toBigNumber(params.amountIn).removeDecimals(
      params.decimalsIn
    );
    const amount1Desired = toBigNumber(params.amountOut).removeDecimals(
      params.decimalsOut
    );
    const reserve0 = toBigNumber(params.reserveIn);
    const reserve1 = toBigNumber(params.reserveOut);
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
   * Calculate Share of a pool of the position based on total supply
   */
  static getShareOfPool(params: Liquidity.GetShareOfPool): BigNumber {
    const totalSupply = toBigNumber(params.totalSupply);

    if (totalSupply.isZero()) {
      return new BigNumber(1);
    }

    const lp = this.getPosition(params);
    const percentage = lp.dividedBy(lp.plus(totalSupply));

    return percentage;
  }

  /**
   * Calculate the token balances for given pair Liquidity Position
   */
  static getTokenBalances({
    pair,
    lpBalance,
  }: Liquidity.GetTokenBalancesParams): Liquidity.GetTokenBalancesResult {
    const balancePercentage = toBigNumber(lpBalance).dividedBy(
      toBigNumber(pair.totalSupply)
    );

    const token0Balance = toBigNumber(pair.reserve0)
      .multipliedBy(balancePercentage)
      .dp(0);
    const token1Balance = toBigNumber(pair.reserve1)
      .multipliedBy(balancePercentage)
      .dp(0);

    return {
      token0: token0Balance,
      token1: token1Balance,
    };
  }
}

export namespace Liquidity {
  export interface GetOppositeAmount {
    amountIn: Types.Amount;
    reserveIn: Types.Number;
    reserveOut: Types.Number;
    decimalsIn: Types.Decimals;
    decimalsOut: Types.Decimals;
  }

  export interface GetPositionParams {
    amountIn: Types.Amount;
    amountOut: Types.Amount;
    decimalsIn: Types.Decimals;
    decimalsOut: Types.Decimals;
    reserveIn: Types.Number;
    reserveOut: Types.Number;
    totalSupply: Types.Number;
  }

  export type GetShareOfPool = GetPositionParams;

  export interface GetTokenBalancesParams {
    pair: Pair.Model;
    lpBalance: Pair.Balance;
  }

  export interface GetTokenBalancesResult {
    token0: BigNumber;
    token1: BigNumber;
  }
}
