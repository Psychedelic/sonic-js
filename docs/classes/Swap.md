# Class: Swap

## Table of contents

### Properties

- [DEFAULT\_FEE](Swap.md#default_fee)

### Methods

- [getAmountIn](Swap.md#getamountin)
- [getAmountMin](Swap.md#getamountmin)
- [getAmountOut](Swap.md#getamountout)
- [getPriceImpact](Swap.md#getpriceimpact)
- [getTokenPaths](Swap.md#gettokenpaths)

### Constructors

- [constructor](Swap.md#constructor)

## Properties

### DEFAULT\_FEE

▪ `Static` `Readonly` **DEFAULT\_FEE**: ``0.003``

## Methods

### getAmountIn

▸ `Static` **getAmountIn**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAmountInParams`](../interfaces/Swap.GetAmountInParams.md) |

#### Returns

`BigNumber`

___

### getAmountMin

▸ `Static` **getAmountMin**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAmountMinParams`](../interfaces/Swap.GetAmountMinParams.md) |

#### Returns

`BigNumber`

___

### getAmountOut

▸ `Static` **getAmountOut**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAmountOutParams`](../interfaces/Swap.GetAmountOutParams.md) |

#### Returns

`BigNumber`

___

### getPriceImpact

▸ `Static` **getPriceImpact**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPriceImpactParams`](../interfaces/Swap.GetPriceImpactParams.md) |

#### Returns

`BigNumber`

___

### getTokenPaths

▸ `Static` **getTokenPaths**(`params`): [`PathList`](../modules/MaximalPaths.md#pathlist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTokenPathsParams`](../modules/Swap.md#gettokenpathsparams) |

#### Returns

[`PathList`](../modules/MaximalPaths.md#pathlist)

## Constructors

### constructor

• **new Swap**()
