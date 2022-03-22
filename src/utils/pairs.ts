import { Pair } from '@/declarations';
import { toBigNumber } from '@/utils';

/**
 * Remove pairs without reserves from Pair.List.
 * @param {Pair.List} pairList
 * @returns {Pair.List}
 */
export const removeEmptyPairs = (pairList: Pair.List): Pair.List => {
  const filledPairs: Pair.List = {};
  Object.entries(pairList).forEach(([token0, paired]) => {
    filledPairs[token0] = {};
    Object.entries(paired).forEach(([token1, pair]) => {
      if (
        toBigNumber(pair.reserve0).gt(0) &&
        toBigNumber(pair.reserve1).gt(0)
      ) {
        filledPairs[token0][token1] = pair;
      }
    });
  });

  return filledPairs;
};
