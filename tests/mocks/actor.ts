import { SwapActor } from '@/integrations';
import { mockAllPairsResponse } from './pair';
import { mockSupportedTokenListResponse } from './token';

export const mockSwapActor = (): SwapActor =>
  ({
    getSupportedTokenList: async () => mockSupportedTokenListResponse(),
    getAllPairs: async () => mockAllPairsResponse(),
  } as SwapActor);
