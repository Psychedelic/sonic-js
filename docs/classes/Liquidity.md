# Class: Liquidity

Math calculations for Liquidity functions.

## Table of contents

### Properties

- [MINIMUM\_LIQUIDITY](Liquidity.md#minimum_liquidity)
- [PAIR\_DECIMALS](Liquidity.md#pair_decimals)

### Methods

- [getOppositeAmount](Liquidity.md#getoppositeamount)
- [getPosition](Liquidity.md#getposition)
- [getShareOfPool](Liquidity.md#getshareofpool)
- [getTokenBalances](Liquidity.md#gettokenbalances)
- [getUserPositionValue](Liquidity.md#getuserpositionvalue)

### Constructors

- [constructor](Liquidity.md#constructor)

## Properties

### MINIMUM\_LIQUIDITY

▪ `Static` `Readonly` **MINIMUM\_LIQUIDITY**: `BigNumber`

Constant from Swap Canister.

___

### PAIR\_DECIMALS

▪ `Static` `Readonly` **PAIR\_DECIMALS**: ``8``

## Methods

### getOppositeAmount

▸ `Static` **getOppositeAmount**(`params`): `BigNumber`

Calculate the opposite token value for given pair in Liquidity Position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetOppositeAmountParams`](../interfaces/Liquidity.GetOppositeAmountParams.md) |

#### Returns

`BigNumber`

___

### getPosition

▸ `Static` **getPosition**(`params`): `BigNumber`

Calculate the Liquidity Position for given amounts of a pair of tokens that is going to be added.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPositionParams`](../interfaces/Liquidity.GetPositionParams.md) |

#### Returns

`BigNumber`

___

### getShareOfPool

▸ `Static` **getShareOfPool**(`params`): `BigNumber`

Calculate Share of a pool of the position based on total supply.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetPositionParams`](../interfaces/Liquidity.GetPositionParams.md) |

#### Returns

`BigNumber`

___

### getTokenBalances

▸ `Static` **getTokenBalances**(`params`): [`GetTokenBalancesResult`](../interfaces/Liquidity.GetTokenBalancesResult.md)

Calculate the token balances for given pair Liquidity Position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTokenBalancesParams`](../interfaces/Liquidity.GetTokenBalancesParams.md) |

#### Returns

[`GetTokenBalancesResult`](../interfaces/Liquidity.GetTokenBalancesResult.md)

___

### getUserPositionValue

▸ `Static` **getUserPositionValue**(`params`): `BigNumber`

Calculate the amount of a token in a position based on total supply.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetUserPositionValueParams`](../interfaces/Liquidity.GetUserPositionValueParams.md) |

#### Returns

`BigNumber`

## Constructors

### constructor

• **new Liquidity**()
