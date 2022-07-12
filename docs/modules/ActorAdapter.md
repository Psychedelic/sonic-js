# Namespace: ActorAdapter

## Table of contents

### Type Aliases

- [Actor](ActorAdapter.md#actor)
- [ActorParams](ActorAdapter.md#actorparams)
- [Actors](ActorAdapter.md#actors)
- [Options](ActorAdapter.md#options)
- [Provider](ActorAdapter.md#provider)

### Interfaces

- [CreateActorParams](../interfaces/ActorAdapter.CreateActorParams.md)
- [CreateAgentParams](../interfaces/ActorAdapter.CreateAgentParams.md)

## Type Aliases

### Actor

Ƭ **Actor**<`T`\>: `ActorSubclass`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ActorParams

Ƭ **ActorParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canisterId?` | `string` |
| `interfaceFactory` | `IDL.InterfaceFactory` |

___

### Actors

Ƭ **Actors**: `Record`<`string`, { `actor`: `ActorSubclass`<`any`\> ; `adapter`: [`ActorAdapter`](../classes/ActorAdapter.md)  }\>

___

### Options

Ƭ **Options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `whitelist` | `string`[] |

___

### Provider

Ƭ **Provider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agent` | `Agent` \| ``null`` |
| `createActor` | <T\>(`params`: [`CreateActorParams`](../interfaces/ActorAdapter.CreateActorParams.md)<`T`\>) => `Promise`<`ActorSubclass`<`T`\>\> |
| `createAgent` | (`params`: [`CreateAgentParams`](../interfaces/ActorAdapter.CreateAgentParams.md)) => `Promise`<`Agent`\> |
