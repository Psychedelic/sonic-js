# Interface: Swap

[SwapIDL](../modules/SwapIDL.md).Swap

## Table of contents

### Methods

- [addAuth](SwapIDL.Swap.md#addauth)
- [addLiquidity](SwapIDL.Swap.md#addliquidity)
- [addToken](SwapIDL.Swap.md#addtoken)
- [allowance](SwapIDL.Swap.md#allowance)
- [approve](SwapIDL.Swap.md#approve)
- [balanceOf](SwapIDL.Swap.md#balanceof)
- [checkTxCounter](SwapIDL.Swap.md#checktxcounter)
- [createPair](SwapIDL.Swap.md#createpair)
- [decimals](SwapIDL.Swap.md#decimals)
- [deposit](SwapIDL.Swap.md#deposit)
- [depositTo](SwapIDL.Swap.md#depositto)
- [getAllPairs](SwapIDL.Swap.md#getallpairs)
- [getDSwapInfo](SwapIDL.Swap.md#getdswapinfo)
- [getLPTokenId](SwapIDL.Swap.md#getlptokenid)
- [getNumPairs](SwapIDL.Swap.md#getnumpairs)
- [getPair](SwapIDL.Swap.md#getpair)
- [getPairs](SwapIDL.Swap.md#getpairs)
- [getSupportedTokenList](SwapIDL.Swap.md#getsupportedtokenlist)
- [getSupportedTokenListByName](SwapIDL.Swap.md#getsupportedtokenlistbyname)
- [getSupportedTokenListSome](SwapIDL.Swap.md#getsupportedtokenlistsome)
- [getUserBalances](SwapIDL.Swap.md#getuserbalances)
- [getUserInfo](SwapIDL.Swap.md#getuserinfo)
- [getUserInfoAbove](SwapIDL.Swap.md#getuserinfoabove)
- [getUserInfoByNamePageAbove](SwapIDL.Swap.md#getuserinfobynamepageabove)
- [getUserLPBalances](SwapIDL.Swap.md#getuserlpbalances)
- [getUserLPBalancesAbove](SwapIDL.Swap.md#getuserlpbalancesabove)
- [lazySwap](SwapIDL.Swap.md#lazyswap)
- [name](SwapIDL.Swap.md#name)
- [removeAuth](SwapIDL.Swap.md#removeauth)
- [removeLiquidity](SwapIDL.Swap.md#removeliquidity)
- [setAddTokenThresh](SwapIDL.Swap.md#setaddtokenthresh)
- [setFeeForToken](SwapIDL.Swap.md#setfeefortoken)
- [setFeeOn](SwapIDL.Swap.md#setfeeon)
- [setFeeTo](SwapIDL.Swap.md#setfeeto)
- [setGlobalTokenFee](SwapIDL.Swap.md#setglobaltokenfee)
- [setMaxTokens](SwapIDL.Swap.md#setmaxtokens)
- [setOwner](SwapIDL.Swap.md#setowner)
- [setStorageCanisterId](SwapIDL.Swap.md#setstoragecanisterid)
- [swapExactTokensForTokens](SwapIDL.Swap.md#swapexacttokensfortokens)
- [swapTokensForExactTokens](SwapIDL.Swap.md#swaptokensforexacttokens)
- [symbol](SwapIDL.Swap.md#symbol)
- [totalSupply](SwapIDL.Swap.md#totalsupply)
- [transfer](SwapIDL.Swap.md#transfer)
- [transferFrom](SwapIDL.Swap.md#transferfrom)
- [withdraw](SwapIDL.Swap.md#withdraw)
- [withdrawTo](SwapIDL.Swap.md#withdrawto)

## Methods

### addAuth

▸ **addAuth**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### addLiquidity

▸ **addLiquidity**(`arg_0`, `arg_1`, `arg_2`, `arg_3`, `arg_4`, `arg_5`, `arg_6`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |
| `arg_2` | `bigint` |
| `arg_3` | `bigint` |
| `arg_4` | `bigint` |
| `arg_5` | `bigint` |
| `arg_6` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### addToken

▸ **addToken**(`arg_0`): `Promise`<[`Result`](../modules/SwapIDL.md#result)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`Result`](../modules/SwapIDL.md#result)\>

___

### allowance

▸ **allowance**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |
| `arg_2` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### approve

▸ **approve**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<`boolean`\>

___

### balanceOf

▸ **balanceOf**(`arg_0`, `arg_1`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### checkTxCounter

▸ **checkTxCounter**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

___

### createPair

▸ **createPair**(`arg_0`, `arg_1`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### decimals

▸ **decimals**(`arg_0`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`number`\>

___

### deposit

▸ **deposit**(`arg_0`, `arg_1`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### depositTo

▸ **depositTo**(`arg_0`, `arg_1`, `arg_2`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### getAllPairs

▸ **getAllPairs**(): `Promise`<[`PairInfoExt`](SwapIDL.PairInfoExt.md)[]\>

#### Returns

`Promise`<[`PairInfoExt`](SwapIDL.PairInfoExt.md)[]\>

___

### getDSwapInfo

▸ **getDSwapInfo**(): `Promise`<[`DSwapInfo`](SwapIDL.DSwapInfo.md)\>

#### Returns

`Promise`<[`DSwapInfo`](SwapIDL.DSwapInfo.md)\>

___

### getLPTokenId

▸ **getLPTokenId**(`arg_0`, `arg_1`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`string`\>

___

### getNumPairs

▸ **getNumPairs**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### getPair

▸ **getPair**(`arg_0`, `arg_1`): `Promise`<[] \| [[`PairInfoExt`](SwapIDL.PairInfoExt.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<[] \| [[`PairInfoExt`](SwapIDL.PairInfoExt.md)]\>

___

### getPairs

▸ **getPairs**(`arg_0`, `arg_1`): `Promise`<[[`PairInfoExt`](SwapIDL.PairInfoExt.md)[], `bigint`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[[`PairInfoExt`](SwapIDL.PairInfoExt.md)[], `bigint`]\>

___

### getSupportedTokenList

▸ **getSupportedTokenList**(): `Promise`<[`TokenInfoExt`](SwapIDL.TokenInfoExt.md)[]\>

#### Returns

`Promise`<[`TokenInfoExt`](SwapIDL.TokenInfoExt.md)[]\>

___

### getSupportedTokenListByName

▸ **getSupportedTokenListByName**(`arg_0`, `arg_1`, `arg_2`): `Promise`<[[`TokenInfoExt`](SwapIDL.TokenInfoExt.md)[], `bigint`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `bigint` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<[[`TokenInfoExt`](SwapIDL.TokenInfoExt.md)[], `bigint`]\>

___

### getSupportedTokenListSome

▸ **getSupportedTokenListSome**(`arg_0`, `arg_1`): `Promise`<[[`TokenInfoExt`](SwapIDL.TokenInfoExt.md)[], `bigint`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[[`TokenInfoExt`](SwapIDL.TokenInfoExt.md)[], `bigint`]\>

___

### getUserBalances

▸ **getUserBalances**(`arg_0`): `Promise`<[`string`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`string`, `bigint`][]\>

___

### getUserInfo

▸ **getUserInfo**(`arg_0`): `Promise`<[`UserInfo`](SwapIDL.UserInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`UserInfo`](SwapIDL.UserInfo.md)\>

___

### getUserInfoAbove

▸ **getUserInfoAbove**(`arg_0`, `arg_1`, `arg_2`): `Promise`<[`UserInfo`](SwapIDL.UserInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<[`UserInfo`](SwapIDL.UserInfo.md)\>

___

### getUserInfoByNamePageAbove

▸ **getUserInfoByNamePageAbove**(`arg_0`, `arg_1`, `arg_2`, `arg_3`, `arg_4`, `arg_5`, `arg_6`, `arg_7`, `arg_8`): `Promise`<[`UserInfoPage`](SwapIDL.UserInfoPage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |
| `arg_2` | `string` |
| `arg_3` | `bigint` |
| `arg_4` | `bigint` |
| `arg_5` | `bigint` |
| `arg_6` | `string` |
| `arg_7` | `bigint` |
| `arg_8` | `bigint` |

#### Returns

`Promise`<[`UserInfoPage`](SwapIDL.UserInfoPage.md)\>

___

### getUserLPBalances

▸ **getUserLPBalances**(`arg_0`): `Promise`<[`string`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`string`, `bigint`][]\>

___

### getUserLPBalancesAbove

▸ **getUserLPBalancesAbove**(`arg_0`, `arg_1`): `Promise`<[`string`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`string`, `bigint`][]\>

___

### lazySwap

▸ **lazySwap**(`arg_0`, `arg_1`, `arg_2`, `arg_3`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `bigint` |
| `arg_2` | `string`[] |
| `arg_3` | `Principal` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### name

▸ **name**(`arg_0`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`string`\>

___

### removeAuth

▸ **removeAuth**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### removeLiquidity

▸ **removeLiquidity**(`arg_0`, `arg_1`, `arg_2`, `arg_3`, `arg_4`, `arg_5`, `arg_6`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |
| `arg_2` | `bigint` |
| `arg_3` | `bigint` |
| `arg_4` | `bigint` |
| `arg_5` | `Principal` |
| `arg_6` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### setAddTokenThresh

▸ **setAddTokenThresh**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`boolean`\>

___

### setFeeForToken

▸ **setFeeForToken**(`arg_0`, `arg_1`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<`boolean`\>

___

### setFeeOn

▸ **setFeeOn**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `boolean` |

#### Returns

`Promise`<`boolean`\>

___

### setFeeTo

▸ **setFeeTo**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### setGlobalTokenFee

▸ **setGlobalTokenFee**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`boolean`\>

___

### setMaxTokens

▸ **setMaxTokens**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`boolean`\>

___

### setOwner

▸ **setOwner**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### setStorageCanisterId

▸ **setStorageCanisterId**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### swapExactTokensForTokens

▸ **swapExactTokensForTokens**(`arg_0`, `arg_1`, `arg_2`, `arg_3`, `arg_4`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `bigint` |
| `arg_2` | `string`[] |
| `arg_3` | `Principal` |
| `arg_4` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### swapTokensForExactTokens

▸ **swapTokensForExactTokens**(`arg_0`, `arg_1`, `arg_2`, `arg_3`, `arg_4`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `bigint` |
| `arg_2` | `string`[] |
| `arg_3` | `Principal` |
| `arg_4` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### symbol

▸ **symbol**(`arg_0`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`string`\>

___

### totalSupply

▸ **totalSupply**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`bigint`\>

___

### transfer

▸ **transfer**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<`boolean`\>

___

### transferFrom

▸ **transferFrom**(`arg_0`, `arg_1`, `arg_2`, `arg_3`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |
| `arg_2` | `Principal` |
| `arg_3` | `bigint` |

#### Returns

`Promise`<`boolean`\>

___

### withdraw

▸ **withdraw**(`arg_0`, `arg_1`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

___

### withdrawTo

▸ **withdrawTo**(`arg_0`, `arg_1`, `arg_2`): `Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../modules/SwapIDL.md#txreceipt)\>
