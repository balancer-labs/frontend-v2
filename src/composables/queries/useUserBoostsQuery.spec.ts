import useUserBoostsQuery from '@/composables/queries/useUserBoostsQuery';
import { initMulticallerWithDefaultMocks } from '@/dependencies/Multicaller.mocks';
import { mountComposable, waitForQueryData } from '@tests/mount-helpers';
import { GaugeShare } from './useUserGaugeSharesQuery';

initMulticallerWithDefaultMocks();

test('Does not calculate boosts when user does not have gauge shares', async () => {
  const emptyGaugeShares = ref([]);
  const { result } = mountComposable(() =>
    useUserBoostsQuery(emptyGaugeShares)
  );

  const data = await waitForQueryData(result);

  expect(data).toEqual({});
});

test('Does not calculate boosts when user does not have gauge shares', async () => {
  const gaugeShare: GaugeShare = {
    balance: '100',
    gauge: { id: 'gauge Id', poolId: 'poolId', totalSupply: '1000' },
  };
  const userGaugeShares = ref([gaugeShare]);
  const { result } = mountComposable(() => useUserBoostsQuery(userGaugeShares));

  const data = await waitForQueryData(result);

  expect(data).toEqual({});
});
