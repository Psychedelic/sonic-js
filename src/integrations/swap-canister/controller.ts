import { Token } from '@/declarations';
import { SwapActor } from '..';
import { parseSupportedTokenList } from './utils';

export class SwapCanisterController {
  tokenList: Token.MetadataList | null = null;

  constructor(private swapActor: SwapActor) {}

  async getTokenList(): Promise<Token.MetadataList> {
    const response = await this.swapActor.getSupportedTokenList();
    const parsedResponse = parseSupportedTokenList(response);
    this.tokenList = parsedResponse;
    return parsedResponse;
  }
}
