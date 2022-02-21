![Sonic Banner](https://storageapi.fleek.co/fleek-team-bucket/logos/sonic-log.png)

<h1 align="center">Sonic-js</h1>

<h3 align="center">The client library for Sonic</h3>

> ⚠️ The library is currently under a Beta version. It still a work in progress and can have braking changes through the new version releases.

> 💬 All feedback is accepted! [Set up an issue](https://github.com/Psychedelic/sonic-js/issues).

A client library for the [Sonic](https://sonic.ooo/) Open Internet Service (OIS), implemented in JavaScript.

The Sonic-js library is utilized to integrate UIs/FEs/Apps to Swap Canister to **transact** on Sonic.

- Visit [our website](https://sonic.ooo/)
- Read [Sonics's documentation](https://docs.sonic.ooo/)
- Read [our blog](https://sonic-ooo.medium.com/)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Install](#install-%F0%9F%9B%A0%EF%B8%8F)
  - [BigNumber](#bignumber-%F0%9F%94%9F)
- [Usage](#usage-%F0%9F%91%B7)
  - [Integration](#integration-%E2%9B%93%EF%B8%8F)
    - [Agent and Actor](#agent-and-actor)
      - [Actor Adapter](#actor-adapter)
      - [Actor Factories](#actor-factories)
      - [IDLs](#idls)
    - [Swap Canister Controller](#swap-canister-controller)
  - [Math](#math-%F0%9F%96%A9)
  - [Utils](#utils-%F0%9F%92%BC)
  - [Declarations](#declarations-%F0%9F%93%9D)
    - [Types](#types)
    - [Token](#token)
    - [Pair](#pair)
    - [Default](#default)

## Getting Started

### Install 🛠️

First we need to setup the `.npmrc` file to fetch the right package on [Github Packages](https://github.com/features/packages).

If you don't have an `.npmrc` file on your project create one clean, if already have append the following line:

```
@psychedelic:registry=https://npm.pkg.github.com
```

Now we need to setup our authentication on Github Packages. Everybody needs to setup it, even for public packages.

There are some ways to reach that you can check how to do it properly looking [here](https://docs.github.com/pt/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

With an authentication set up, now we need to run:

```bash
yarn add @psychedelic/sonic-js
```

Done! We have installed the package successfully.

### BigNumber 🔟

This library relies on [BigNumber.js](https://www.npmjs.com/package/big-number) to handle numbers and calculations. It is used because its ease of use and to avoid JavaScript limitations when dealing with really big numbers or with a lot of decimal places.

To better deal and present inside your application you can use the cast functions like `toString` and `toNumber`.

Some functions were added to `BigNumber` class prototype because of the high number of utilization inside other of the functions inside the library:

```ts
toBigInt(): bigint;
```

Returns a bigint from a BigNumber

```ts
applyDecimals(decimals: number): BigNumber;
```

Returns a bigint from a BigNumber

```ts
removeDecimals(decimals: number): BigNumber;
```

Removes decimals from a number

```ts
applyTolerance(percentage: number, type?: 'min' | 'max'): BigNumber;
```

Returns the number for a given maximal/minimal tolerance

## Usage 👷

This library holds a set of functions and interfaces that helps in the development of applications that interacts with Sonic canisters.

The library is separated in modules to organize and have ease in use:

### Integration ⛓️

On integration module is provided functions that helps to interact with IC world.

#### Agent and Actor

First of all to talk with IC we need to create `actors` that communicate with canisters. But to create the `actors` we need to first setup an `agent` that indicates who and how the communication is going to be realized. This library provides some functions that helps in this process to reach the communication with Swap Canister and DIP20 token canisters.

##### Actor Adapter

The class `ActorAdapter` provides an abstraction of [@dfinity/agent](https://www.npmjs.com/package/@dfinity/agent) that helps to instantiate new actors and reuse them.

The class constructor has params that turn able to configure how you want to use the adapter:

- `provider`: This param receives an object that is used to create `agent` and `actors`. The object needs to follow the interface `ActorAdapter.Provider`. Is high recommended if you want to instantiate actors linked with wallets to use [@psychedelic/plug-inpage-provider](https://github.com/Psychedelic/plug-inpage-provider/packages/884575):

```ts
const adapter = new ActorAdapter(window.plug);
```

- `options`: This param is used for selecting some settings of network host and whitelisting canister ids. It follows the interface `ActorAdapter.Options`:

```ts
const adapter = new ActorAdapter(window.plug, {
  host: 'https://boundary.ic0.app/',
  whitelist: ['3xwpq-ziaaa-aaaah-qcn4a-cai'],
});
```

You can also use default parameters and no provider:

```ts
const adapter = new ActorAdapter();
```

##### Actor Factories

To make ease on use for actors, the library provides two functions that directly create actors for Swap and DIP20 canisters:

- [createSwapActor](docs/modules.md#createswapactor)
- [createTokenActor](docs/modules.md#createtokenactor)

##### IDLs

All actors that communicate with IC needs to have an IDL to indicate which functions are callable on the canister. The library already provide this IDLs for Swap and DIP20 canisters and they can be found [here](src/declarations/did).

#### Swap Canister Controller

The class `SwapCanisterController` provides functions that abstracts the main functionalities of Swap Canister. Instantiating it requires a Swap Actor mentioned above.

You can create an anonymous controller by simple:

```ts
const controller = new SwapCanisterController();
```

Or adding a customer actor with your adapter:

```ts
const swapActor = await createSwapActor({
  actorAdapter: new ActorAdapter(window.plug),
});
const controller = new SwapCanisterController(swapActor);
```

[Find more of the class description here](docs/classes/SwapCanisterController.md)

### Math 🖩

The Math module holds the functions used in calculations to get correct values to be displayed or sent in requests.

- [Swap](docs/classes/Swap.md)
- [Liquidity](docs/classes/Liquidity.md)
- [Assets](docs/classes/Assets.md)
- [Price](docs/classes/Price.md)

### Utils 💼

The Utils module holds functions that have general propose usage. This functions are used inside other modules as well.

- [toBigNumber](docs/modules.md#tobignumber)
- [toExponential](docs/modules.md#toexponential)
- [formatAmount](docs/modules.md#formatamount)
- [deserialize](docs/modules.md#deserialize)
- [serialize](docs/modules.md#serialize)

### Declarations 📝

The declarations module provides the default constants used and typescript interfaces to help consuming the library.

#### Types

There are some declared types that we use in overall of our application to keep standardization of our params.

[Find it here](docs/modules/Types.md).

#### Token

There are some declared types that we use to represent tokens and it's related stuff.

[Find it here](docs/modules/Token.md).

#### Pair

There are some declared types that we use to represent Sonic swap pairs and it's related stuff.

[Find it here](docs/modules/Pair.md).

#### Default

Default is an object that stores the default values used inside the library.

[Find it here](docs/modules.md#default).
