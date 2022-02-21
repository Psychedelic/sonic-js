# Namespace: ActorAdapter

Type definition for the ActorAdapter.

## Table of contents

### Type aliases

- [Actor](ActorAdapter.md#actor)
- [ActorParams](ActorAdapter.md#actorparams)
- [Actors](ActorAdapter.md#actors)
- [Options](ActorAdapter.md#options)
- [Provider](ActorAdapter.md#provider)

### Interfaces

- [CreateActorParams](../interfaces/ActorAdapter.CreateActorParams.md)
- [CreateAgentParams](../interfaces/ActorAdapter.CreateAgentParams.md)

## Type aliases

### Actor

Ƭ **Actor**<`T`\>: `ActorSubclass`<`T`\>

Return for the createActor function of the ActorAdapter.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ActorParams

Ƭ **ActorParams**: `Object`

Parameters for creating an actor using the ActorAdapter.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canisterId?` | `string` |
| `interfaceFactory` | `IDL.InterfaceFactory` |

___

### Actors

Ƭ **Actors**: `Record`<`string`, { `actor`: `ActorSubclass`<`any`\> ; `adapter`: [`ActorAdapter`](../classes/ActorAdapter.md)  }\>

Interface for static stored actors.

___

### Options

Ƭ **Options**: `Object`

Options for the ActorAdapter.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `whitelist` | `string`[] |

___

### Provider

Ƭ **Provider**: `Object`

Agent provider interface.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agent` | `Agent` \| ``null`` |
| `createActor` | <T\>(`params`: [`CreateActorParams`](../interfaces/ActorAdapter.CreateActorParams.md)<`T`\>) => `Promise`<`ActorSubclass`<`T`\>\> |
| `createAgent` | (`params`: [`CreateAgentParams`](../interfaces/ActorAdapter.CreateAgentParams.md)) => `Promise`<`Agent`\> |
