import BigNumber from 'bignumber.js';
import { toExponential } from '@/utils';

BigNumber.config({ EXPONENTIAL_AT: 99, ROUNDING_MODE: BigNumber.ROUND_FLOOR });

declare module 'bignumber.js' {
  interface BigNumber {
    toBigInt(): bigint;
    applyDecimals(decimals: number): BigNumber;
    removeDecimals(decimals: number): BigNumber;
    applyTolerance(percentage: number, type?: 'min' | 'max'): BigNumber;
  }
}

/**
 * Transforms BigNumber into bigint.
 * @returns {bigint}
 */
BigNumber.prototype.toBigInt = function (): bigint {
  return BigInt(this.toString());
};

/**
 * Apply decimals to a number.
 * @param {number} decimals Decimals to apply
 * @returns {BigNumber}
 */
BigNumber.prototype.applyDecimals = function (decimals: number): BigNumber {
  return this.dividedBy(toExponential(decimals)).dp(decimals);
};

/**
 * Removes decimals from a number.
 * @param {number} decimals Decimals to remove
 * @returns {BigNumber}
 */
BigNumber.prototype.removeDecimals = function (decimals: number): BigNumber {
  return this.dp(decimals).multipliedBy(toExponential(decimals));
};

/**
 * Returns the number for a given maximal/minimal tolerance.
 * @param {number} percentage Tolerance percentage
 * @param {'min' | 'max'='max'} type Tolerance under or above
 * @returns {BigNumber}
 */
BigNumber.prototype.applyTolerance = function (
  percentage: number,
  type = 'min'
): BigNumber {
  const toleranceCoefficient = new BigNumber(1).plus(
    percentage * (type === 'max' ? 1 : -1)
  );
  return this.multipliedBy(toleranceCoefficient);
};
