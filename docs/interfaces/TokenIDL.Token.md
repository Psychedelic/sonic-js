# Interface: Token

[TokenIDL](../modules/TokenIDL.md).Token

## Table of contents

### Methods

- [allowance](TokenIDL.Token.md#allowance)
- [approve](TokenIDL.Token.md#approve)
- [balanceOf](TokenIDL.Token.md#balanceof)
- [decimals](TokenIDL.Token.md#decimals)
- [getAllowanceSize](TokenIDL.Token.md#getallowancesize)
- [getBlockUsed](TokenIDL.Token.md#getblockused)
- [getHolders](TokenIDL.Token.md#getholders)
- [getMetadata](TokenIDL.Token.md#getmetadata)
- [getTokenInfo](TokenIDL.Token.md#gettokeninfo)
- [getUserApprovals](TokenIDL.Token.md#getuserapprovals)
- [historySize](TokenIDL.Token.md#historysize)
- [isBlockUsed](TokenIDL.Token.md#isblockused)
- [logo](TokenIDL.Token.md#logo)
- [mint](TokenIDL.Token.md#mint)
- [name](TokenIDL.Token.md#name)
- [owner](TokenIDL.Token.md#owner)
- [setFee](TokenIDL.Token.md#setfee)
- [setFeeTo](TokenIDL.Token.md#setfeeto)
- [setGenesis](TokenIDL.Token.md#setgenesis)
- [setLogo](TokenIDL.Token.md#setlogo)
- [setName](TokenIDL.Token.md#setname)
- [setOwner](TokenIDL.Token.md#setowner)
- [symbol](TokenIDL.Token.md#symbol)
- [totalSupply](TokenIDL.Token.md#totalsupply)
- [transfer](TokenIDL.Token.md#transfer)
- [transferFrom](TokenIDL.Token.md#transferfrom)
- [withdraw](TokenIDL.Token.md#withdraw)

## Methods

### allowance

▸ **allowance**(`arg_0`, `arg_1`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### approve

▸ **approve**(`arg_0`, `arg_1`): `Promise`<[`Result`](../modules/TokenIDL.md#result)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`Result`](../modules/TokenIDL.md#result)\>

___

### balanceOf

▸ **balanceOf**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### decimals

▸ **decimals**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

___

### getAllowanceSize

▸ **getAllowanceSize**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### getBlockUsed

▸ **getBlockUsed**(): `Promise`<`bigint`[]\>

#### Returns

`Promise`<`bigint`[]\>

___

### getHolders

▸ **getHolders**(`arg_0`, `arg_1`): `Promise`<[`Principal`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`Principal`, `bigint`][]\>

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](TokenIDL.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](TokenIDL.Metadata.md)\>

___

### getTokenInfo

▸ **getTokenInfo**(): `Promise`<[`TokenInfo`](TokenIDL.TokenInfo.md)\>

#### Returns

`Promise`<[`TokenInfo`](TokenIDL.TokenInfo.md)\>

___

### getUserApprovals

▸ **getUserApprovals**(`arg_0`): `Promise`<[`Principal`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`Principal`, `bigint`][]\>

___

### historySize

▸ **historySize**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### isBlockUsed

▸ **isBlockUsed**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`boolean`\>

___

### logo

▸ **logo**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

___

### mint

▸ **mint**(`arg_0`, `arg_1`): `Promise`<[`Result`](../modules/TokenIDL.md#result)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | [] \| [`number`[]] |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`Result`](../modules/TokenIDL.md#result)\>

___

### name

▸ **name**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

___

### owner

▸ **owner**(): `Promise`<`Principal`\>

#### Returns

`Promise`<`Principal`\>

___

### setFee

▸ **setFee**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`undefined`\>

___

### setFeeTo

▸ **setFeeTo**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`undefined`\>

___

### setGenesis

▸ **setGenesis**(): `Promise`<[`Result`](../modules/TokenIDL.md#result)\>

#### Returns

`Promise`<[`Result`](../modules/TokenIDL.md#result)\>

___

### setLogo

▸ **setLogo**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`undefined`\>

___

### setName

▸ **setName**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`undefined`\>

___

### setOwner

▸ **setOwner**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`undefined`\>

___

### symbol

▸ **symbol**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

___

### totalSupply

▸ **totalSupply**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### transfer

▸ **transfer**(`arg_0`, `arg_1`): `Promise`<[`Result`](../modules/TokenIDL.md#result)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`Result`](../modules/TokenIDL.md#result)\>

___

### transferFrom

▸ **transferFrom**(`arg_0`, `arg_1`, `arg_2`): `Promise`<[`Result`](../modules/TokenIDL.md#result)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<[`Result`](../modules/TokenIDL.md#result)\>

___

### withdraw

▸ **withdraw**(`arg_0`, `arg_1`): `Promise`<[`Result`](../modules/TokenIDL.md#result)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `string` |

#### Returns

`Promise`<[`Result`](../modules/TokenIDL.md#result)\>
