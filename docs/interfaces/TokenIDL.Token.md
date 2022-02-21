[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / [TokenIDL](../modules/TokenIDL.md) / Token

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

#### Defined in

[declarations/did/token.ts:109](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L109)

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

#### Defined in

[declarations/did/token.ts:110](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L110)

___

### balanceOf

▸ **balanceOf**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`bigint`\>

#### Defined in

[declarations/did/token.ts:111](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L111)

___

### decimals

▸ **decimals**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[declarations/did/token.ts:112](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L112)

___

### getAllowanceSize

▸ **getAllowanceSize**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

#### Defined in

[declarations/did/token.ts:113](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L113)

___

### getBlockUsed

▸ **getBlockUsed**(): `Promise`<`bigint`[]\>

#### Returns

`Promise`<`bigint`[]\>

#### Defined in

[declarations/did/token.ts:114](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L114)

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

#### Defined in

[declarations/did/token.ts:115](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L115)

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](TokenIDL.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](TokenIDL.Metadata.md)\>

#### Defined in

[declarations/did/token.ts:120](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L120)

___

### getTokenInfo

▸ **getTokenInfo**(): `Promise`<[`TokenInfo`](TokenIDL.TokenInfo.md)\>

#### Returns

`Promise`<[`TokenInfo`](TokenIDL.TokenInfo.md)\>

#### Defined in

[declarations/did/token.ts:121](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L121)

___

### getUserApprovals

▸ **getUserApprovals**(`arg_0`): `Promise`<[`Principal`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`Principal`, `bigint`][]\>

#### Defined in

[declarations/did/token.ts:122](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L122)

___

### historySize

▸ **historySize**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

#### Defined in

[declarations/did/token.ts:123](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L123)

___

### isBlockUsed

▸ **isBlockUsed**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[declarations/did/token.ts:124](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L124)

___

### logo

▸ **logo**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[declarations/did/token.ts:119](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L119)

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

#### Defined in

[declarations/did/token.ts:125](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L125)

___

### name

▸ **name**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[declarations/did/token.ts:126](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L126)

___

### owner

▸ **owner**(): `Promise`<`Principal`\>

#### Returns

`Promise`<`Principal`\>

#### Defined in

[declarations/did/token.ts:127](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L127)

___

### setFee

▸ **setFee**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`undefined`\>

#### Defined in

[declarations/did/token.ts:128](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L128)

___

### setFeeTo

▸ **setFeeTo**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`undefined`\>

#### Defined in

[declarations/did/token.ts:129](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L129)

___

### setGenesis

▸ **setGenesis**(): `Promise`<[`Result`](../modules/TokenIDL.md#result)\>

#### Returns

`Promise`<[`Result`](../modules/TokenIDL.md#result)\>

#### Defined in

[declarations/did/token.ts:130](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L130)

___

### setLogo

▸ **setLogo**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`undefined`\>

#### Defined in

[declarations/did/token.ts:131](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L131)

___

### setName

▸ **setName**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`undefined`\>

#### Defined in

[declarations/did/token.ts:132](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L132)

___

### setOwner

▸ **setOwner**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`undefined`\>

#### Defined in

[declarations/did/token.ts:133](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L133)

___

### symbol

▸ **symbol**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[declarations/did/token.ts:134](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L134)

___

### totalSupply

▸ **totalSupply**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

#### Defined in

[declarations/did/token.ts:135](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L135)

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

#### Defined in

[declarations/did/token.ts:136](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L136)

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

#### Defined in

[declarations/did/token.ts:137](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L137)

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

#### Defined in

[declarations/did/token.ts:142](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L142)
