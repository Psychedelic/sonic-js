# Class: ActorAdapter

## Table of contents

### Properties

- [DEFAULT\_HOST](ActorAdapter.md#default_host)
- [DEFAULT\_WHITELIST](ActorAdapter.md#default_whitelist)
- [actors](ActorAdapter.md#actors)
- [options](ActorAdapter.md#options)

### Methods

- [adapterOf](ActorAdapter.md#adapterof)
- [createAnonymousActor](ActorAdapter.md#createanonymousactor)
- [createActor](ActorAdapter.md#createactor)
- [createAgent](ActorAdapter.md#createagent)

### Constructors

- [constructor](ActorAdapter.md#constructor)

## Properties

### DEFAULT\_HOST

▪ `Static` **DEFAULT\_HOST**: `string` = `Default.IC_HOST`

___

### DEFAULT\_WHITELIST

▪ `Static` **DEFAULT\_WHITELIST**: `string`[]

___

### actors

▪ `Static` `Readonly` **actors**: [`Actors`](../modules/ActorAdapter.md#actors) = `{}`

___

### options

• `Private` **options**: [`Options`](../modules/ActorAdapter.md#options)

## Methods

### adapterOf

▸ `Static` **adapterOf**(`actor`): `undefined` \| [`ActorAdapter`](ActorAdapter.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actor` | `Actor` |  |

#### Returns

`undefined` \| [`ActorAdapter`](ActorAdapter.md)

___

### createAnonymousActor

▸ `Static` **createAnonymousActor**<`T`\>(`canisterId`, `interfaceFactory`, `host?`): [`Actor`](../modules/ActorAdapter.md#actor)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `canisterId` | `string` | `undefined` |  |
| `interfaceFactory` | `InterfaceFactory` | `undefined` |  |
| `host` | `string` | `ActorAdapter.DEFAULT_HOST` |  |

#### Returns

[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>

___

### createActor

▸ **createActor**<`T`\>(`canisterId`, `interfaceFactory`): `Promise`<[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canisterId` | `string` |  |
| `interfaceFactory` | `InterfaceFactory` |  |

#### Returns

`Promise`<[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>\>

___

### createAgent

▸ `Private` **createAgent**(`extraWhitelist?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `extraWhitelist` | `string`[] | `[]` |  |

#### Returns

`Promise`<`void`\>

## Constructors

### constructor

• **new ActorAdapter**(`provider?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | [`Provider`](../modules/ActorAdapter.md#provider) |
| `options` | `Partial`<[`Options`](../modules/ActorAdapter.md#options)\> |
