import { Pair, Token } from '@/declarations';
import { Swap } from '@/math';
import { toBigNumber } from '@/utils';
import BigNumber from 'bignumber.js';

export const findMaximalPaths = (
  pairList: Pair.List,
  tokenList: Token.MetadataList,
  source: string,
  initialAmount: BigNumber
): MaximalPaths.NodeList => {
  const nodes = Object.keys(pairList).reduce((_nodes, tokenId) => {
    return {
      ..._nodes,
      [tokenId]: {
        id: tokenId,
        amountOut: toBigNumber(-1),
        path: new Set<string>(),
      },
    };
  }, {} as MaximalPaths.NodeList);

  const getNeighborsWeights = (
    node: MaximalPaths.Node,
    pathDistance: BigNumber
  ): MaximalPaths.WeightList => {
    const neighborsIds = Object.keys(pairList[node.id]);

    return neighborsIds.reduce<MaximalPaths.WeightList>(
      (weightItems, neighborId) => {
        const weight = Swap.getAmountOut({
          amountIn: pathDistance.toString(),
          decimalsIn: tokenList[node.id].decimals,
          decimalsOut: tokenList[neighborId].decimals,
          reserveIn: pairList[node.id][neighborId].reserve0,
          reserveOut: pairList[node.id][neighborId].reserve1,
        });

        return {
          ...weightItems,
          [neighborId]: weight,
        };
      },
      {}
    );
  };

  const testNode = (
    node: MaximalPaths.Node,
    path: Set<string> = new Set(),
    pathDistance = initialAmount,
    pathWeightList: MaximalPaths.WeightList = {}
  ): void => {
    const previousId = [...path].pop();
    const newPathDistance = previousId ? pathWeightList[node.id] : pathDistance;
    const newPath = new Set([...path, node.id]);

    if (newPathDistance.gt(node.amountOut)) {
      node.amountOut = newPathDistance;
      node.path = newPath;
    }

    for (const neighborId in pairList[node.id]) {
      const neighbor = nodes[neighborId];

      if (!path.has(neighborId)) {
        testNode(
          neighbor,
          newPath,
          newPathDistance,
          getNeighborsWeights(node, newPathDistance)
        );
      }
    }
  };

  testNode(nodes[source]);

  return nodes;
};

export namespace MaximalPaths {
  export type WeightList = {
    [tokenId: string]: BigNumber;
  };

  export type Node = {
    id: string;
    amountOut: BigNumber;
    path: Set<string>;
  };

  export type NodeList = {
    [tokenId: string]: Node;
  };

  export type Path = {
    amountOut: BigNumber;
    path: string[];
  };

  export type PathList = {
    [tokenId: string]: Path;
  };
}
