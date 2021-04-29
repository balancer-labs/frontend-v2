import { computed, reactive } from 'vue';
import { useQuery } from 'vue-query';
import { QueryObserverOptions } from 'react-query/core';

import { useStore } from 'vuex';
import isEmpty from 'lodash/isEmpty';
import flatten from 'lodash/flatten';
import { getAddress } from '@ethersproject/address';

import { getPoolsWithVolume, PoolWithVolume } from '@/utils/balancer/pools';

import useWeb3 from '@/composables/useWeb3';
import QUERY_KEYS from '@/constants/queryKeys';

type PoolsQueryResponse = {
  pools: PoolWithVolume[];
  tokens: string[];
};

export default function usePoolsQuery(
  options: QueryObserverOptions<PoolsQueryResponse> = {}
) {
  const store = useStore();
  const { appNetwork } = useWeb3();

  const prices = computed(() => store.state.market.prices);
  const isQueryEnabled = computed(() => !isEmpty(prices.value));

  const queryKey = QUERY_KEYS.Pools.All;

  const queryFn = async () => {
    const pools = await getPoolsWithVolume({
      chainId: appNetwork.id,
      prices: prices.value
    });

    const tokens = flatten(pools.map(pool => pool.tokensList.map(getAddress)));

    return {
      pools,
      tokens
    };
  };

  const queryOptions = reactive({
    enabled: isQueryEnabled,
    onSuccess: async (poolsData: PoolsQueryResponse) => {
      await store.dispatch('registry/injectTokens', poolsData.tokens);
    },
    ...options
  });

  return useQuery<PoolsQueryResponse>(queryKey, queryFn, queryOptions);
}
