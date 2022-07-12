# Class: SwapCanisterController

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AddLiquidityParams`](../modules/SwapCanisterController.md#addliquidityparams) |

#### Returns

`Promise`<`void`\>

___

### approve

▸ **approve**(`params`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ApproveParams`](../modules/SwapCanisterController.md#approveparams) |

#### Returns

`Promise`<`void`\>

___

### deposit

▸ **deposit**(`params`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DepositParams`](../modules/SwapCanisterController.md#depositparams) |

#### Returns

`Promise`<`void`\>

___

### depositTokensNeededBalance

▸ **depositTokensNeededBalance**(`params`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`DepositTokensNeededBalanceParams`](../modules/SwapCanisterController.md#deposittokensneededbalanceparams) |  |

#### Returns

`Promise`<`void`\>

___

### getAgentPrincipal

▸ **getAgentPrincipal**(): `Promise`<`Principal`\>

#### Returns

`Promise`<`Principal`\>

___

### getLPBalances

▸ **getLPBalances**(`principalId?`): `Promise`<[`Balances`](../modules/Pair.md#balances)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `principalId?` | `string` |  |

#### Returns

`Promise`<[`Balances`](../modules/Pair.md#balances)\>

___

### getPairList

▸ **getPairList**(): `Promise`<[`List`](../modules/Pair.md#list)\>

#### Returns

`Promise`<[`List`](../modules/Pair.md#list)\>

___

### getTokenBalance

▸ **getTokenBalance**(`params`): `Promise`<[`Balance`](../modules/Token.md#balance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTokenBalanceParams`](../modules/SwapCanisterController.md#gettokenbalanceparams) |

#### Returns

`Promise`<[`Balance`](../modules/Token.md#balance)\>

___

### getTokenBalances

▸ **getTokenBalances**(`principalId?`): `Promise`<[`BalanceList`](../modules/Token.md#balancelist)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `principalId?` | `string` |  |

#### Returns

`Promise`<[`BalanceList`](../modules/Token.md#balancelist)\>

___

### getTokenList

▸ **getTokenList**(): `Promise`<[`MetadataList`](../modules/Token.md#metadatalist)\>

#### Returns

`Promise`<[`MetadataList`](../modules/Token.md#metadatalist)\>

___

### removeLiquidity

▸ **removeLiquidity**(`params`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RemoveLiquidityParams`](../modules/SwapCanisterController.md#removeliquidityparams) |

#### Returns

`Promise`<`void`\>

___

### swap

▸ **swap**(`params`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SwapParams`](../modules/SwapCanisterController.md#swapparams) |

#### Returns

`Promise`<`void`\>

___

### withdraw

▸ **withdraw**(`params`): `Promise`<`void`\>

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `swapActor` | [`SwapActor`](../README.md#swapactor) |  |
