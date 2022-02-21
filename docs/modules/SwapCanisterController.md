# Namespace: SwapCanisterController

Type definition for the SwapCanisterController.

## Table of contents

### Type aliases

- [ApproveParams](SwapCanisterController.md#approveparams)
- [DepositParams](SwapCanisterController.md#depositparams)
- [GetTokenBalanceParams](SwapCanisterController.md#gettokenbalanceparams)
- [SwapParams](SwapCanisterController.md#swapparams)
- [WithdrawParams](SwapCanisterController.md#withdrawparams)

## Type aliases

### ApproveParams

Ƭ **ApproveParams**: `Object`

Type definition for params of the approve function.

**`param`**

**`param`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |

___

### DepositParams

Ƭ **DepositParams**: `Object`

Type definition for params of the deposit function.

**`param`**

**`param`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |

___

### GetTokenBalanceParams

Ƭ **GetTokenBalanceParams**: `Object`

Type definition for params of the getTokenBalance function.

**`param`** User's principal id

**`param`** Token id to fetch balance for

#### Type declaration

| Name | Type |
| :------ | :------ |
| `principalId` | `string` |
| `tokenId` | `string` |

___

### SwapParams

Ƭ **SwapParams**: `Object`

Type definition for params of the swap function.

**`param`** Amount of input token to swap

**`param`** Input token id

**`param`** Output token id

**`param`** Percentage of slippage allowed

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amountIn` | [`Amount`](Types.md#amount) |
| `slippage?` | [`Number`](Types.md#number) |
| `tokenIn` | `string` |
| `tokenOut` | `string` |

___

### WithdrawParams

Ƭ **WithdrawParams**: `Object`

Type definition for params of the withdraw function.

**`param`**

**`param`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |
