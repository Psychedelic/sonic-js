import { SwapActor, TokenActor } from '@/integrations';
import { mockAllPairsResponse } from './pair';
import { mockSupportedTokenListResponse } from './token';

export const mockSwapActor = (): SwapActor =>
  ({
    getSupportedTokenList: async () => mockSupportedTokenListResponse(),
    getAllPairs: async () => mockAllPairsResponse(),
  } as unknown as SwapActor);

export const mockTokenActor = (): TokenActor =>
  ({
    balanceOf: async () => BigInt('1'),
  } as unknown as TokenActor);
