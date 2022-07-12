# Namespace: SwapCanisterController

## Table of contents

### Type Aliases

- [AddLiquidityParams](SwapCanisterController.md#addliquidityparams)
- [ApproveParams](SwapCanisterController.md#approveparams)
- [DepositParams](SwapCanisterController.md#depositparams)
- [DepositTokensNeededBalanceParams](SwapCanisterController.md#deposittokensneededbalanceparams)
- [GetTokenBalanceParams](SwapCanisterController.md#gettokenbalanceparams)
- [RemoveLiquidityParams](SwapCanisterController.md#removeliquidityparams)
- [SwapParams](SwapCanisterController.md#swapparams)
- [WithdrawParams](SwapCanisterController.md#withdrawparams)

## Type Aliases

### AddLiquidityParams

Ƭ **AddLiquidityParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount0` | [`Amount`](Types.md#amount) |
| `amount1` | [`Amount`](Types.md#amount) |
| `slippage?` | [`Number`](Types.md#number) |
| `token0` | `string` |
| `token1` | `string` |

___

### ApproveParams

Ƭ **ApproveParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |

___

### DepositParams

Ƭ **DepositParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |

___

### DepositTokensNeededBalanceParams

Ƭ **DepositTokensNeededBalanceParams**: [`DepositParams`](SwapCanisterController.md#depositparams)[]

___

### GetTokenBalanceParams

Ƭ **GetTokenBalanceParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `principalId` | `string` |
| `tokenId` | `string` |

___

### RemoveLiquidityParams

Ƭ **RemoveLiquidityParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `slippage?` | [`Number`](Types.md#number) |
| `token0` | `string` |
| `token1` | `string` |

___

### SwapParams

Ƭ **SwapParams**: `Object`

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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |
