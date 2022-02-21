# Class: Swap

Math calculations for Swap functions.

## Table of contents

### Properties

- [DEFAULT\_FEE](Swap.md#default_fee)

### Methods

- [getAmount](Swap.md#getamount)
- [getAmountMin](Swap.md#getamountmin)
- [getPriceImpact](Swap.md#getpriceimpact)
- [getTokenPaths](Swap.md#gettokenpaths)

### Constructors

- [constructor](Swap.md#constructor)

## Properties

### DEFAULT\_FEE

▪ `Static` `Readonly` **DEFAULT\_FEE**: ``0.003``

Default fee for swap (0.3%)

## Methods

### getAmount

▸ `Static` **getAmount**(`params`): `BigNumber`

Calculate the resultant amount of a swap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAmountParams`](../interfaces/Swap.GetAmountParams.md) |

#### Returns

`BigNumber`

___

### getAmountMin

▸ `Static` **getAmountMin**(`params`): `BigNumber`

Calculate minimal amount of a swap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAmountMinParams`](../interfaces/Swap.GetAmountMinParams.md) |

#### Returns

`BigNumber`

___

### getPriceImpact

▸ `Static` **getPriceImpact**(`params`): `BigNumber`

Calculate the price impact based on given amounts and prices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPriceImpactParams`](../interfaces/Swap.GetPriceImpactParams.md) |

#### Returns

`BigNumber`

___

### getTokenPaths

▸ `Static` **getTokenPaths**(`params`): [`PathList`](../modules/MaximalPaths.md#pathlist)

Calculate the best token path to realize the swap and the output amount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTokenPathsParams`](../modules/Swap.md#gettokenpathsparams) |

#### Returns

[`PathList`](../modules/MaximalPaths.md#pathlist)

## Constructors

### constructor

• **new Swap**()
