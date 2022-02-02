import { parseSupportedTokenList } from '@/integrations';
import { mockToken } from '../../mocks/token';

describe('parseSupportedTokenList', () => {
  test('should parse correctly a token list response', () => {
    const responseMock = [
      mockToken({ id: 'aanaa-xaaaa-aaaah-aaeiq-cai' }),
      mockToken({ id: 'utozz-siaaa-aaaam-qaaxq-cai' }),
    ];

    const parsedResponse = parseSupportedTokenList(responseMock);

    expect(parsedResponse['aanaa-xaaaa-aaaah-aaeiq-cai']).toEqual(
      responseMock[0]
    );
    expect(parsedResponse['utozz-siaaa-aaaam-qaaxq-cai']).toEqual(
      responseMock[1]
    );
  });
});
