import BigNumber from 'bignumber.js';

export namespace Types {
  /**
   * It receives all possible representations of a number. (e.g. integer, float, percentage, bigint)
   */
  export type Number = BigInt | string | number | BigNumber;

  /**
   * It is a string that represents the number that is shown on user interfaces. (e.g. token amount, money amount)
   */
  export type Amount = string;

  /**
   * It is always a integer that represents the decimals allowed on a DIP20 token.
   */
  export type Decimals = number;
}
