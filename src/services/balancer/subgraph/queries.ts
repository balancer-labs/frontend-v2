import { merge } from 'lodash';

const defaultPoolArgs = {
  first: 1000,
  where: {
    totalShares_gt: 0
  }
};

const defaultPoolAttrs = {
  id: true,
  poolType: true,
  swapFee: true,
  tokensList: true,
  totalLiquidity: true,
  totalSwapVolume: true,
  totalSwapFee: true,
  totalShares: true,
  tokens: {
    address: true,
    balance: true,
    weight: true
  }
};

const defaultPoolSharesArgs = {
  first: 1000,
  where: {
    balance_gt: 0
  }
};

const defaultPoolSharesAttrs = {
  poolId: {
    id: true
  },
  balance: true
};

export default {
  pools: (args = {}, attrs = {}) => ({
    pools: {
      __args: merge({}, defaultPoolArgs, args),
      ...merge({}, defaultPoolAttrs, attrs)
    }
  }),
  poolShares: (args = {}, attrs = {}) => ({
    poolShares: {
      __args: merge({}, defaultPoolSharesArgs, args),
      ...merge({}, defaultPoolSharesAttrs, attrs)
    }
  })
};
