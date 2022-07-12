# Namespace: Swap

## Table of contents

### Type Aliases

- [DataKey](Swap.md#datakey)
- [GetTokenPathsParams](Swap.md#gettokenpathsparams)

### Interfaces

- [GetAmountInParams](../interfaces/Swap.GetAmountInParams.md)
- [GetAmountMinParams](../interfaces/Swap.GetAmountMinParams.md)
- [GetAmountOutParams](../interfaces/Swap.GetAmountOutParams.md)
- [GetPriceImpactParams](../interfaces/Swap.GetPriceImpactParams.md)

## Type Aliases

### DataKey

Ƭ **DataKey**: ``"from"`` \| ``"to"``

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
