import { Pair, Token } from '@/declarations';
import { applyDecimals } from '@/utils';
import { Principal } from '@dfinity/principal';
import { createTokenActor, SwapActor } from '..';
import { parseSupportedTokenList, parseAllPairs } from './utils';

export class SwapCanisterController {
  tokenList: Token.MetadataList | null = null;
  pairList: Pair.List | null = null;
  balanceList: Token.BalanceList | null = null;

  constructor(private swapActor: SwapActor) {}

  async getTokenList(): Promise<Token.MetadataList> {
    const response = await this.swapActor.getSupportedTokenList();
    const parsedResponse = parseSupportedTokenList(response);
    this.tokenList = parsedResponse;
    return parsedResponse;
  }

  async getPairList(): Promise<Pair.List> {
    const response = await this.swapActor.getAllPairs();
    const parsedResponse = parseAllPairs(response);
    this.pairList = parsedResponse;
    return parsedResponse;
  }

  async getTokenBalances(principalId: string): Promise<Token.BalanceList> {
    if (!this.tokenList) await this.getTokenList();

    const tokens = Object.values(this.tokenList as Token.MetadataList);
    const tokenBalancePromises = tokens.map((token) =>
      createTokenActor({ canisterId: token.id })
        .then((tokenActor) =>
          tokenActor.balanceOf(Principal.fromText(principalId))
        )
        .then((balance) => ({
          [token.id]: applyDecimals(balance, token.decimals),
        }))
    );

    const promiseResults = await Promise.all(tokenBalancePromises);

    const balanceList = promiseResults.reduce(
      (acc, result) => ({ ...acc, ...result }),
      {}
    );

    this.balanceList = balanceList;

    return balanceList;
  }
}
