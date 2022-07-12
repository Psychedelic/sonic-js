# Class: Liquidity

## Table of contents

### Properties

- [MINIMUM\_LIQUIDITY](Liquidity.md#minimum_liquidity)
- [PAIR\_DECIMALS](Liquidity.md#pair_decimals)

### Methods

- [getMinimalAmountIn](Liquidity.md#getminimalamountin)
- [getOppositeAmount](Liquidity.md#getoppositeamount)
- [getPosition](Liquidity.md#getposition)
- [getShareOfPool](Liquidity.md#getshareofpool)
- [getTokenBalances](Liquidity.md#gettokenbalances)
- [getUserPositionValue](Liquidity.md#getuserpositionvalue)

### Constructors

- [constructor](Liquidity.md#constructor)

## Properties

### MINIMUM\_LIQUIDITY

▪ `Static` `Readonly` **MINIMUM\_LIQUIDITY**: ``1000``

___

### PAIR\_DECIMALS

▪ `Static` `Readonly` **PAIR\_DECIMALS**: ``8``

## Methods

### getMinimalAmountIn

▸ `Static` **getMinimalAmountIn**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetMinimalAmountInParams`](../interfaces/Liquidity.GetMinimalAmountInParams.md) |

#### Returns

`BigNumber`

___

### getOppositeAmount

▸ `Static` **getOppositeAmount**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetOppositeAmountParams`](../interfaces/Liquidity.GetOppositeAmountParams.md) |

#### Returns

`BigNumber`

___

### getPosition

▸ `Static` **getPosition**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPositionParams`](../interfaces/Liquidity.GetPositionParams.md) |

#### Returns

`BigNumber`

___

### getShareOfPool

▸ `Static` **getShareOfPool**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPositionParams`](../interfaces/Liquidity.GetPositionParams.md) |

#### Returns

`BigNumber`

___

### getTokenBalances

▸ `Static` **getTokenBalances**(`params`): [`GetTokenBalancesResult`](../interfaces/Liquidity.GetTokenBalancesResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTokenBalancesParams`](../interfaces/Liquidity.GetTokenBalancesParams.md) |

#### Returns

[`GetTokenBalancesResult`](../interfaces/Liquidity.GetTokenBalancesResult.md)

___

### getUserPositionValue

▸ `Static` **getUserPositionValue**(`params`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetUserPositionValueParams`](../interfaces/Liquidity.GetUserPositionValueParams.md) |

#### Returns

`BigNumber`

## Constructors

### constructor

• **new Liquidity**()
