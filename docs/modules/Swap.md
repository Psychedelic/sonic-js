[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Swap

# Namespace: Swap

## Table of contents

### Interfaces

- [GetAmountMinParams](../interfaces/Swap.GetAmountMinParams.md)
- [GetAmountParams](../interfaces/Swap.GetAmountParams.md)
- [GetPriceImpactParams](../interfaces/Swap.GetPriceImpactParams.md)

### Type aliases

- [DataKey](Swap.md#datakey)
- [GetTokenPathsParams](Swap.md#gettokenpathsparams)
- [GetTokenPathsResult](Swap.md#gettokenpathsresult)

## Type aliases

### DataKey

Ƭ **DataKey**: ``"from"`` \| ``"to"``

#### Defined in

[math/swap.ts:138](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/swap.ts#L138)

___

### GetTokenPathsParams

Ƭ **GetTokenPathsParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount?` | [`Amount`](Types.md#amount) |
| `dataKey?` | [`DataKey`](Swap.md#datakey) |
| `pairList` | [`List`](Pair.md#list) |
| `tokenId` | `string` |
| `tokenList` | [`MetadataList`](Token.md#metadatalist) |

#### Defined in

[math/swap.ts:163](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/swap.ts#L163)

___

### GetTokenPathsResult

Ƭ **GetTokenPathsResult**: [`PathList`](MaximalPaths.md#pathlist)

#### Defined in

[math/swap.ts:171](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/swap.ts#L171)
