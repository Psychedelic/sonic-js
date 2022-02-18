[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / SwapCanisterController

# Namespace: SwapCanisterController

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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |

#### Defined in

[integrations/swap-canister/controller.ts:294](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L294)

___

### DepositParams

Ƭ **DepositParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |

#### Defined in

[integrations/swap-canister/controller.ts:299](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L299)

___

### GetTokenBalanceParams

Ƭ **GetTokenBalanceParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `principalId` | `string` |
| `tokenId` | `string` |

#### Defined in

[integrations/swap-canister/controller.ts:316](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L316)

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

#### Defined in

[integrations/swap-canister/controller.ts:309](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L309)

___

### WithdrawParams

Ƭ **WithdrawParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId` | `string` |

#### Defined in

[integrations/swap-canister/controller.ts:304](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L304)
