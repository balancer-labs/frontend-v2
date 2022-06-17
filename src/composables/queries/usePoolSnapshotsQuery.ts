import differenceInDays from 'date-fns/differenceInDays';
import { QueryObserverOptions } from 'react-query/core';
import { computed, reactive } from 'vue';
import { useQuery } from 'vue-query';

import QUERY_KEYS from '@/constants/queryKeys';
import { balancerSubgraphService } from '@/services/balancer/subgraph/balancer-subgraph.service';
import { HistoricalPrices } from '@/services/coingecko/api/price.service';
import { coingeckoService } from '@/services/coingecko/coingecko.service';
import { PoolSnapshots } from '@/services/pool/types';

import useNetwork from '../useNetwork';
import { isStablePhantom } from '../usePool';
import usePoolQuery from './usePoolQuery';

/**
 * TYPES
 */
interface QueryResponse {
  prices: HistoricalPrices;
  snapshots: PoolSnapshots;
}

/**
 * HELPERS
 */
export default function usePoolSnapshotsQuery(
  id: string,
  days?: number,
  options: QueryObserverOptions<QueryResponse> = {}
) {
  /**
   * QUERY DEPENDENCIES
   */
  const poolQuery = usePoolQuery(id);
  const { networkId } = useNetwork();

  /**
   * COMPUTED
   */
  const pool = computed(() => poolQuery.data.value);
  const enabled = computed(() => !!pool.value?.id);

  /**
   * QUERY INPUTS
   */
  const queryKey = QUERY_KEYS.Pools.Snapshot(networkId, id);

  const queryFn = async () => {
    if (!pool.value) throw new Error('No pool');

    let snapshots: PoolSnapshots = {};
    let prices: HistoricalPrices = {};

    const isStablePhantomPool = isStablePhantom(pool.value.poolType);
    const shapshotDaysNum =
      days ||
      differenceInDays(new Date(), new Date(pool.value.createTime * 1000));

    if (isStablePhantomPool) {
      snapshots = await balancerSubgraphService.poolSnapshots.get(
        id,
        shapshotDaysNum
      );

      return {
        prices,
        snapshots
      };
    } else {
      const tokens = pool.value.tokensList;
      [prices, snapshots] = await Promise.all([
        coingeckoService.prices.getTokensHistorical(tokens, shapshotDaysNum),
        balancerSubgraphService.poolSnapshots.get(id, shapshotDaysNum)
      ]);
    }

    return { prices, snapshots };
  };

  const queryOptions = reactive({
    enabled,
    ...options
  });

  return useQuery<QueryResponse>(queryKey, queryFn, queryOptions);
}
