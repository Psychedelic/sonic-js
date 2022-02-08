import { Principal } from '@dfinity/principal';

export const mockPrincipalId = (): string =>
  '4qehi-lqyo6-afz4c-hwqwo-lubfi-4evgk-5vrn5-rldx2-lheha-xs7a4-gae';

export const mockPrincipal = (): Principal =>
  Principal.fromText(mockPrincipalId());
