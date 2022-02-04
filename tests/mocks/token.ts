import { SwapIDL, Token } from '@/declarations';
import { parseSupportedTokenList } from 'integrations';

export const mockToken = ({
  decimals,
  fee,
  id,
  name,
  symbol,
  totalSupply,
}: Partial<SwapIDL.TokenInfoExt>): SwapIDL.TokenInfoExt => ({
  decimals: decimals || 12,
  fee: fee || BigInt('2000000000'),
  id: id || 'aanaa-xaaaa-aaaah-aaeiq-cai',
  name: name || 'Cycles',
  symbol: symbol || 'XTC',
  totalSupply: totalSupply || BigInt('568886793566866910'),
});

export const mockSupportedTokenListResponse = (): SwapIDL.TokenInfoExt[] => [
  {
    id: 'aanaa-xaaaa-aaaah-aaeiq-cai',
    fee: BigInt('2000000000'),
    decimals: 12,
    name: 'Cycles',
    totalSupply: BigInt('568951992843769366'),
    symbol: 'XTC',
  },
  {
    id: 'utozz-siaaa-aaaam-qaaxq-cai',
    fee: BigInt('0'),
    decimals: 8,
    name: 'WICP',
    totalSupply: BigInt('3851094737272'),
    symbol: 'WICP',
  },
];

export const mockTokenList = (): Token.MetadataList =>
  parseSupportedTokenList(mockSupportedTokenListResponse());
