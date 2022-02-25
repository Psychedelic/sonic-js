import {
  parseSupportedTokenList,
  parseAllPairs,
  getDeadline,
  parseUserLPBalances,
} from '@/integrations';
import BigNumber from 'bignumber.js';
import {
  mockAllPairsResponse,
  mockUserLPBalanceResponse,
} from '../../mocks/pair';
import { mockSupportedTokenListResponse } from '../../mocks/token';

describe('parseSupportedTokenList', () => {
  test('should parse correctly a token list response', () => {
    const responseMock = mockSupportedTokenListResponse();
    const parsedResponse = parseSupportedTokenList(responseMock);

    expect(parsedResponse['aanaa-xaaaa-aaaah-aaeiq-cai']).toEqual(
      responseMock[0]
    );
    expect(parsedResponse['utozz-siaaa-aaaam-qaaxq-cai']).toEqual(
      responseMock[1]
    );
  });
});

describe('parseAllPairs', () => {
  test('should parse correctly an all pairs response', () => {
    const responseMock = mockAllPairsResponse();
    const parsedResponse = parseAllPairs(responseMock);

    expect(
      parsedResponse['aanaa-xaaaa-aaaah-aaeiq-cai'][
        'utozz-siaaa-aaaam-qaaxq-cai'
      ]
    ).toMatchObject(responseMock[0]);
    expect(
      parsedResponse['utozz-siaaa-aaaam-qaaxq-cai'][
        'aanaa-xaaaa-aaaah-aaeiq-cai'
      ]
    ).toMatchObject({
      ...responseMock[0],
      token0: 'utozz-siaaa-aaaam-qaaxq-cai',
      token1: 'aanaa-xaaaa-aaaah-aaeiq-cai',
      reserve0: responseMock[0].reserve1,
      reserve1: responseMock[0].reserve0,
    });
  });
});

describe('getDeadline', () => {
  test('should return a deadline', () => {
    jest.useFakeTimers();
    jest.setSystemTime(1);

    const deadline = getDeadline();
    expect(deadline).toEqual(BigInt(3000010000000));
  });
});

describe('parseUserLPBalances', () => {
  test('should parse the response of getUserLPBalances', () => {
    expect(parseUserLPBalances(mockUserLPBalanceResponse())).toEqual({
      'aanaa-xaaaa-aaaah-aaeiq-cai:utozz-siaaa-aaaam-qaaxq-cai': new BigNumber(
        '3035420898'
      ),
    });
  });
});
