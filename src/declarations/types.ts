import BigNumber from 'bignumber.js';

export namespace Types {
  export type Number = BigInt | string | number | BigNumber;
  export type Decimals = number;
}
