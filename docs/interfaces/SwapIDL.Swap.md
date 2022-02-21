[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / [SwapIDL](../modules/SwapIDL.md) / Swap

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

#### Defined in

[declarations/did/swap.ts:222](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L222)

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

#### Defined in

[declarations/did/swap.ts:223](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L223)

___

### addToken

▸ **addToken**(`arg_0`): `Promise`<[`Result`](../modules/SwapIDL.md#result)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`Result`](../modules/SwapIDL.md#result)\>

#### Defined in

[declarations/did/swap.ts:232](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L232)

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

#### Defined in

[declarations/did/swap.ts:233](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L233)

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

#### Defined in

[declarations/did/swap.ts:238](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L238)

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

#### Defined in

[declarations/did/swap.ts:243](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L243)

___

### checkTxCounter

▸ **checkTxCounter**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:244](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L244)

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

#### Defined in

[declarations/did/swap.ts:245](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L245)

___

### decimals

▸ **decimals**(`arg_0`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[declarations/did/swap.ts:246](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L246)

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

#### Defined in

[declarations/did/swap.ts:247](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L247)

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

#### Defined in

[declarations/did/swap.ts:248](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L248)

___

### getAllPairs

▸ **getAllPairs**(): `Promise`<[`PairInfoExt`](SwapIDL.PairInfoExt.md)[]\>

#### Returns

`Promise`<[`PairInfoExt`](SwapIDL.PairInfoExt.md)[]\>

#### Defined in

[declarations/did/swap.ts:253](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L253)

___

### getDSwapInfo

▸ **getDSwapInfo**(): `Promise`<[`DSwapInfo`](SwapIDL.DSwapInfo.md)\>

#### Returns

`Promise`<[`DSwapInfo`](SwapIDL.DSwapInfo.md)\>

#### Defined in

[declarations/did/swap.ts:254](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L254)

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

#### Defined in

[declarations/did/swap.ts:255](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L255)

___

### getNumPairs

▸ **getNumPairs**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

#### Defined in

[declarations/did/swap.ts:256](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L256)

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

#### Defined in

[declarations/did/swap.ts:257](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L257)

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

#### Defined in

[declarations/did/swap.ts:261](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L261)

___

### getSupportedTokenList

▸ **getSupportedTokenList**(): `Promise`<[`TokenInfoExt`](SwapIDL.TokenInfoExt.md)[]\>

#### Returns

`Promise`<[`TokenInfoExt`](SwapIDL.TokenInfoExt.md)[]\>

#### Defined in

[declarations/did/swap.ts:265](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L265)

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

#### Defined in

[declarations/did/swap.ts:266](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L266)

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

#### Defined in

[declarations/did/swap.ts:271](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L271)

___

### getUserBalances

▸ **getUserBalances**(`arg_0`): `Promise`<[`string`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`string`, `bigint`][]\>

#### Defined in

[declarations/did/swap.ts:275](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L275)

___

### getUserInfo

▸ **getUserInfo**(`arg_0`): `Promise`<[`UserInfo`](SwapIDL.UserInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`UserInfo`](SwapIDL.UserInfo.md)\>

#### Defined in

[declarations/did/swap.ts:276](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L276)

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

#### Defined in

[declarations/did/swap.ts:277](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L277)

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

#### Defined in

[declarations/did/swap.ts:282](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L282)

___

### getUserLPBalances

▸ **getUserLPBalances**(`arg_0`): `Promise`<[`string`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`string`, `bigint`][]\>

#### Defined in

[declarations/did/swap.ts:293](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L293)

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

#### Defined in

[declarations/did/swap.ts:294](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L294)

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

#### Defined in

[declarations/did/swap.ts:298](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L298)

___

### name

▸ **name**(`arg_0`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[declarations/did/swap.ts:304](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L304)

___

### removeAuth

▸ **removeAuth**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:305](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L305)

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

#### Defined in

[declarations/did/swap.ts:306](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L306)

___

### setAddTokenThresh

▸ **setAddTokenThresh**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:315](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L315)

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

#### Defined in

[declarations/did/swap.ts:316](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L316)

___

### setFeeOn

▸ **setFeeOn**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `boolean` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:317](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L317)

___

### setFeeTo

▸ **setFeeTo**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:318](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L318)

___

### setGlobalTokenFee

▸ **setGlobalTokenFee**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:319](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L319)

___

### setMaxTokens

▸ **setMaxTokens**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:320](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L320)

___

### setOwner

▸ **setOwner**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:321](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L321)

___

### setStorageCanisterId

▸ **setStorageCanisterId**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/swap.ts:322](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L322)

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

#### Defined in

[declarations/did/swap.ts:323](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L323)

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

#### Defined in

[declarations/did/swap.ts:330](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L330)

___

### symbol

▸ **symbol**(`arg_0`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[declarations/did/swap.ts:337](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L337)

___

### totalSupply

▸ **totalSupply**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`bigint`\>

#### Defined in

[declarations/did/swap.ts:338](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L338)

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

#### Defined in

[declarations/did/swap.ts:339](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L339)

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

#### Defined in

[declarations/did/swap.ts:344](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L344)

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

#### Defined in

[declarations/did/swap.ts:350](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L350)

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

#### Defined in

[declarations/did/swap.ts:351](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/did/swap.ts#L351)
