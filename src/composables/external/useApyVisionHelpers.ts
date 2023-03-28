import { computed } from 'vue';

import { PoolToken } from '@balancer-labs/sdk';

import { configService } from '@/services/config/config.service';

export function poolPathSymbolSegment(tokens: PoolToken[]) {
  return tokens.map(token => token.symbol).join('-');
}

export function useApyVisionHelpers() {
  const apyVisionNetworkName = computed(() => {
    return configService.network.apyVisionNetworkName;
  });

  return {
    apyVisionNetworkName,
    poolPathSymbolSegment,
  };
}
