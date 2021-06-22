import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { approveTokens } from '@/lib/utils/balancer/tokens';
import { parseUnits } from '@ethersproject/units';
import useTokens from '@/composables/useTokens';
import useNotify from '@/composables/useNotify';
import useVueWeb3 from '@/services/web3/useVueWeb3';
import useAllowances from '../useAllowances';
import { sleep } from '@/lib/utils';

export default function useTokenApprovals(tokens, shortAmounts) {
  const { getProvider, appNetworkConfig } = useVueWeb3();
  const store = useStore();
  const approving = ref(false);
  const approvedAll = ref(false);
  const { allTokens } = useTokens();
  const { txListener } = useNotify();
  const { getRequiredAllowances, refetchAllowances } = useAllowances();

  const amounts = computed(() =>
    tokens.map((token, index) => {
      const shortAmount = shortAmounts.value[index] || '0';
      const decimals = allTokens.value[token].decimals;
      const amount = parseUnits(shortAmount, decimals).toString();
      return amount;
    })
  );

  const requiredAllowances = computed(() => {
    const allowances = getRequiredAllowances({
      tokens,
      amounts: amounts.value
    });
    return allowances;
  });

  async function approveAllowances(): Promise<void> {
    try {
      approving.value = true;
      const txs = await approveTokens(
        getProvider(),
        appNetworkConfig.value.addresses.vault,
        [requiredAllowances.value[0]]
      );
      const txHashes = txs.map(tx => tx.hash);

      txListener(txHashes, {
        onTxConfirmed: async () => {
          // REFACTOR: Hack to prevent race condition causing double approvals
          await txs[0].wait();
          await sleep(5000);
          await refetchAllowances.value();
          // END REFACTOR
          approving.value = false;
        },
        onTxCancel: () => {
          approving.value = false;
        },
        onTxFailed: () => {
          approving.value = false;
        }
      });
    } catch (error) {
      approving.value = false;
      console.error(error);
    }
  }

  return { requiredAllowances, approveAllowances, approving, approvedAll };
}
