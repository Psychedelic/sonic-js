import BigNumber from 'bignumber.js';
import { exponential } from '@/utils';

BigNumber.config({ EXPONENTIAL_AT: 99, ROUNDING_MODE: BigNumber.ROUND_FLOOR });

declare module 'bignumber.js' {
  interface BigNumber {
    toBigInt(): bigint;
    applyDecimals(decimals: number): BigNumber;
    removeDecimals(decimals: number): BigNumber;
  }
}

/**
 * Returns a bigint from a BigNumber
 */
BigNumber.prototype.toBigInt = function (): bigint {
  return BigInt(this.toString());
};

/**
 * Apply decimals to a number
 */
BigNumber.prototype.applyDecimals = function (decimals: number): BigNumber {
  return this.dividedBy(exponential(decimals)).dp(decimals);
};

/**
 * Removes decimals from a number
 */
BigNumber.prototype.removeDecimals = function (decimals: number): BigNumber {
  return this.dp(decimals).multipliedBy(exponential(decimals));
};
