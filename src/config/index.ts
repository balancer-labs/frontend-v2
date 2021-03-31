import homestead from '@/config/homestead.json';
import kovan from '@/config/kovan.json';
import docker from '@/config/docker.json';

interface Config {
  key: string;
  chainId: number;
  name: string;
  shortName: string;
  network: string;
  unknown: boolean;
  rpc: string;
  ws: string;
  explorer: string;
  poolsUrlV1: string;
  poolsUrlV2: string;
  addresses: {
    exchangeProxy: string;
    multicall: string;
    vault: string;
    weightedPoolFactory: string;
    stablePoolFactory: string;
    weth: string;
    balancerHelpers: string;
  };
  strategies: Record<
    string,
    {
      type: string;
      name: string;
    }
  >;
}

const config: Record<string, Config> = {
  '1': homestead,
  '42': kovan,
  // @ts-ignore
  '17': docker
};

export default config;
