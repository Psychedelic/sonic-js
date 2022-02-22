![Sonic Banner](https://storageapi.fleek.co/fleek-team-bucket/logos/sonic-log.png)

<h1 align="center">Sonic-js</h1>

<h3 align="center">The client library for Sonic</h3>

> ⚠️ The library is currently under a Beta version. It still a work in progress and can have braking changes through the new version releases.

> 💬 All feedback is accepted! [Set up an issue](https://github.com/Psychedelic/sonic-js/issues).

A client library for the [Sonic](https://sonic.ooo/) Open Internet Service (OIS), implemented in JavaScript.

The Sonic-js library is utilized to integrate UIs/FEs/Apps to **transact** with Sonic's Swap Canister on the Internet Computer blockchain.

- Visit [our website](https://sonic.ooo/)
- Read [Sonics's documentation](https://docs.sonic.ooo/)
- Read [our blog](https://sonic-ooo.medium.com/)

<br>

## Examples 🔮

Not sure where to start? Take a dive into our [sonic-js-example](https://github.com/Psychedelic/sonic-js-example) application to checkout what an implementation of Sonic-js looks like!

<br>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Install](#install-)
  - [BigNumber](#bignumber-)
- [Usage](#usage-)
  - [Integration](#integration-)
    - [Agent and Actor](#agent-and-actor)
      - [Actor Adapter](#actor-adapter)
      - [Actor Factories](#actor-factories)
      - [IDLs](#idls)
    - [Swap Canister Controller](#swap-canister-controller)
  - [Math](#math-)
  - [Utils](#utils-)
  - [Declarations](#declarations-)
    - [Types](#types)
    - [Token](#token)
    - [Pair](#pair)
    - [Default](#default)

<br>

## Getting Started

### Install 🛠️

First we need to setup the `.npmrc` file to fetch the right package on [Github Packages](https://github.com/features/packages).

To do so, append the following line to your `.npmrc` file your project's root directory. If you don't have a `.npmrc` file, create a new one.

```
@psychedelic:registry=https://npm.pkg.github.com
```

Now we need to setup our authentication on Github Packages. This step is compulsory, even for public packages.

To do so you're going to need a personal access token with the following configurations:

- **repo**
- **read:packages**

Next, authenticate yourself via the `npm login` command using your Github email for the username and the personal access token as your password:

```bash
npm login --registry=https://npm.pkg.github.com --scope=@psychedelic
```

With an authentication set up, now we need to run:

```bash
yarn add @psychedelic/sonic-js
```

Done! We have installed the package successfully.

<br>

## Dependencies

### BigNumber 🔟

This library relies on [BigNumber.js](https://www.npmjs.com/package/big-number) to handle numbers and calculations. It is used because its ease of use and to avoid JavaScript limitations when dealing with large numbers or numbers with many decimal places.

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

<br>

## Usage 👷

This library holds a set of functions and interfaces that helps in the development of applications that interacts with Sonic's canisters.

The library is separated into modules:

### Integration ⛓️

The integration module provides functions that helps to interact with Sonic directly.

#### Agent and Actor

To talk with Internet Computer we need to create `actors` that communicate with canisters. To create `actors` we need to first setup an `agent` that indicates who and how the communication to the Internet Computer netowkr is going to be realized. This library provides some functions that help to establish communication with Swap Canister and DIP20 token canisters by abstracting away `actors` creation.

##### Actor Adapter

The class `ActorAdapter` provides an abstraction of [@dfinity/agent](https://www.npmjs.com/package/@dfinity/agent) that helps to instantiate new actors and reuse them.

The class constructor has params to configure how you want to use the adapter:

- `provider`: This param receives an object that is used to create `agent` and `actors`. The object needs to follow the interface `ActorAdapter.Provider`. We highly recommended using [@psychedelic/plug-inpage-provider](https://github.com/Psychedelic/plug-inpage-provider/packages/884575) if you want to instantiate actors linked to a user:

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

##### IDLs

All actors that communicate with IC needs to have an IDL to indicate which functions are callable on the canister. The library already provide this IDLs for Swap and DIP20 canisters and they can be found [here](src/declarations/did).

Our `Actor Factories` make use of these saved IDL's to generate actors for you.

##### Actor Factories

To make actor creation even easier, Sonic-js provides two functions that automatically create configurable actors for Sonic's Swap canister and any DIP20 canister:

- [createSwapActor](docs/README.md#createswapactor)
- [createTokenActor](docs/README.md#createtokenactor)

#### Swap Canister Controller

The class `SwapCanisterController` provides methods that give access to the main functionalities of Swap Canister. Instantiation of a non-anonymous controller uses a `Swap Actor`.

You can create an anonymous controller (not linked to any user) by providing no params:

```ts
const controller = new SwapCanisterController();
```

Or adding a custom actor with your adapter:

```ts
const swapActor = await createSwapActor({
  actorAdapter: new ActorAdapter(window.plug),
});
const controller = new SwapCanisterController(swapActor);
```

For a list of the available `SwapCanisterController` methods, [click here](docs/classes/SwapCanisterController.md).

<br>

### Math 🖩

The Math module consists of functions used in calculations to be displayed to the user or sent in requests. The module has four available classes, here are links to descriptions of those classes and their available methods:

- [Swap](docs/classes/Swap.md)
- [Liquidity](docs/classes/Liquidity.md)
- [Assets](docs/classes/Assets.md)
- [Price](docs/classes/Price.md)

<br>

### Utils 💼

The Utils module holds functions that have general propose usage. The available functions are:

- [toBigNumber](docs/README.md#tobignumber)
- [toExponential](docs/README.md#toexponential)
- [formatAmount](docs/README.md#formatamount)
- [deserialize](docs/README.md#deserialize)
- [serialize](docs/README.md#serialize)

<br>

### Declarations 📝

The declarations module provides the default constants used and typescript interfaces to help consuming the library.

#### Types

Declared types that are used in the overall application to standardize our params.

[Find it here](docs/modules/Types.md).

#### Token

Declared types that are used to represent tokens.

[Find it here](docs/modules/Token.md).

#### Pair

Declared types that are used to represent Sonic swap pairs.

[Find it here](docs/modules/Pair.md).

#### Default

An object that stores the default values used inside the library.

[Find it here](docs/README.md#default).
