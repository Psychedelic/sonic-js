import { SwapActor } from '@/integrations';
import { mockSupportedTokenListResponse } from './token';

export const mockSwapActor = (): SwapActor =>
  ({
    getSupportedTokenList: async () => mockSupportedTokenListResponse(),
  } as SwapActor);
