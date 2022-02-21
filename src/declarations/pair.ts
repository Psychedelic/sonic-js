import { SwapIDL } from '@/declarations';
import { Types } from '..';

export namespace Pair {
  /**
   * Type definition for a pair.
   */
  export type Metadata = SwapIDL.PairInfoExt;

  /**
   * Type definition for a list of pairs.
   * It is represented using nested object in the structure of:
   * [canisterId][canisterId]: Metadata
   */
  export type List = {
    [canisterId: string]: {
      [canisterId: string]: Metadata;
    };
  };

  /**
   * Type definition for a pair Liquidity Position balance.
   */
  export type Balance = Types.Number;

  /**
   * Type definition for a pair Liquidity Position balance.
   * It is represented using nested object in the structure of:
   * [canisterId][canisterId]: Balance
   */
  export type Balances = {
    [canisterId: string]: {
      [canisterId: string]: Balance;
    };
  };
}
