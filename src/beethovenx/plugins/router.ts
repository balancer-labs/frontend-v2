import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/beethovenx/pages/Invest.vue';
import PoolPage from '@/pages/pool/_id.vue';
import PoolInvestPage from '@/pages/pool/invest.vue';
import PoolWithdrawPage from '@/pages/pool/withdraw.vue';
import LiquidityMiningPage from '@/pages/liquidity-mining.vue';
import TradePage from '@/beethovenx/pages/trade.vue';
import PoolCreate from '@/beethovenx/pages/PoolCreate.vue';
import Portfolio from '@/beethovenx/pages/Portfolio.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', redirect: '/trade' },
  {
    path: '/trade/:assetIn?/:assetOut?',
    name: 'trade',
    component: TradePage
  },
  {
    path: '/swap/:assetIn?/:assetOut?',
    redirect: to => {
      return `/trade${to.path.split('/swap')[1]}`;
    }
  },
  {
    path: '/pool/:id',
    name: 'pool',
    component: PoolPage
  },
  {
    path: '/pool/:id/invest',
    name: 'invest',
    component: PoolInvestPage,
    meta: { layout: 'PoolTransferLayout' }
  },
  {
    path: '/pool/:id/withdraw',
    name: 'withdraw',
    component: PoolWithdrawPage,
    meta: { layout: 'PoolTransferLayout' }
  },
  {
    path: '/liquidity-mining',
    name: 'liquidity-mining',
    component: LiquidityMiningPage
  },
  { path: '/invest', name: 'invest', component: HomePage },
  { path: '/pool-create', name: 'pool-create', component: PoolCreate },
  { path: '/my-portfolio', name: 'my-portfolio', component: Portfolio },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/'
  }
];

/**
 * DEV/STAGING ONLY ROUTES
 */
if (
  ['development', 'staging'].includes(process.env.VUE_APP_ENV || 'development')
) {
  // routes.push();
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
