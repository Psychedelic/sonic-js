[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Assets

# Class: Assets

Math calculations for Assets functions.

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

| Name | Type |
| :------ | :------ |
| `params` | [`GetDepositAmountParams`](../interfaces/Assets.GetDepositAmountParams.md) |

#### Returns

`BigNumber`

#### Defined in

[math/assets.ts:15](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/assets.ts#L15)

___

### getWithdrawAmount

▸ `Static` **getWithdrawAmount**(`params`): `BigNumber`

Calculates the resultant amount of tokens after sonic withdraw.
The calculation applies the token fee.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetWithdrawAmountParams`](../interfaces/Assets.GetWithdrawAmountParams.md) |

#### Returns

`BigNumber`

#### Defined in

[math/assets.ts:33](https://github.com/Psychedelic/sonic-js/blob/1430250/src/math/assets.ts#L33)
