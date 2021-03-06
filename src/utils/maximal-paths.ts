import { Pair, Token } from '@/declarations';
import { Swap } from '@/math';
import { toBigNumber } from '@/utils';
import BigNumber from 'bignumber.js';

/**
 * Maximal paths graph solver.
 * @param {Pair.List} pairList
 * @param {Token.MetadataList} tokenList
 * @param {Token.Metadata} source
 * @param {BigNumber} initialAmount
 * @returns {MaximalPaths.NodeList}
 */
export const findMaximalPaths: MaximalPaths.GraphResolver = (
  pairList,
  tokenList,
  source,
  initialAmount
) => {
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

/**
 * Reverse maximal paths graph solver.
 * @param {Pair.List} pairList
 * @param {Token.MetadataList} tokenList
 * @param {Token.Metadata} source
 * @param {BigNumber} initialAmount
 * @returns {MaximalPaths.NodeList}
 */
export const findReverseMaximalPaths: MaximalPaths.GraphResolver = (
  pairList,
  tokenList,
  source,
  initialAmount
) => {
  const nodes = Object.keys(pairList).reduce((_nodes, tokenId) => {
    return {
      ..._nodes,
      [tokenId]: {
        id: tokenId,
        amountOut: toBigNumber(Infinity),
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
        const weight = Swap.getAmountIn({
          amountOut: pathDistance.toString(),
          decimalsIn: tokenList[neighborId].decimals,
          decimalsOut: tokenList[node.id].decimals,
          reserveIn: pairList[neighborId][node.id].reserve0,
          reserveOut: pairList[neighborId][node.id].reserve1,
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

    if (newPathDistance.lt(node.amountOut)) {
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

/**
 * Type definition for the maximal paths graph solver.
 */
export namespace MaximalPaths {
  /**
   * Weight list for graph nodes.
   */
  export type WeightList = {
    [tokenId: string]: BigNumber;
  };

  /**
   * Type definition for Node object.
   */
  export type Node = {
    id: string;
    amountOut: BigNumber;
    path: Set<string>;
  };

  /**
   * Type definition for NodeList object.
   */
  export type NodeList = {
    [tokenId: string]: Node;
  };

  /**
   * Type definition for Path object.
   */
  export type Path = {
    amountOut: BigNumber;
    path: string[];
  };

  /**
   * Type definition for PathList object.
   */
  export type PathList = {
    [tokenId: string]: Path;
  };

  /**
   * Type definition for a GraphResolver function.
   */
  export type GraphResolver = (
    pairList: Pair.List,
    tokenList: Token.MetadataList,
    source: string,
    initialAmount: BigNumber
  ) => NodeList;
}
