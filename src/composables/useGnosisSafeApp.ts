import SafeAppsSDK from '@gnosis.pm/safe-apps-sdk';
import { onBeforeMount, ref } from 'vue';

import useNetwork from '@/composables/useNetwork';
import { tryPromiseWithTimeout } from '@/lib/utils/promise';
import useWeb3 from '@/services/web3/useWeb3';
import { hardRedirectTo } from '@/plugins/router/nav-guards';

export const isGnosisSafeApp = ref(false);

async function checkIfGnosisSafeApp(): Promise<boolean> {
  // Can't be a Safe app if we're not running in an iframe
  if (window.self === window.top) return false;

  // Try to connect to the Gnosis UI by querying Safe info
  // If we get no response then we're not in a Safe app
  try {
    await tryPromiseWithTimeout(new SafeAppsSDK().safe.getInfo(), 1000);
    return true;
  } catch {
    return false;
  }
}

export default function useGnosisSafeApp() {
  const { connectWallet, chainId } = useWeb3();
  const { networkId, getNetworkSlug } = useNetwork();

  onBeforeMount(async () => {
    // If we're running as a Safe App we want to automatically
    // connect to the provided safe.
    isGnosisSafeApp.value = await checkIfGnosisSafeApp();
    if (isGnosisSafeApp.value) {
      await connectWallet('safe');
      if (chainId.value !== networkId.value) {
        hardRedirectTo(`/#/${getNetworkSlug(chainId.value)}`);
      }
      // Disable darkmode by default
    }
  });

  return {
    isGnosisSafeApp,
  };
}
