import { SwapIDL, Token } from '@/declarations';

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
