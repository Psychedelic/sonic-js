import BigNumber from 'bignumber.js';
import { SwapIDL } from './did';

export namespace Token {
  export type Metadata = SwapIDL.TokenInfoExt & {
    logo: string;
    price?: string;
  };

  export type MetadataList = {
    [canisterId: string]: Metadata;
  };

  export interface Data<M = Metadata> {
    metadata?: M;
    amount: string;
  }

  export type Balance = {
    sonic: BigNumber;
    token: BigNumber;
    total: BigNumber;
  };

  export type BalanceList = {
    [canisterId: string]: Balance;
  };
}
