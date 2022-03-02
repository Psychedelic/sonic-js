# Class: SwapCanisterController

Swap Canister Controller.
This class is responsible for handling all the requests related to the swap canister.

## Table of contents

### Methods

- [addLiquidity](SwapCanisterController.md#addliquidity)
- [approve](SwapCanisterController.md#approve)
- [deposit](SwapCanisterController.md#deposit)
- [depositTokensNeededBalance](SwapCanisterController.md#deposittokensneededbalance)
- [getAgentPrincipal](SwapCanisterController.md#getagentprincipal)
- [getLPBalances](SwapCanisterController.md#getlpbalances)
- [getPairList](SwapCanisterController.md#getpairlist)
- [getTokenBalance](SwapCanisterController.md#gettokenbalance)
- [getTokenBalances](SwapCanisterController.md#gettokenbalances)
- [getTokenList](SwapCanisterController.md#gettokenlist)
- [removeLiquidity](SwapCanisterController.md#removeliquidity)
- [swap](SwapCanisterController.md#swap)
- [withdraw](SwapCanisterController.md#withdraw)

### Properties

- [balanceList](SwapCanisterController.md#balancelist)
- [pairList](SwapCanisterController.md#pairlist)
- [tokenList](SwapCanisterController.md#tokenlist)

### Constructors

- [constructor](SwapCanisterController.md#constructor)

## Methods

### addLiquidity

▸ **addLiquidity**(`params`): `Promise`<`void`\>

Add two amounts of tokens to add a pair Liquidity Position.
This function uses the actor agent identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AddLiquidityParams`](../modules/SwapCanisterController.md#addliquidityparams) |

#### Returns

`Promise`<`void`\>

___

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

### depositTokensNeededBalance

▸ **depositTokensNeededBalance**(`params`): `Promise`<`void`\>

Check and deposit if is needed for a list of tokens.
It is only going to deposit if the amount is not already deposited
and if there is enough token balance to deposit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`DepositTokensNeededBalanceParams`](../modules/SwapCanisterController.md#deposittokensneededbalanceparams) | returns {Promise<void>} |

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

### getLPBalances

▸ **getLPBalances**(`principalId?`): `Promise`<[`Balances`](../modules/Pair.md#balances)\>

Get the Liquidity Positions balances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `principalId?` | `string` | The principal id of the user or the principal from agent will be used |

#### Returns

`Promise`<[`Balances`](../modules/Pair.md#balances)\>

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

### removeLiquidity

▸ **removeLiquidity**(`params`): `Promise`<`void`\>

Removes liquidity by a given Liquidity Position amount.
This function uses the actor agent identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RemoveLiquidityParams`](../modules/SwapCanisterController.md#removeliquidityparams) |

#### Returns

`Promise`<`void`\>

___

### swap

▸ **swap**(`params`): `Promise`<`void`\>

Swaps an amount of tokenIn for tokenOut allowing given slippage.
This function uses the actor agent identity.

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
| `swapActor` | [`SwapActor`](../README.md#swapactor) | swap actor or an anonymous will be used |
