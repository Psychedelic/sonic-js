import { SwapIDL } from '@/declarations';
import { Types } from '..';

export namespace Pair {
  export type Model = SwapIDL.PairInfoExt;

  export type List = {
    [canisterId: string]: {
      [canisterId: string]: Model;
    };
  };

  export type Balance = Types.Number;

  export type Balances = {
    [canisterId: string]: {
      [canisterId: string]: Balance;
    };
  };
}
