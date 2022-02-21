# Class: Assets

Math calculations for Assets functions.

## Table of contents

### Methods

- [getDepositAmount](Assets.md#getdepositamount)
- [getWithdrawAmount](Assets.md#getwithdrawamount)

### Constructors

- [constructor](Assets.md#constructor)

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

## Constructors

### constructor

• **new Assets**()
