[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / MaximalPaths

# Namespace: MaximalPaths

Type definition for the maximal paths graph solver.

## Table of contents

### Type aliases

- [Node](MaximalPaths.md#node)
- [NodeList](MaximalPaths.md#nodelist)
- [Path](MaximalPaths.md#path)
- [PathList](MaximalPaths.md#pathlist)
- [WeightList](MaximalPaths.md#weightlist)

## Type aliases

### Node

Ƭ **Node**: `Object`

Type definition for Node object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `id` | `string` |
| `path` | `Set`<`string`\> |

#### Defined in

[utils/maximal-paths.ts:107](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/maximal-paths.ts#L107)

___

### NodeList

Ƭ **NodeList**: `Object`

Type definition for NodeList object.

#### Index signature

▪ [tokenId: `string`]: [`Node`](MaximalPaths.md#node)

#### Defined in

[utils/maximal-paths.ts:116](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/maximal-paths.ts#L116)

___

### Path

Ƭ **Path**: `Object`

Type definition for Path object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `path` | `string`[] |

#### Defined in

[utils/maximal-paths.ts:123](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/maximal-paths.ts#L123)

___

### PathList

Ƭ **PathList**: `Object`

Type definition for PathList object.

#### Index signature

▪ [tokenId: `string`]: [`Path`](MaximalPaths.md#path)

#### Defined in

[utils/maximal-paths.ts:131](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/maximal-paths.ts#L131)

___

### WeightList

Ƭ **WeightList**: `Object`

Weight list for graph nodes.

#### Index signature

▪ [tokenId: `string`]: `BigNumber`

#### Defined in

[utils/maximal-paths.ts:100](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/maximal-paths.ts#L100)
