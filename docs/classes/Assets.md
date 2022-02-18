[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Assets

# Class: Assets

## Table of contents

### Constructors

- [constructor](Assets.md#constructor)

### Methods

- [getDepositAmount](Assets.md#getdepositamount)
- [getWithdrawAmount](Assets.md#getwithdrawamount)

## Constructors

### constructor

• **new Assets**()

## Methods

### getDepositAmount

▸ `Static` **getDepositAmount**(`params`): `BigNumber`

Calculates the maximal amount of tokens that can be deposited from given token balance.
The calculation applies the token fee twice.
Fee paid for approval and fee paid for deposit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetMaxDepositAmountParams`](../interfaces/Assets.GetMaxDepositAmountParams.md) | Assets.GetMaxDepositAmountParams |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/assets.ts:13](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/assets.ts#L13)

___

### getWithdrawAmount

▸ `Static` **getWithdrawAmount**(`params`): `BigNumber`

Calculates the resultant amount of tokens after sonic withdraw.
The calculation applies the token fee.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetWithdrawAmountParams`](../interfaces/Assets.GetWithdrawAmountParams.md) | Assets.GetMaxWithdrawAmountParams |

#### Returns

`BigNumber`

BigNumber

#### Defined in

[math/assets.ts:32](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/math/assets.ts#L32)
