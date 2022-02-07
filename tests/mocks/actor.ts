import { SwapActor, TokenActor } from '@/integrations';
import { Agent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { mockAllPairsResponse } from './pair';
import { mockPrincipal } from './principal';
import { mockSupportedTokenListResponse } from './token';

export const mockSwapActor = (): SwapActor =>
  ({
    getSupportedTokenList: async () => mockSupportedTokenListResponse(),
    getAllPairs: async () => mockAllPairsResponse(),
  } as unknown as SwapActor);

export const mockTokenActor = (): TokenActor =>
  ({
    balanceOf: async () => BigInt('1'),
    approve: async (tokenId: Principal, amount: bigint) => ({ Ok: BigInt(1) }),
  } as unknown as TokenActor);

export const mockAgent = (): Agent =>
  ({
    getPrincipal: async () => mockPrincipal(),
  } as unknown as Agent);
