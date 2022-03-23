# Namespace: MaximalPaths

Type definition for the maximal paths graph solver.

## Table of contents

### Type aliases

- [GraphResolver](MaximalPaths.md#graphresolver)
- [Node](MaximalPaths.md#node)
- [NodeList](MaximalPaths.md#nodelist)
- [Path](MaximalPaths.md#path)
- [PathList](MaximalPaths.md#pathlist)
- [WeightList](MaximalPaths.md#weightlist)

## Type aliases

### GraphResolver

Ƭ **GraphResolver**: (`pairList`: [`List`](Pair.md#list), `tokenList`: [`MetadataList`](Token.md#metadatalist), `source`: `string`, `initialAmount`: `BigNumber`) => [`NodeList`](MaximalPaths.md#nodelist)

#### Type declaration

▸ (`pairList`, `tokenList`, `source`, `initialAmount`): [`NodeList`](MaximalPaths.md#nodelist)

Type definition for a GraphResolver function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `pairList` | [`List`](Pair.md#list) |
| `tokenList` | [`MetadataList`](Token.md#metadatalist) |
| `source` | `string` |
| `initialAmount` | `BigNumber` |

##### Returns

[`NodeList`](MaximalPaths.md#nodelist)

___

### Node

Ƭ **Node**: `Object`

Type definition for Node object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `id` | `string` |
| `path` | `Set`<`string`\> |

___

### NodeList

Ƭ **NodeList**: `Object`

Type definition for NodeList object.

#### Index signature

▪ [tokenId: `string`]: [`Node`](MaximalPaths.md#node)

___

### Path

Ƭ **Path**: `Object`

Type definition for Path object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `path` | `string`[] |

___

### PathList

Ƭ **PathList**: `Object`

Type definition for PathList object.

#### Index signature

▪ [tokenId: `string`]: [`Path`](MaximalPaths.md#path)

___

### WeightList

Ƭ **WeightList**: `Object`

Weight list for graph nodes.

#### Index signature

▪ [tokenId: `string`]: `BigNumber`
