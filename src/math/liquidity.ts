import BigNumber from 'bignumber.js';
import {
  applyDecimals,
  exponential,
  formatAmount,
  removeDecimals,
  toBigNumber,
  Types,
} from '..';

export const MINIMUM_LIQUIDITY = exponential(3);

/**
 * Calculate the pair decimals for given tokens decimals
 */
export const getPairDecimals = (
  token0Decimals: Types.Decimals,
  token1Decimals: Types.Decimals
): Types.Decimals => {
  return toBigNumber(token0Decimals)
    .plus(token1Decimals)
    .dividedBy(2)
    .dp(0, BigNumber.ROUND_FLOOR)
    .toNumber();
};

export interface GetLPParams {
  token0Amount: Types.Amount;
  token1Amount: Types.Amount;
  token0Decimals: Types.Decimals;
  token1Decimals: Types.Decimals;
  reserve0: Types.Number;
  reserve1: Types.Number;
  totalSupply: Types.Number;
}

/**
 * Calculate the LP for given amounts of a pair of tokens
 */
export const getLP = (params: GetLPParams): BigNumber => {
  const amount0Desired = removeDecimals(
    params.token0Amount,
    params.token0Decimals
  );
  const amount1Desired = removeDecimals(
    params.token1Amount,
    params.token1Decimals
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
    lp = amount0.multipliedBy(amount1).sqrt().minus(MINIMUM_LIQUIDITY);
  } else {
    const one = amount0.times(totalSupply).div(reserve0);
    const two = amount1.times(totalSupply).div(reserve1);

    lp = BigNumber.min(one, two);
  }

  return lp.dp(0);
};

export type GetLPAmountParams = GetLPParams;

/**
 * Calculate the LP amount for given amounts of a pair of tokens
 */
export const getLPAmount = (params: GetLPAmountParams): Types.Amount => {
  const lp = getLP(params);

  const pairDecimals = getPairDecimals(
    params.token0Decimals,
    params.token1Decimals
  );

  return applyDecimals(lp, pairDecimals).toString();
};

export type GetLPPercentageStringParams = GetLPAmountParams;

/**
 * Calculate the LP percentage for given amounts of a pair of tokens
 */
export const getAddLPPercentageString = (
  params: GetLPPercentageStringParams
): string => {
  const totalSupply = toBigNumber(params.totalSupply);

  if (totalSupply.isZero()) {
    return '100%';
  }

  const lp = getLP(params);
  const percentage = lp.dividedBy(lp.plus(totalSupply)).multipliedBy(100);

  return formatAmount(percentage.toString()) + '%';
};
