[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Swap

# Class: Swap

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

[math/swap.ts:10](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/swap.ts#L10)

## Methods

### getAmount

▸ `Static` **getAmount**(`params`): `BigNumber`

Calculate the resultant amount of a swap

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAmountParams`](../interfaces/Swap.GetAmountParams.md) |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/swap.ts:16](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/swap.ts#L16)

___

### getAmountMin

▸ `Static` **getAmountMin**(`params`): `BigNumber`

Calculate minimal amount of a swap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetAmountMinParams`](../interfaces/Swap.GetAmountMinParams.md) | Swap.GetAmountMinParams |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/swap.ts:42](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/swap.ts#L42)

___

### getPriceImpact

▸ `Static` **getPriceImpact**(`params`): `BigNumber`

Calculate the price impact based on given amounts and prices

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPriceImpactParams`](../interfaces/Swap.GetPriceImpactParams.md) |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/swap.ts:66](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/swap.ts#L66)

___

### getTokenPaths

▸ `Static` **getTokenPaths**(`__namedParameters`): [`PathList`](../modules/MaximalPaths.md#pathlist)

Calculate the best token path to realize the swap and the output amount

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`GetTokenPathsParams`](../modules/Swap.md#gettokenpathsparams) |

#### Returns

[`PathList`](../modules/MaximalPaths.md#pathlist)

#### Defined in

[math/swap.ts:104](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/swap.ts#L104)
