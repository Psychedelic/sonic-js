# Namespace: TokenIDL

## Table of contents

### Type Aliases

- [Factory](TokenIDL.md#factory)
- [Result](TokenIDL.md#result)
- [TxError](TokenIDL.md#txerror)

### Interfaces

- [Metadata](../interfaces/TokenIDL.Metadata.md)
- [Token](../interfaces/TokenIDL.Token.md)
- [TokenInfo](../interfaces/TokenIDL.TokenInfo.md)

## Type Aliases

### Factory

Ƭ **Factory**: [`Token`](../interfaces/TokenIDL.Token.md)

___

### Result

Ƭ **Result**: { `Ok`: `bigint`  } \| { `Err`: [`TxError`](TokenIDL.md#txerror)  }

___

### TxError

Ƭ **TxError**: { `InsufficientAllowance`: ``null``  } \| { `InsufficientBalance`: ``null``  } \| { `ErrorOperationStyle`: ``null``  } \| { `Unauthorized`: ``null``  } \| { `LedgerTrap`: ``null``  } \| { `ErrorTo`: ``null``  } \| { `Other`: ``null``  } \| { `BlockUsed`: ``null``  } \| { `AmountTooSmall`: ``null``  }
