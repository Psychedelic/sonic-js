import BigNumber from 'bignumber.js';

BigNumber.config({ EXPONENTIAL_AT: 99, ROUNDING_MODE: BigNumber.ROUND_FLOOR });

declare module 'bignumber.js' {
  interface BigNumber {
    toBigInt(): bigint;
  }
}

BigNumber.prototype.toBigInt = function (): bigint {
  return BigInt(this.toString());
};

export * from './declarations';
export * from './utils';
export * from './math';
export * from './integrations';
