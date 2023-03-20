import { Pool, PoolToken } from '@/services/pool/types';
import { wethAddress } from '@tests/unit/builders/address';
import { mock } from 'vitest-mock-extended';

const pool: Pool = mock<Pool>();

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

const defaults: DeepPartial<Pool> = {
  id: 'test pool id',
  totalLiquidity: '100000000',
  address: '0x702605F43471183158938C1a3e5f5A359d7b31ba',
  owner: '0xb794f5ea0ba39494ce839613fffba74279579268',
  tokens: [
    aPoolToken({
      address: '0x3Ec8798B81485A254928B70CDA1cf0A2BB0B74D7', //GRO address
      balance: '408784.606604112667634055',
      weight: '0.8',
      token: {
        latestUSDPrice: '1.07',
        pool: null,
      },
    }),
    aPoolToken({
      address: wethAddress,
      balance: '95.094102533755196937',
      weight: '0.2',
      token: {
        latestUSDPrice: '1.07',
        pool: null,
      },
    }),
  ],
  tokensList: ['0x3Ec8798B81485A254928B70CDA1cf0A2BB0B74D7', wethAddress],
};

export const PoolMock: Pool = Object.assign(pool, defaults);

export function aWeightedPool() {
  const poolMock: Pool = Object.assign(pool, defaults);
  return poolMock;
}

export function aPoolToken(options?: Partial<PoolToken>): PoolToken {
  const poolToken = mock<PoolToken>();
  return Object.assign(poolToken, options);
}
