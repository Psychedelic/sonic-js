[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Swap

# Namespace: Swap

Type definition for the Swap.

## Table of contents

### Interfaces

- [GetAmountMinParams](../interfaces/Swap.GetAmountMinParams.md)
- [GetAmountParams](../interfaces/Swap.GetAmountParams.md)
- [GetPriceImpactParams](../interfaces/Swap.GetPriceImpactParams.md)

### Type aliases

- [DataKey](Swap.md#datakey)
- [GetTokenPathsParams](Swap.md#gettokenpathsparams)

## Type aliases

### DataKey

Ƭ **DataKey**: ``"from"`` \| ``"to"``

Defines if function should be for "token from" or "token to".

#### Defined in

[math/swap.ts:151](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/swap.ts#L151)

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

#### Defined in

[math/swap.ts:207](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/swap.ts#L207)
