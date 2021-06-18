import useConfig from '@/composables/useConfig';

const { env, networkConfig } = useConfig();
export const ETHER = {
  id: 'ether',
  name: networkConfig.nativeAssetLong,
  address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  symbol: networkConfig.nativeAsset,
  decimals: 18,
  logoURI:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
};

type TokenListConfig = {
  Balancer: {
    Default: string;
    Vetted: string;
  };
  External: string[];
};

// Mapping of the TokenLists used on each network
const TOKEN_LISTS_MAP: Record<string, TokenListConfig> = {
  '1': {
    Balancer: {
      Default:
        'https://storageapi.fleek.co/balancer-team-bucket/assets/listed.tokenlist.json',
      Vetted:
        'https://storageapi.fleek.co/balancer-team-bucket/assets/vetted.tokenlist.json'
    },
    External: [
      'ipns://tokens.uniswap.org',
      'tokenlist.zerion.eth',
      'tokens.1inch.eth',
      'tokenlist.aave.eth',
      'https://tokens.coingecko.com/uniswap/all.json',
      'https://umaproject.org/uma.tokenlist.json'
    ]
  }
};

type TokenLists = {
  All: string[];
  Balancer: {
    All: string[];
    Default: string;
    Vetted: string;
  };
  Approved: string[];
  External: string[];
};

/**
 * Convert TokenList config into a more usable structure
 */
const processTokenLists = (config: TokenListConfig): TokenLists => {
  const { Balancer, External } = config;

  const balancerLists = [Balancer.Default, Balancer.Vetted];
  const All = [...balancerLists, ...External];
  const Approved = [Balancer.Default, ...External];

  return {
    All,
    Balancer: {
      All: balancerLists,
      ...Balancer
    },
    Approved,
    External
  };
};

const FULL_TOKEN_LISTS = processTokenLists(TOKEN_LISTS_MAP[env.NETWORK]);

// Compliant list for exchange
export const TOKEN_LIST_DEFAULT = FULL_TOKEN_LISTS.Balancer.Default;
// Extended list to include LBP tokens
export const VETTED_TOKEN_LIST = FULL_TOKEN_LISTS.Balancer.Vetted;

export const TOKEN_LISTS = FULL_TOKEN_LISTS.Approved;

export default FULL_TOKEN_LISTS;
