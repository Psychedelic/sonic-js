[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / MaximalPaths

# Namespace: MaximalPaths

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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `id` | `string` |
| `path` | `Set`<`string`\> |

#### Defined in

[utils/maximal-paths.ts:89](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/maximal-paths.ts#L89)

___

### NodeList

Ƭ **NodeList**: `Object`

#### Index signature

▪ [tokenId: `string`]: [`Node`](MaximalPaths.md#node)

#### Defined in

[utils/maximal-paths.ts:95](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/maximal-paths.ts#L95)

___

### Path

Ƭ **Path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `path` | `string`[] |

#### Defined in

[utils/maximal-paths.ts:99](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/maximal-paths.ts#L99)

___

### PathList

Ƭ **PathList**: `Object`

#### Index signature

▪ [tokenId: `string`]: [`Path`](MaximalPaths.md#path)

#### Defined in

[utils/maximal-paths.ts:104](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/maximal-paths.ts#L104)

___

### WeightList

Ƭ **WeightList**: `Object`

#### Index signature

▪ [tokenId: `string`]: `BigNumber`

#### Defined in

[utils/maximal-paths.ts:85](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/maximal-paths.ts#L85)
