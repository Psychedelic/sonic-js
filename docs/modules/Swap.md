# Namespace: Swap

Type definition for the Swap.

## Table of contents

### Type aliases

- [DataKey](Swap.md#datakey)
- [GetTokenPathsParams](Swap.md#gettokenpathsparams)

### Interfaces

- [GetAmountMinParams](../interfaces/Swap.GetAmountMinParams.md)
- [GetAmountParams](../interfaces/Swap.GetAmountParams.md)
- [GetPriceImpactParams](../interfaces/Swap.GetPriceImpactParams.md)

## Type aliases

### DataKey

Ƭ **DataKey**: ``"from"`` \| ``"to"``

Defines if function should be for "token from" or "token to".

___

### GetTokenPathsParams

Ƭ **GetTokenPathsParams**: `Object`

Type definition for getTokenPaths function params.

**`param`** List of pairs from swap canister

**`param`** List of tokens from swap canister

**`param`** Token id

**`param`** Amount of token in to swap

**`param`** Calculate amount for "token from" or "token to"

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount?` | [`Amount`](Types.md#amount) |
| `dataKey?` | [`DataKey`](Swap.md#datakey) |
| `pairList` | [`List`](Pair.md#list) |
| `tokenId` | `string` |
| `tokenList` | [`MetadataList`](Token.md#metadatalist) |
