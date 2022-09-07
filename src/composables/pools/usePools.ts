import { flatten } from 'lodash';
import { computed, Ref, ref, watch } from 'vue';

import usePoolsQuery from '@/composables/queries/usePoolsQuery';
import { lpTokensFor } from '../usePool';
import useTokens from '../useTokens';
import { Pool } from '@/services/pool/types';

export default function usePools(filterTokens: Ref<string[]> = ref([])) {
  // COMPOSABLES
  const poolsQuery = usePoolsQuery(filterTokens);
  const { injectTokens } = useTokens();

  const pools = computed<Pool[]>(() =>
    poolsQuery.data.value
      ? flatten(poolsQuery.data.value.pages.map(page => page.pools))
      : []
  );

  const isLoading = computed(
    () => poolsQuery.isLoading.value || poolsQuery.isIdle.value
  );

  const poolsHasNextPage = computed(() => poolsQuery.hasNextPage?.value);
  const poolsIsFetchingNextPage = computed(
    () => poolsQuery.isFetchingNextPage?.value
  );

  // METHODS
  function loadMorePools() {
    poolsQuery.fetchNextPage.value();
  }

  watch(pools, async newPools => {
    const tokenAddresses = flatten(
      newPools.map(pool => [
        ...pool.tokensList,
        ...lpTokensFor(pool),
        pool.address,
      ])
    );
    await injectTokens(tokenAddresses);
  });

  return {
    pools,
    isLoading,
    poolsHasNextPage,
    poolsIsFetchingNextPage,

    // methods
    loadMorePools,
  };
}
