import BigNumber from 'bignumber.js';

export namespace Types {
  /**
   * Numeric value without decimals applied
   */
  export type Number = BigInt | string | number | BigNumber;

  /**
   * Numeric value with decimals applied
   */
  export type Amount = string;

  /**
   * Decimals representation from Swap canister
   */
  export type Decimals = number;
}
