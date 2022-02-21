[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Liquidity

# Class: Liquidity

Math calculations for Liquidity functions.

## Table of contents

### Constructors

- [constructor](Liquidity.md#constructor)

### Properties

- [MINIMUM\_LIQUIDITY](Liquidity.md#minimum_liquidity)

### Methods

- [getOppositeAmount](Liquidity.md#getoppositeamount)
- [getPairDecimals](Liquidity.md#getpairdecimals)
- [getPosition](Liquidity.md#getposition)
- [getShareOfPool](Liquidity.md#getshareofpool)
- [getTokenBalances](Liquidity.md#gettokenbalances)
- [getUserPositionValue](Liquidity.md#getuserpositionvalue)

## Constructors

### constructor

• **new Liquidity**()

## Properties

### MINIMUM\_LIQUIDITY

▪ `Static` `Readonly` **MINIMUM\_LIQUIDITY**: `BigNumber`

Constant from Swap Canister.

#### Defined in

[math/liquidity.ts:15](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/liquidity.ts#L15)

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

#### Defined in

[math/liquidity.ts:38](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/liquidity.ts#L38)

___

### getPairDecimals

▸ `Static` **getPairDecimals**(`token0Decimals`, `token1Decimals`): `number`

Calculate the pair decimals for given tokens decimals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token0Decimals` | `number` |
| `token1Decimals` | `number` |

#### Returns

`number`

#### Defined in

[math/liquidity.ts:22](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/liquidity.ts#L22)

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

#### Defined in

[math/liquidity.ts:65](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/liquidity.ts#L65)

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

#### Defined in

[math/liquidity.ts:117](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/liquidity.ts#L117)

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

#### Defined in

[math/liquidity.ts:179](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/liquidity.ts#L179)

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

#### Defined in

[math/liquidity.ts:135](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/liquidity.ts#L135)
