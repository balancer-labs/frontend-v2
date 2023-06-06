import { Network } from '@/lib/config';

import { txResponseMock } from '@/__mocks__/transactions';
import { useCrossChainNetwork } from '@/composables/queries/useCrossChainNetwork';
import { useOmniEscrowLocksQuery } from '@/composables/queries/useOmniEscrowLocksQuery';
import symbolKeys from '@/constants/symbol.keys';
import { OmniVotingEscrow } from '@/services/balancer/contracts/contracts/omni-voting-escrow';
import { configService } from '@/services/config/config.service';
import useWeb3 from '@/services/web3/useWeb3';
import { safeInject } from './inject';

export enum NetworkSyncState {
  Unsynced = 'Unsynced',
  Syncing = 'Syncing',
  Synced = 'Synced',
}
export interface NetworksBySyncState {
  synced: Network[];
  unsynced: Network[];
  syncing: Network[];
}

export type L2VeBalBalances = Record<number, string> | null;

export interface TempSyncingNetworks {
  networks: Network[];
  syncTimestamp?: number;
}

// all networks that are supported by cross-chain sync feature
export const supportedNetworks = [
  Network.POLYGON,
  Network.ARBITRUM,
  Network.GNOSIS,
  Network.OPTIMISM,
];

// https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids
export const LayerZeroNetworkId = {
  [Network.POLYGON]: 109,
  [Network.ARBITRUM]: 110,
  [Network.OPTIMISM]: 111,
  [Network.GNOSIS]: 145,
};

const REFETCH_INTERVAL = 10_000;

export const crossChainSyncProvider = () => {
  const { account, getSigner } = useWeb3();

  const syncingNetworksFromStorage = localStorage.getItem(
    'tempSyncingNetworks'
  );

  // as subgraph is lagging behind onchain data, we need to fake synced networks
  const tempSyncingNetworks = ref<Record<string, TempSyncingNetworks>>(
    syncingNetworksFromStorage ? JSON.parse(syncingNetworksFromStorage) : {}
  );

  /**
   * omniVotingEscrowLocks contains the user's veBAL data that is known by the bridge contract
   * it is used to determine sync status to l2 networks
   * slope and bias is how a user's "balance" is stored on the smart contract
   */
  const {
    data: omniEscrowResponse,
    isInitialLoading: isLoadingOmniEscrow,
    refetch: refetchOmniEscrow,
  } = useOmniEscrowLocksQuery(account);

  // if omniEscrowLocks is empty, then all networks are unsynced
  const allNetworksUnsynced = computed(
    () => omniEscrowResponse.value?.omniVotingEscrowLocks.length === 0
  );

  const omniEscrowLocks = computed(() => {
    if (allNetworksUnsynced.value) return null;

    const omniVotingEscrowLocks =
      omniEscrowResponse.value?.omniVotingEscrowLocks[0];
    return omniVotingEscrowLocks;
  });

  /**
   * smart contracts can direct their veBAL boost to a different address on L2
   * for regular UI users, remoteUser will be the same as localUser
   */
  const remoteUser = computed(() => {
    return omniEscrowLocks.value?.remoteUser;
  });

  const mainnetCrossChainNetwork = useCrossChainNetwork(
    Network.MAINNET,
    account
  );

  const mainnetEscrowLocks = computed(
    () => mainnetCrossChainNetwork.votingEscrowLocks.value
  );

  type UseCrossChainNetworkResponse = Record<
    Network,
    ReturnType<typeof useCrossChainNetwork>
  >;
  const crossChainNetworks: UseCrossChainNetworkResponse =
    {} as UseCrossChainNetworkResponse;

  supportedNetworks.forEach(networkId => {
    crossChainNetworks[networkId] = useCrossChainNetwork(networkId, remoteUser);
  });

  const isLoading = computed(() => {
    return (
      isLoadingOmniEscrow.value || mainnetCrossChainNetwork.isLoading.value
    );
  });

  const networksSyncState = computed(() => {
    const result = supportedNetworks.reduce((acc, network) => {
      acc[network] = crossChainNetworks[network].getNetworkSyncState(
        omniEscrowLocks.value,
        mainnetEscrowLocks.value
      );
      return acc;
    }, {});
    return result;
  });

  // Returns networks lists by sync state synced/unsynced
  const networksBySyncState = computed<NetworksBySyncState>(() => {
    if (!networksSyncState.value) {
      return {
        synced: [],
        unsynced: [],
        syncing: [],
      };
    }

    const networksWithValidSyncState = Object.keys(networksSyncState.value).map(
      v => Number(v)
    );

    return {
      synced: networksWithValidSyncState.filter(
        network => networksSyncState.value[network] === NetworkSyncState.Synced
      ) as Network[],
      unsynced: networksWithValidSyncState.filter(
        network =>
          networksSyncState.value[network] === NetworkSyncState.Unsynced
      ),
      syncing: networksWithValidSyncState.filter(
        network =>
          networksSyncState.value[network] === NetworkSyncState.Syncing ||
          tempSyncingNetworks.value[account.value]?.networks.includes(network)
      ),
    };
  });

  const l2VeBalBalances = computed<L2VeBalBalances>(() => {
    const result = supportedNetworks.reduce((acc, network) => {
      acc[network] = crossChainNetworks[network].calculateVeBAlBalance();
      return acc;
    }, {});
    return result;
  });

  async function sync(network: Network) {
    const contractAddress = configService.network.addresses.omniVotingEscrow;
    if (!contractAddress) throw new Error('No contract address found');
    const signer = getSigner();
    const omniVotingEscrowContract = new OmniVotingEscrow(contractAddress);

    const tx = await omniVotingEscrowContract.estimateSendUserBalance(
      signer,
      LayerZeroNetworkId[network]
    );

    const { nativeFee } = tx;
    console.log('nativeFee', nativeFee);

    // const sendUserBalanceTx = await omniVotingEscrowContract.sendUserBalance({
    //   signer,
    //   userAddress: account.value,
    //   chainId: LayerZeroNetworkId[network],
    //   nativeFee,
    // });

    // console.log('sendUserBalanceTx', sendUserBalanceTx);
    return txResponseMock;
  }

  async function refetch() {
    await Promise.all([
      refetchOmniEscrow(),
      mainnetCrossChainNetwork.refetch(),
    ]);
    if (remoteUser.value) {
      const promises = networksBySyncState.value.syncing.map(networkId => {
        return crossChainNetworks[networkId].refetch();
      });
      await Promise.all(promises);
    }
  }

  let disposeRefetchOnInterval;
  function refetchOnInterval() {
    disposeRefetchOnInterval = setInterval(() => {
      void refetch();
    }, REFETCH_INTERVAL);

    return () => {
      clearInterval(disposeRefetchOnInterval);
    };
  }

  function setTempSyncingNetworks(syncingNetworks: Network[]) {
    if (!tempSyncingNetworks.value[account.value]) {
      tempSyncingNetworks.value[account.value] = {
        networks: syncingNetworks,
        syncTimestamp: Date.now(),
      };
    } else {
      tempSyncingNetworks.value[account.value].networks = [
        ...tempSyncingNetworks.value[account.value].networks,
        ...syncingNetworks,
      ];
    }

    tempSyncingNetworks.value[account.value].syncTimestamp = Date.now();

    return tempSyncingNetworks.value;
  }

  function clearTempSyncingNetworks() {
    if (!tempSyncingNetworks.value[account.value]) return;

    tempSyncingNetworks.value[account.value].networks =
      tempSyncingNetworks.value[account.value]?.networks.filter(network => {
        return !networksBySyncState.value.synced.includes(network);
      });
  }

  watch(
    () => networksBySyncState.value,
    (newVal, prevVal) => {
      console.log('newVal', newVal);
      console.log('prevVal', prevVal);

      if (newVal.syncing.length > 0 && !disposeRefetchOnInterval) {
        refetchOnInterval();
      }
      if (newVal.syncing.length === 0 && disposeRefetchOnInterval) {
        disposeRefetchOnInterval();
      }

      clearTempSyncingNetworks();
    }
  );

  return {
    omniEscrowLocks,
    networksSyncState,
    isLoading,
    networksBySyncState,
    l2VeBalBalances,
    sync,
    refetch,
    tempSyncingNetworks,
    refetchOnInterval,
    setTempSyncingNetworks,
  };
};

export type CrossChainSyncResponse = ReturnType<typeof crossChainSyncProvider>;
export const CrossChainSyncProviderSymbol: InjectionKey<CrossChainSyncResponse> =
  Symbol(symbolKeys.Providers.CrossChainSync);

export function provideCrossChainSync() {
  const crossChainSyncResponse = crossChainSyncProvider();
  provide(CrossChainSyncProviderSymbol, crossChainSyncResponse);
  return crossChainSyncResponse;
}

export const useCrossChainSync = (): CrossChainSyncResponse => {
  return safeInject(CrossChainSyncProviderSymbol);
};
