[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / TokenIDL

# Namespace: TokenIDL

## Table of contents

### Interfaces

- [Metadata](../interfaces/TokenIDL.Metadata.md)
- [Token](../interfaces/TokenIDL.Token.md)
- [TokenInfo](../interfaces/TokenIDL.TokenInfo.md)

### Type aliases

- [Factory](TokenIDL.md#factory)
- [Result](TokenIDL.md#result)
- [TxError](TokenIDL.md#txerror)

## Type aliases

### Factory

Ƭ **Factory**: [`Token`](../interfaces/TokenIDL.Token.md)

#### Defined in

[declarations/did/token.ts:144](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L144)

___

### Result

Ƭ **Result**: { `Ok`: `bigint`  } \| { `Err`: [`TxError`](TokenIDL.md#txerror)  }

#### Defined in

[declarations/did/token.ts:89](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L89)

___

### TxError

Ƭ **TxError**: { `InsufficientAllowance`: ``null``  } \| { `InsufficientBalance`: ``null``  } \| { `ErrorOperationStyle`: ``null``  } \| { `Unauthorized`: ``null``  } \| { `LedgerTrap`: ``null``  } \| { `ErrorTo`: ``null``  } \| { `Other`: ``null``  } \| { `BlockUsed`: ``null``  } \| { `AmountTooSmall`: ``null``  }

#### Defined in

[declarations/did/token.ts:98](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/did/token.ts#L98)
