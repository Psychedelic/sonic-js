[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / ActorAdapter

# Class: ActorAdapter

Adapter responsible for creating actors.
It can receive a provider to identify the actor like a wallet provider (e.g. Plug).

## Implements

- [`Repository`](../interfaces/ActorAdapter.Repository.md)

## Table of contents

### Constructors

- [constructor](ActorAdapter.md#constructor)

### Properties

- [actors](ActorAdapter.md#actors)

### Methods

- [createActor](ActorAdapter.md#createactor)
- [createAgent](ActorAdapter.md#createagent)
- [adapterOf](ActorAdapter.md#adapterof)
- [createAnonymousActor](ActorAdapter.md#createanonymousactor)

## Constructors

### constructor

• **new ActorAdapter**(`provider?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | [`Provider`](../modules/ActorAdapter.md#provider) |
| `options` | [`Options`](../modules/ActorAdapter.md#options) |

#### Defined in

[integrations/actor/adapter.ts:13](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L13)

## Properties

### actors

▪ `Static` `Readonly` **actors**: [`Actors`](../modules/ActorAdapter.md#actors) = `{}`

#### Defined in

[integrations/actor/adapter.ts:11](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L11)

## Methods

### createActor

▸ **createActor**<`T`\>(`canisterId`, `interfaceFactory`): `Promise`<[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>\>

Creates a new actor or use from memory if is already created.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `canisterId` | `string` |
| `interfaceFactory` | `InterfaceFactory` |

#### Returns

`Promise`<[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>\>

#### Implementation of

[Repository](../interfaces/ActorAdapter.Repository.md).[createActor](../interfaces/ActorAdapter.Repository.md#createactor)

#### Defined in

[integrations/actor/adapter.ts:24](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L24)

___

### createAgent

▸ `Private` **createAgent**(`extraWhitelist?`): `Promise`<`void`\>

Creates the agent from provider.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `extraWhitelist` | `string`[] | `[]` |

#### Returns

`Promise`<`void`\>

#### Defined in

[integrations/actor/adapter.ts:66](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L66)

___

### adapterOf

▸ `Static` **adapterOf**(`actor`): `undefined` \| [`ActorAdapter`](ActorAdapter.md)

Gets the adapter from an actor

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | `Actor` |

#### Returns

`undefined` \| [`ActorAdapter`](ActorAdapter.md)

#### Defined in

[integrations/actor/adapter.ts:78](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L78)

___

### createAnonymousActor

▸ `Static` **createAnonymousActor**<`T`\>(`canisterId`, `interfaceFactory`, `host?`): [`Actor`](../modules/ActorAdapter.md#actor)<`T`\>

Create an anonymous actor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `canisterId` | `string` | `undefined` |
| `interfaceFactory` | `InterfaceFactory` | `undefined` |
| `host` | `string` | `Default.IC_HOST` |

#### Returns

[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>

#### Defined in

[integrations/actor/adapter.ts:88](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L88)
