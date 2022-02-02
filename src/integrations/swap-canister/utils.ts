import { Pair, SwapIDL, Token } from '@/declarations';

export const parseSupportedTokenList = (
  response: SwapIDL.TokenInfoExt[]
): Token.MetadataList => {
  return response.reduce((parsed, item) => {
    return {
      ...parsed,
      [item.id]: item,
    };
  }, {});
};

export const parseAllPairs = (response: SwapIDL.PairInfoExt[]): Pair.List => {
  return response.reduce((list, pair) => {
    const { token0, token1, reserve0, reserve1 } = pair;

    if (Number(reserve0) === 0 && Number(reserve1) === 0) {
      return list;
    }

    return {
      ...list,
      [token0]: {
        ...list[token0],
        [token1]: pair,
      },
      [token1]: {
        ...list[token1],
        [token0]: {
          ...pair,
          token0: token1,
          token1: token0,
          reserve0: reserve1,
          reserve1: reserve0,
        },
      },
    };
  }, {} as Pair.List);
};
