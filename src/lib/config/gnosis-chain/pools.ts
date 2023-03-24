import { Pools } from '@/types/pools';

const pools: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: [
    'Weighted',
    'Stable',
    'MetaStable',
    'LiquidityBootstrapping',
    'Investment',
    'StablePhantom',
    'ComposableStable',
  ],
  Stable: {
    AllowList: [
      '0xfedb19ec000d38d92af4b21436870f115db22725000000000000000000000010', // bb-ag-usd
      '0x9949f1884b61a8265e12056650c1ac4677a75403000000000000000000000014', // 2EUR (EURe)
    ],
  },
  Investment: {
    AllowList: [],
  },
  Factories: {
    '0xc128468b7ce63ea702c1f104d55a2566b13d3abd': 'composableStablePool', // ComposableStable V3
    '0xc128a9954e6c874ea3d62ce62b468ba073093f25': 'weightedPool', // WeightedPool V3
  },
  Stakable: {
    AllowList: [
      '0x66f33ae36dd80327744207a48122f874634b3ada000100000000000000000013',
      '0xf48f01dcb2cbb3ee1f6aab0e742c2d3941039d56000200000000000000000012',
      '0xb973ca96a3f0d61045f53255e319aedb6ed49240000200000000000000000011',
      '0xfedb19ec000d38d92af4b21436870f115db22725000000000000000000000010',
    ],
  },
  Metadata: {
    '0xfedb19ec000d38d92af4b21436870f115db22725000000000000000000000010': {
      name: 'Balancer Boosted Agave USD',
      hasIcon: false,
    },
    '0xb973ca96a3f0d61045f53255e319aedb6ed49240000200000000000000000011': {
      name: 'Balancer Boosted Agave GNO/USD',
      hasIcon: false,
    },
    '0xf48f01dcb2cbb3ee1f6aab0e742c2d3941039d56000200000000000000000012': {
      name: 'Balancer Boosted Agave GNO/WETH',
      hasIcon: false,
    },
    '0x66f33ae36dd80327744207a48122f874634b3ada000100000000000000000013': {
      name: 'Balancer Boosted Agave WETH/WBTC/USD',
      hasIcon: false,
    },
  },
  DisabledJoins: [],
};

export default pools;
