import { SwapIDL } from '@/declarations';

export namespace Pair {
  export type Model = SwapIDL.PairInfoExt;

  export type List = {
    [canisterId: string]: {
      [canisterId: string]: Model;
    };
  };

  export type Balance = number;

  export type Balances = {
    [canisterId: string]: {
      [canisterId: string]: Balance;
    };
  };
}
