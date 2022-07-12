# Namespace: MaximalPaths

## Table of contents

### Type Aliases

- [GraphResolver](MaximalPaths.md#graphresolver)
- [Node](MaximalPaths.md#node)
- [NodeList](MaximalPaths.md#nodelist)
- [Path](MaximalPaths.md#path)
- [PathList](MaximalPaths.md#pathlist)
- [WeightList](MaximalPaths.md#weightlist)

## Type Aliases

### GraphResolver

Ƭ **GraphResolver**: (`pairList`: [`List`](Pair.md#list), `tokenList`: [`MetadataList`](Token.md#metadatalist), `source`: `string`, `initialAmount`: `BigNumber`) => [`NodeList`](MaximalPaths.md#nodelist)

#### Type declaration

▸ (`pairList`, `tokenList`, `source`, `initialAmount`): [`NodeList`](MaximalPaths.md#nodelist)

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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `id` | `string` |
| `path` | `Set`<`string`\> |

___

### NodeList

Ƭ **NodeList**: `Object`

#### Index signature

▪ [tokenId: `string`]: [`Node`](MaximalPaths.md#node)

___

### Path

Ƭ **Path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `path` | `string`[] |

___

### PathList

Ƭ **PathList**: `Object`

#### Index signature

▪ [tokenId: `string`]: [`Path`](MaximalPaths.md#path)

___

### WeightList

Ƭ **WeightList**: `Object`

#### Index signature

▪ [tokenId: `string`]: `BigNumber`
