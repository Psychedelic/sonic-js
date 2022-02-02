import { SwapIDL } from '@/declarations';

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
