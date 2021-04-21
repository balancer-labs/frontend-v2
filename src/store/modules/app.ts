import { getInstance } from '@snapshot-labs/lock/plugins/vue3';
import { lsGet, lsSet } from '@/utils';
import i18n from '@/plugins/i18n';

export interface AppState {
  init: boolean;
  loading: boolean;
  modalOpen: boolean;
  darkMode: boolean;
  locale: string;
  slippage: string;
}

const state: AppState = {
  init: false,
  loading: true,
  modalOpen: false,
  darkMode: false,
  // locale: defaultLocale,
  locale: 'en-US',
  slippage: '0.01'
};

const actions = {
  init: async ({ commit, dispatch }) => {
    try {
      // Fetch init data
      await dispatch('registry/get', null, { root: true });
      await dispatch('market/loadPrices', [], { root: true });

      // Setup web3
      const auth = getInstance();
      const connector = await auth.getConnector();
      if (connector) await dispatch('web3/login', connector, { root: true });

      commit('setLocale', 'en-US');
      commit('setDarkMode', false);

      // Set defaults from localStorage
      // commit('setLocale', lsGet('locale', defaultLocale));
      // commit('setDarkMode', lsGet('darkMode', false));
      commit('setSlippage', lsGet('slippage', '0.01'));
      commit('setLoading', false);
      commit('setInit', true);
    } catch (error) {
      commit('setInit', false);
      console.error('Failed to initialize app', error);
    }
  }
};

const mutations = {
  setInit(state: AppState, val: boolean): void {
    state.init = val;
  },

  setLoading(state: AppState, val: boolean): void {
    state.loading = val;
  },

  toggleModal(state: AppState): void {
    state.modalOpen = !state.modalOpen;
  },

  setLocale(state: AppState, locale: string): void {
    state.locale = locale;
    lsSet('locale', locale);
    i18n.global.locale = locale;
  },

  setSlippage(state: AppState, slippage: string): void {
    state.slippage = slippage;
    lsSet('slippage', slippage);
  },

  setDarkMode(state: AppState, val: boolean): void {
    state.darkMode = val;
    lsSet('darkMode', state.darkMode);
    if (state.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
