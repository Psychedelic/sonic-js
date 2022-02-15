<h1 align="center">Sonic-js</h1>

<h3 align="center">The client library for Sonic</h3>

> A client library for the [Sonic](https://sonic.ooo/) Open Internet Service (OIS), implemented in JavaScript.

The Sonic-js library is utilized to integrate UIs/FEs/Apps to Swap Canister to **transact** on Sonic.

- Visit [our website](https://sonic.ooo/)
- Read [Sonics's documentation](https://docs.sonic.ooo/)
- Read [our blog](https://sonic-ooo.medium.com/)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Install](#install)
  - [BigNumber](#bignumber)
- [Usage](#usage)
  - [Math](#math)
  - [Utils](#utils)

## Getting Started

### Install

```bash
yarn add @psychedelic/sonic-js
```

### BigNumber

This library relies on [BigNumber.js](https://www.npmjs.com/package/big-number) to handle numbers and calculations. It is used because its ease of use and to avoid JavaScript limitations when dealing with really big numbers or with a lot of decimal places.

To better deal and present inside your application you can use the cast functions like `toString` and `toNumber`.

## Usage

This library holds a set of functions and interfaces that helps in the development of applications that interacts with Sonic canisters.

The library is separated in modules to organize and have ease in use:

### Math

The Math module holds the functions used in calculations to get correct values to be displayed or sent in requests.

```ts
Swap.getAmount(params: Swap.GetAmountOutParams): BigNumber
```

Calculate the needed or resultant amount of a swap

```ts
Swap.getPriceImpact(params: Swap.GetPriceImpactParams): BigNumber
```

Calculate the price impact based on given amounts and prices

```ts
Swap.getTokenPaths(params: Swap.GetTokenPathsParams): Swap.GetTokenPathsResult
```

Calculate the best token path to realize the swap and the output amount

```ts
Liquidity.getPairDecimals(token0Decimals: Types.Decimals, token1Decimals: Types.Decimals): Types.Decimals
```

Calculate the pair decimals for given tokens decimals

```ts
Liquidity.getAddPosition(params: Liquidity.GetPositionParams): BigNumber
```

Calculate the Liquidity Position for given amounts of a pair of tokens that's going to be added

```ts
Liquidity.getShareOfPool(params: Liquidity.GetShareOfPoolParams): BigNumber
```

Calculate Share of a pool of the position based on total supply

```ts
Liquidity.getTokenBalances(params: Liquidity.GetTokenBalancesParams): Liquidity.GetTokenBalancesResult
```

Calculate the token balances for given pair Liquidity Position

```ts
Price.getByAmount(params: Price.GetPriceByAmountParams): BigNumber
```

Calculate the total amount price by a given amount

### Utils

The Utils module holds functions that have general propose usage. This functions are used inside other modules as well.

```ts
toBigNumber(num?: Types.Number): BigNumber
```

Converts a value to a BigNumber

```ts
toExponential(decimals: Types.Number): BigNumber
```

Create a toExponential notation by given decimals

```ts
applyDecimals(num: Types.Number, decimals: Types.Decimals): BigNumber
```

Apply decimals to a number

```ts
removeDecimals(num: Types.Number, decimals: Types.Decimals): BigNumber
```

Removes decimals from a number

```ts
formatAmount(amount: Types.Amount): string
```

Formats an amount to a small string with scientific notation

```ts
deserialize<T = any>(jsonString: string): T | undefined
```

Parses a json string into an object

This is required for parsing objects that have BigInt values

```ts
serialize<T>(data: T): string
```

Parses a json object into a string

This is required for parsing objects that have BigInt values
