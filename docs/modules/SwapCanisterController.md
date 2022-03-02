# Namespace: SwapCanisterController

Type definition for the SwapCanisterController.

## Table of contents

### Type aliases

- [AddLiquidityParams](SwapCanisterController.md#addliquidityparams)
- [ApproveParams](SwapCanisterController.md#approveparams)
- [DepositParams](SwapCanisterController.md#depositparams)
- [DepositTokensNeededBalanceParams](SwapCanisterController.md#deposittokensneededbalanceparams)
- [GetTokenBalanceParams](SwapCanisterController.md#gettokenbalanceparams)
- [RemoveLiquidityParams](SwapCanisterController.md#removeliquidityparams)
- [SwapParams](SwapCanisterController.md#swapparams)
- [WithdrawParams](SwapCanisterController.md#withdrawparams)

## Type aliases

### AddLiquidityParams

Ƭ **AddLiquidityParams**: `Object`

Type definition for params of the addLiquidity function.

**`param`** Token id

**`param`** Token id

**`param`** Amount of token0 to add

**`param`** Amount of token1 to add

**`param`** Percentage of slippage allowed

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

### DepositTokensNeededBalanceParams

Ƭ **DepositTokensNeededBalanceParams**: [`DepositParams`](SwapCanisterController.md#depositparams)[]

Type definition for params of the depositTokensNeededBalance function.

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

### RemoveLiquidityParams

Ƭ **RemoveLiquidityParams**: `Object`

Type definition for params of the removeLiquidity function.

**`param`** Token id

**`param`** Token id

**`param`** Liquidity Position amount to remove

**`param`** Percentage of slippage allowed

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
