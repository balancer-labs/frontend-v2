import useNumbers from '@/composables/useNumbers';
import { fiatValueOf, isDeep, tokenTreeNodes } from '@/composables/usePool';
import useTokens from '@/composables/useTokens';
import { useTxState } from '@/composables/useTxState';
import useUserSettings from '@/composables/useUserSettings';
import {
  HIGH_PRICE_IMPACT,
  REKT_PRICE_IMPACT,
} from '@/constants/poolLiquidity';
import symbolKeys from '@/constants/symbol.keys';
import { fetchPoolsForSor, hasFetchedPoolsForSor } from '@/lib/balancer.sdk';
import { bnSum, bnum, removeAddress } from '@/lib/utils';
import { JoinPoolService } from '@/services/balancer/pools/joins/join-pool.service';
import { Pool } from '@/services/pool/types';
import useWeb3 from '@/services/web3/useWeb3';
import { TokenInfoMap } from '@/types/TokenList';
import { TransactionResponse } from '@ethersproject/abstract-provider';
import {
  computed,
  defineComponent,
  h,
  InjectionKey,
  onBeforeMount,
  PropType,
  provide,
  reactive,
  readonly,
  ref,
  toRef,
  watch,
} from 'vue';
import useRelayerApproval, {
  Relayer,
} from '@/composables/trade/useRelayerApproval';
import { TransactionActionInfo } from '@/types/transactions';
import useSignRelayerApproval from '@/composables/useSignRelayerApproval';
import { useQuery } from 'vue-query';
import QUERY_KEYS from '@/constants/queryKeys';

/**
 * TYPES
 */
export type AmountIn = {
  address: string;
  value: string;
  valid: boolean;
};

type Props = {
  pool: Pool;
  isSingleAssetJoin: boolean;
};

/**
 * JoinPoolProvider
 *
 * Handles pool joining state and transaction execution.
 */
const provider = (props: Props) => {
  /**
   * STATE
   */
  const pool = toRef(props, 'pool');
  const isSingleAssetJoin = toRef(props, 'isSingleAssetJoin');
  const amountsIn = ref<AmountIn[]>([]);
  const bptOut = ref<string>('0');
  const priceImpact = ref<number>(0);
  const highPriceImpactAccepted = ref<boolean>(false);
  const txError = ref<string>('');

  const queryJoinQuery = useQuery<void, Error>(
    QUERY_KEYS.Pools.Joins.QueryJoin(),
    queryJoin,
    reactive({ enabled: true })
  );

  /**
   * SERVICES
   */
  const joinPoolService = new JoinPoolService(pool);

  /**
   * COMPOSABLES
   */
  const { getTokens, prices, injectTokens } = useTokens();
  const { toFiat } = useNumbers();
  const { slippageBsp } = useUserSettings();
  const { getSigner } = useWeb3();
  const { txState, txInProgress } = useTxState();
  const relayerApproval = useRelayerApproval(Relayer.BATCH_V4);
  const { relayerSignature, signRelayerAction } = useSignRelayerApproval(
    Relayer.BATCH_V4
  );

  /**
   * COMPUTED
   */
  const isDeepPool = computed((): boolean => isDeep(pool.value));

  // All tokens in the pool token tree that can be used in join functions.
  const joinTokens = computed((): string[] => {
    let addresses: string[] = [];

    addresses = isDeepPool.value
      ? tokenTreeNodes(pool.value.tokens)
      : pool.value.tokensList;

    return removeAddress(pool.value.address, addresses);
  });

  // Token meta data for amountsIn tokens.
  const tokensIn = computed((): TokenInfoMap => {
    return getTokens(amountsIn.value.map(a => a.address));
  });

  // High price impact if value greater than 1%.
  const highPriceImpact = computed((): boolean => {
    return bnum(priceImpact.value).isGreaterThanOrEqualTo(HIGH_PRICE_IMPACT);
  });

  // rekt price impact if value greater than 20%.
  const rektPriceImpact = computed((): boolean => {
    return bnum(priceImpact.value).isGreaterThanOrEqualTo(REKT_PRICE_IMPACT);
  });

  // If price impact is high (> 1%), user has checked acceptance checkbox.
  const hasAcceptedHighPriceImpact = computed((): boolean =>
    highPriceImpact.value ? highPriceImpactAccepted.value : true
  );

  // Checks if all amountsIn are valid inputs.
  const hasValidInputs = computed(
    (): boolean =>
      amountsIn.value.every(amountIn => amountIn.valid === true) &&
      hasAcceptedHighPriceImpact.value
  );

  // Checks if amountsIn has any values > 0.
  const hasAmountsIn = computed(() =>
    amountsIn.value.some(amountIn => bnum(amountIn.value).gt(0))
  );

  // Calculates total fiat value in for all amountsIn with Coingecko prices.
  const fiatValueIn = computed((): string => {
    const fiatValuesIn = amountsIn.value.map(amountIn =>
      toFiat(amountIn.value, amountIn.address)
    );
    return bnSum(fiatValuesIn).toString();
  });

  // Calculates estimated fiatValueOut using pool's totalLiquity.
  // Could be inaccurate if total liquidity has come from subgraph.
  const fiatValueOut = computed((): string =>
    fiatValueOf(pool.value, bptOut.value)
  );

  const shouldSignRelayer = computed(
    (): boolean =>
      isDeepPool.value &&
      !isSingleAssetJoin.value &&
      // Check if Batch Relayer is either approved, or signed
      !(relayerApproval.isUnlocked.value || relayerSignature.value)
  );

  const approvalActions = computed((): TransactionActionInfo[] =>
    shouldSignRelayer.value ? [signRelayerAction] : []
  );

  const isLoadingQuery = computed(
    (): boolean => queryJoinQuery.isFetching.value
  );

  const queryError = computed(
    (): string | undefined => queryJoinQuery.error.value?.message
  );

  /**
   * METHODS
   */

  /**
   * Sets full amountsIn state.
   *
   * @param {AmountIn[]} _amountsIn - Array of amounts in: token address, value
   * & input validity.
   */
  function setAmountsIn(_amountsIn: AmountIn[]) {
    amountsIn.value = _amountsIn;
  }

  /**
   * Adds amountsIn with no value for array of token addresses.
   *
   * @param {string[]} tokensIn - Array of token addresses.
   */
  function addTokensIn(tokensIn: string[]) {
    tokensIn.forEach(address =>
      amountsIn.value.push({ address, value: '', valid: true })
    );
  }

  /**
   * Resets all amounts in amountsIn state to have no value.
   */
  function resetAmounts() {
    amountsIn.value.forEach((_, i) => {
      amountsIn.value[i].value = '';
    });
  }

  /**
   * Resets previous joinQuery results
   */
  function resetQueryJoinState() {
    bptOut.value = '0';
    priceImpact.value = 0;
  }

  /**
   * Simulate join transaction to get expected output and calculate price impact.
   */
  async function queryJoin() {
    // If form is empty or inputs are not valid, clear the price impact and
    // return early
    if (!hasAmountsIn.value || !hasValidInputs.value) {
      priceImpact.value = 0;
      return;
    }

    const output = await joinPoolService.queryJoin({
      amountsIn: amountsIn.value,
      tokensIn: tokensIn.value,
      prices: prices.value,
      signer: getSigner(),
      slippageBsp: slippageBsp.value,
    });

    bptOut.value = output.bptOut;
    priceImpact.value = output.priceImpact;
  }

  /**
   * Executes join transaction.
   */
  async function join(): Promise<TransactionResponse> {
    try {
      txError.value = '';
      return joinPoolService.join({
        amountsIn: amountsIn.value,
        tokensIn: tokensIn.value,
        prices: prices.value,
        signer: getSigner(),
        slippageBsp: slippageBsp.value,
        relayerSignature: relayerSignature.value,
      });
    } catch (error) {
      txError.value = (error as Error).message;
      throw error;
    }
  }

  /**
   * WATCHERS
   */
  // If amountsIn change we should call queryJoin to get expected output.
  watch(
    amountsIn,
    () => {
      resetQueryJoinState();
      queryJoinQuery.refetch.value();
    },
    { deep: true }
  );

  // If the global pool fetching for the SOR changes it's been set to true. In
  // this case we should re-trigger queryJoin to fetch the expected output for
  // any existing input.
  watch(hasFetchedPoolsForSor, () => {
    queryJoinQuery.refetch.value();
  });

  // If singleAssetJoin is toggled we need to reset previous query state. queryJoin
  // will be re-triggered by the amountsIn state change. We also need to call
  // setJoinHandler on the joinPoolService to update the join handler.
  watch(isSingleAssetJoin, newVal => {
    resetQueryJoinState();
    joinPoolService.setJoinHandler(newVal);
  });

  /**
   * LIFECYCLE
   */
  onBeforeMount(() => {
    // Ensure prices are fetched for token tree. When pool architecture is
    // refactoted probably won't be required.
    injectTokens(joinTokens.value);
    // Trigger SOR pool fetching in case swap joins are used.
    fetchPoolsForSor();
  });

  return {
    // State
    amountsIn,
    highPriceImpactAccepted,
    pool: readonly(pool),
    isSingleAssetJoin: readonly(isSingleAssetJoin),
    bptOut: readonly(bptOut),
    priceImpact: readonly(priceImpact),
    isLoadingQuery,
    queryError,
    txError: readonly(txError),

    //  Computed
    joinTokens,
    highPriceImpact,
    rektPriceImpact,
    hasAcceptedHighPriceImpact,
    hasValidInputs,
    hasAmountsIn,
    fiatValueIn,
    fiatValueOut,
    txState,
    txInProgress,
    approvalActions,

    // Methods
    setAmountsIn,
    addTokensIn,
    resetAmounts,
    join,

    // queries
    queryJoinQuery,
  };
};

/**
 * Provide setup: response type + symbol.
 */
export type Response = ReturnType<typeof provider>;
export const JoinPoolProviderSymbol: InjectionKey<Response> = Symbol(
  symbolKeys.Providers.JoinPool
);

/**
 * <JoinPoolProvider /> component.
 */
export const JoinPoolProvider = defineComponent({
  name: 'JoinPoolProvider',

  props: {
    pool: {
      type: Object as PropType<Pool>,
      required: true,
    },
    isSingleAssetJoin: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    provide(JoinPoolProviderSymbol, provider(props));
  },

  render() {
    return h('div', this.$slots?.default ? this.$slots.default() : []);
  },
});
