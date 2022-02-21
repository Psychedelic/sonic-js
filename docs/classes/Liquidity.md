[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Liquidity

# Class: Liquidity

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

Constant from Swap Canister

#### Defined in

[math/liquidity.ts:12](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/math/liquidity.ts#L12)

## Methods

### getOppositeAmount

▸ `Static` **getOppositeAmount**(`params`): `BigNumber`

Calculate the opposite token value for given pair in Liquidity Position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetOppositeAmount`](../interfaces/Liquidity.GetOppositeAmount.md) | Liquidity.GetOppositeAmount |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/liquidity.ts:35](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/math/liquidity.ts#L35)

___

### getPairDecimals

▸ `Static` **getPairDecimals**(`token0Decimals`, `token1Decimals`): `number`

Calculate the pair decimals for given tokens decimals

#### Parameters

| Name | Type |
| :------ | :------ |
| `token0Decimals` | `number` |
| `token1Decimals` | `number` |

#### Returns

`number`

Types.Decimals

#### Defined in

[math/liquidity.ts:19](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/math/liquidity.ts#L19)

___

### getPosition

▸ `Static` **getPosition**(`params`): `BigNumber`

Calculate the Liquidity Position for given amounts of a pair of tokens that is going to be added

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetPositionParams`](../interfaces/Liquidity.GetPositionParams.md) | Liquidity.GetPositionParams |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/liquidity.ts:60](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/math/liquidity.ts#L60)

___

### getShareOfPool

▸ `Static` **getShareOfPool**(`params`): `BigNumber`

Calculate Share of a pool of the position based on total supply

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetPositionParams`](../interfaces/Liquidity.GetPositionParams.md) | Liquidity.GetShareOfPool |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/liquidity.ts:112](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/math/liquidity.ts#L112)

___

### getTokenBalances

▸ `Static` **getTokenBalances**(`params`): [`GetTokenBalancesResult`](../interfaces/Liquidity.GetTokenBalancesResult.md)

Calculate the token balances for given pair Liquidity Position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetTokenBalancesParams`](../interfaces/Liquidity.GetTokenBalancesParams.md) | Liquidity.GetTokenBalancesParams |

#### Returns

[`GetTokenBalancesResult`](../interfaces/Liquidity.GetTokenBalancesResult.md)

Liquidity.GetTokenBalancesResult

#### Defined in

[math/liquidity.ts:174](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/math/liquidity.ts#L174)

___

### getUserPositionValue

▸ `Static` **getUserPositionValue**(`params`): `BigNumber`

Calculate the amount of a token in a position based on total supply

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetUserPositionValue`](../interfaces/Liquidity.GetUserPositionValue.md) | Liquidity.GetUserPositionValue |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/liquidity.ts:130](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/math/liquidity.ts#L130)
