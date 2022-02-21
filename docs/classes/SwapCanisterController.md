# Class: SwapCanisterController

Swap Canister Controller.
This class is responsible for handling all the requests related to the swap canister.

## Table of contents

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

### Properties

- [balanceList](SwapCanisterController.md#balancelist)
- [pairList](SwapCanisterController.md#pairlist)
- [tokenList](SwapCanisterController.md#tokenlist)

### Constructors

- [constructor](SwapCanisterController.md#constructor)

## Methods

### approve

▸ **approve**(`params`): `Promise`<`void`\>

Approve transfers from token to swap canister.
This function uses the actor agent identity.
This function needs to be called before depositing into swap canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ApproveParams`](../modules/SwapCanisterController.md#approveparams) |

#### Returns

`Promise`<`void`\>

___

### deposit

▸ **deposit**(`params`): `Promise`<`void`\>

Deposit tokens into swap canister.
This function uses the actor agent identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DepositParams`](../modules/SwapCanisterController.md#depositparams) |

#### Returns

`Promise`<`void`\>

___

### getAgentPrincipal

▸ **getAgentPrincipal**(): `Promise`<`Principal`\>

Get the principal of the agent.
It is going to throw if the principal is anonymous.

#### Returns

`Promise`<`Principal`\>

___

### getPairList

▸ **getPairList**(): `Promise`<[`List`](../modules/Pair.md#list)\>

Get the list of pairs present in swap canister.

#### Returns

`Promise`<[`List`](../modules/Pair.md#list)\>

___

### getTokenBalance

▸ **getTokenBalance**(`params`): `Promise`<[`Balance`](../modules/Token.md#balance)\>

Get one token balance for a given principal id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTokenBalanceParams`](../modules/SwapCanisterController.md#gettokenbalanceparams) |

#### Returns

`Promise`<[`Balance`](../modules/Token.md#balance)\>

___

### getTokenBalances

▸ **getTokenBalances**(`principalId?`): `Promise`<[`BalanceList`](../modules/Token.md#balancelist)\>

Get the balance of all supported tokens for a given principal id.
This function get balances from token and swap canisters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `principalId?` | `string` | The principal id of the user or the principal from agent will be used |

#### Returns

`Promise`<[`BalanceList`](../modules/Token.md#balancelist)\>

___

### getTokenList

▸ **getTokenList**(): `Promise`<[`MetadataList`](../modules/Token.md#metadatalist)\>

Get the list of supported tokens from swap canister.

#### Returns

`Promise`<[`MetadataList`](../modules/Token.md#metadatalist)\>

___

### swap

▸ **swap**(`params`): `Promise`<`void`\>

Swaps an amount of tokenIn for tokenOut allowing given slippage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SwapParams`](../modules/SwapCanisterController.md#swapparams) |

#### Returns

`Promise`<`void`\>

___

### withdraw

▸ **withdraw**(`params`): `Promise`<`void`\>

Withdraw tokens from swap canister.
This function uses the actor agent identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`WithdrawParams`](../modules/SwapCanisterController.md#withdrawparams) |

#### Returns

`Promise`<`void`\>

## Properties

### balanceList

• **balanceList**: ``null`` \| [`BalanceList`](../modules/Token.md#balancelist) = `null`

___

### pairList

• **pairList**: ``null`` \| [`List`](../modules/Pair.md#list) = `null`

___

### tokenList

• **tokenList**: ``null`` \| [`MetadataList`](../modules/Token.md#metadatalist) = `null`

## Constructors

### constructor

• **new SwapCanisterController**(`swapActor?`)

Create an instance that communicates with swap canister.
Some of the functions uses the actor agent identity to identify the user that is interacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `swapActor` | [`SwapActor`](../modules.md#swapactor) | swap actor or an anonymous will be used |
