import { Ref, computed, reactive, toRefs } from 'vue';
import { FullPool } from '@/services/balancer/subgraph/types';
import useTokens from '@/composables/useTokens';
import { isStablePhantom, usePool } from '@/composables/usePool';
import { rpcProviderService } from '@/services/rpc-provider/rpc-provider.service';
import { configService } from '@/services/config/config.service';
import { SOR } from '@balancer-labs/sor2';

/**
 * STATE
 */
const state = reactive({
  isProportional: true,
  tokenOut: '',
  validInput: true,
  highPriceImpactAccepted: false,
  submitting: false,
  sorReady: false,
  slider: {
    val: 1000,
    max: 1000,
    min: 0,
    interval: 1
  }
});

const sor = new SOR(
  rpcProviderService.jsonProvider,
  configService.network.chainId,
  configService.network.subgraph
);

export default function useWithdrawalState(pool: Ref<FullPool | undefined>) {
  /**
   * COMPOSABLES
   */
  const { nativeAsset, wrappedNativeAsset } = useTokens();

  /**
   * COMPUTED
   */
  const tokensOut = computed(() => {
    if (!pool.value) return [];
    const poolTokens = isStablePhantom(pool.value.poolType)
      ? pool.value.mainTokens || []
      : pool.value.tokenAddresses;

    if (!state.isProportional && state.tokenOut === nativeAsset.address)
      // replace WETH with ETH
      return poolTokens.map(address => {
        if (address === wrappedNativeAsset.value.address) {
          return nativeAsset.address;
        }
        return address;
      });

    return poolTokens;
  });

  const tokenOutIndex = computed(() => {
    return tokensOut.value.indexOf(state.tokenOut);
  });

  /**
   * METHODS
   */
  function maxSlider(): void {
    state.slider.val = state.slider.max;
  }

  return {
    ...toRefs(state),
    tokensOut,
    tokenOutIndex,
    sor,
    // methods
    maxSlider
  };
}
