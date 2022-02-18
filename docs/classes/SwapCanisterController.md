[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / SwapCanisterController

# Class: SwapCanisterController

Swap Canister Controller
This class is responsible for handling all the requests related to the swap canister

## Table of contents

### Constructors

- [constructor](SwapCanisterController.md#constructor)

### Properties

- [balanceList](SwapCanisterController.md#balancelist)
- [pairList](SwapCanisterController.md#pairlist)
- [tokenList](SwapCanisterController.md#tokenlist)

### Methods

- [approve](SwapCanisterController.md#approve)
- [deposit](SwapCanisterController.md#deposit)
- [getAgentPrincipal](SwapCanisterController.md#getagentprincipal)
- [getPairList](SwapCanisterController.md#getpairlist)
- [getTokenBalance](SwapCanisterController.md#gettokenbalance)
- [getTokenBalances](SwapCanisterController.md#gettokenbalances)
- [getTokenList](SwapCanisterController.md#gettokenlist)
- [swap](SwapCanisterController.md#swap)
- [withdraw](SwapCanisterController.md#withdraw)

## Constructors

### constructor

• **new SwapCanisterController**(`swapActor?`)

Create an instance that communicates with swap canister
Some of the functions uses the actor agent identity to identify the user that is interacting

#### Parameters

| Name | Type |
| :------ | :------ |
| `swapActor` | [`SwapActor`](../modules.md#swapactor) |

#### Defined in

[integrations/swap-canister/controller.ts:23](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L23)

## Properties

### balanceList

• **balanceList**: ``null`` \| [`BalanceList`](../modules/Token.md#balancelist) = `null`

#### Defined in

[integrations/swap-canister/controller.ts:17](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L17)

___

### pairList

• **pairList**: ``null`` \| [`List`](../modules/Pair.md#list) = `null`

#### Defined in

[integrations/swap-canister/controller.ts:16](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L16)

___

### tokenList

• **tokenList**: ``null`` \| [`MetadataList`](../modules/Token.md#metadatalist) = `null`

#### Defined in

[integrations/swap-canister/controller.ts:15](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L15)

## Methods

### approve

▸ **approve**(`__namedParameters`): `Promise`<`void`\>

Approve transfers from token to swap canister
This function uses the actor agent identity
This function needs to be called before depositing into swap canister

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ApproveParams`](../modules/SwapCanisterController.md#approveparams) |

#### Returns

`Promise`<`void`\>

#### Defined in

[integrations/swap-canister/controller.ts:149](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L149)

___

### deposit

▸ **deposit**(`__namedParameters`): `Promise`<`void`\>

Deposit tokens into swap canister
This function uses the actor agent identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`DepositParams`](../modules/SwapCanisterController.md#depositparams) |

#### Returns

`Promise`<`void`\>

#### Defined in

[integrations/swap-canister/controller.ts:185](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L185)

___

### getAgentPrincipal

▸ **getAgentPrincipal**(): `Promise`<`Principal`\>

Get the principal of the agent.
It is going to throw if the principal is anonymous

#### Returns

`Promise`<`Principal`\>

#### Defined in

[integrations/swap-canister/controller.ts:132](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L132)

___

### getPairList

▸ **getPairList**(): `Promise`<[`List`](../modules/Pair.md#list)\>

Get the list of pairs present in swap canister

#### Returns

`Promise`<[`List`](../modules/Pair.md#list)\>

#### Defined in

[integrations/swap-canister/controller.ts:43](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L43)

___

### getTokenBalance

▸ **getTokenBalance**(`__namedParameters`): `Promise`<[`Balance`](../modules/Token.md#balance)\>

Get one token balance for a given principal id

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`GetTokenBalanceParams`](../modules/SwapCanisterController.md#gettokenbalanceparams) |

#### Returns

`Promise`<[`Balance`](../modules/Token.md#balance)\>

#### Defined in

[integrations/swap-canister/controller.ts:100](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L100)

___

### getTokenBalances

▸ **getTokenBalances**(`principalId?`): `Promise`<[`BalanceList`](../modules/Token.md#balancelist)\>

Get the balance of all supported tokens for a given principal id
This function get balances from token and swap canisters

#### Parameters

| Name | Type |
| :------ | :------ |
| `principalId?` | `string` |

#### Returns

`Promise`<[`BalanceList`](../modules/Token.md#balancelist)\>

#### Defined in

[integrations/swap-canister/controller.ts:54](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L54)

___

### getTokenList

▸ **getTokenList**(): `Promise`<[`MetadataList`](../modules/Token.md#metadatalist)\>

Get the list of supported tokens from swap canister

#### Returns

`Promise`<[`MetadataList`](../modules/Token.md#metadatalist)\>

#### Defined in

[integrations/swap-canister/controller.ts:33](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L33)

___

### swap

▸ **swap**(`__namedParameters`): `Promise`<`void`\>

Swaps an amount of tokenIn for tokenOut allowing given slippage

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SwapParams`](../modules/SwapCanisterController.md#swapparams) |

#### Returns

`Promise`<`void`\>

#### Defined in

[integrations/swap-canister/controller.ts:230](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L230)

___

### withdraw

▸ **withdraw**(`__namedParameters`): `Promise`<`void`\>

Withdraw tokens from swap canister
This function uses the actor agent identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`WithdrawParams`](../modules/SwapCanisterController.md#withdrawparams) |

#### Returns

`Promise`<`void`\>

#### Defined in

[integrations/swap-canister/controller.ts:207](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/controller.ts#L207)
