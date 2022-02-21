[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Swap

# Class: Swap

Math calculations for Swap functions.

## Table of contents

### Constructors

- [constructor](Swap.md#constructor)

### Properties

- [DEFAULT\_FEE](Swap.md#default_fee)

### Methods

- [getAmount](Swap.md#getamount)
- [getAmountMin](Swap.md#getamountmin)
- [getPriceImpact](Swap.md#getpriceimpact)
- [getTokenPaths](Swap.md#gettokenpaths)

## Constructors

### constructor

• **new Swap**()

## Properties

### DEFAULT\_FEE

▪ `Static` `Readonly` **DEFAULT\_FEE**: ``0.003``

Default fee for swap (0.3%)

#### Defined in

[math/swap.ts:13](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/swap.ts#L13)

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

#### Defined in

[math/swap.ts:20](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/swap.ts#L20)

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

#### Defined in

[math/swap.ts:46](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/swap.ts#L46)

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

#### Defined in

[math/swap.ts:71](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/swap.ts#L71)

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

#### Defined in

[math/swap.ts:111](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/swap.ts#L111)
