import { Pair } from '@/declarations';
import { Principal } from '@dfinity/principal';

export const mockPair = ({
  blockTimestampLast,
  creator,
  id,
  kLast,
  lptoken,
  price0CumulativeLast,
  price1CumulativeLast,
  reserve0,
  reserve1,
  token0,
  token1,
  totalSupply,
}: Partial<Pair.Model> = {}): Pair.Model => {
  return {
    id: id || 'token0:token1',
    price0CumulativeLast:
      price0CumulativeLast || BigInt('169791302182046275273065174512383941'),
    creator:
      creator ||
      Principal.fromText(
        '4qehi-lqyo6-afz4c-hwqwo-lubfi-4evgk-5vrn5-rldx2-lheha-xs7a4-gae'
      ),
    reserve0: reserve0 || BigInt('378214020982958035'),
    reserve1: reserve1 || BigInt('2599045918344'),
    lptoken:
      lptoken || 'aanaa-xaaaa-aaaah-aaeiq-cai:utozz-siaaa-aaaam-qaaxq-cai',
    totalSupply: totalSupply || BigInt('963930372035355'),
    token0: token0 || 'aanaa-xaaaa-aaaah-aaeiq-cai',
    token1: token1 || 'utozz-siaaa-aaaam-qaaxq-cai',
    price1CumulativeLast:
      price1CumulativeLast ||
      BigInt('3595528899597139115174922580717493355824760828'),
    kLast: kLast || BigInt('0'),
    blockTimestampLast: blockTimestampLast || BigInt('1643382877493031694'),
  };
};