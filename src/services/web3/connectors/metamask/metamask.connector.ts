import { Connector } from '../connector';
export class MetamaskConnector extends Connector {
  id = 'injected';
  async connect() {
    const provider =
      (window as any).ethereum ||
      ((window as any).web3 && (window as any).web3.currentProvider);

    console.log('ehsayz', window.ethereum, (window as any).web3);
    if (provider) {
      this.provider = provider;
      this.active.value = true;

      let accounts = null;
      let chainId = null;
      // try the best practice way of get accounts with eth_requestAccounts && eth_chainId
      try {
        if (provider.request) {
          accounts = await provider.request({
            method: 'eth_requestAccounts'
          });

          chainId = await provider.request({ method: 'eth_chainId' });
        }
      } catch (err) {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      }

      // if account is still moot, try the bad old way - enable()
      if (!accounts) {
        // have to any it, since enable technically shouldn't be there anymore.
        // but might, for legacy clients.
        const response = await (provider as any).enable();
        accounts = response?.result || response;
      }

      // if still moot, try an even worser legacy way
      if (!accounts) {
        try {
          if (provider.send) {
            const response = await (provider.send as any)('eth_accounts');
            accounts = response?.result || response;
          }
        } catch (err) {
          console.error(err);
        }
      }

      if (accounts && chainId) {
        this.handleChainChanged(chainId);
        this.handleAccountsChanged(accounts);
      }
    } else {
      console.error(
        'Tried to connect to MetaMask but it was not detected. Please install MetaMask.'
      );
    }
    return {
      // TODO type this
      provider: provider as any,
      account: this.account,
      chainId: this.chainId
    };
  }
}
