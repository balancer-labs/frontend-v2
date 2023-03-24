import { AmountOut } from '@/providers/local/exit-pool.provider';
import { ExitParams } from '@/services/balancer/pools/exits/handlers/exit-pool.handler';
import { JoinParams } from '@/services/balancer/pools/joins/handlers/join-pool.handler';
import { aTokenInfo } from '@/types/TokenList.builders';
import { mock } from 'vitest-mock-extended';
import { wethAddress } from './address';
import { aSigner } from './signer';

export function anAmountOut(...options: Partial<AmountOut>[]): AmountOut {
  const defaultAmountOut = mock<AmountOut>();
  defaultAmountOut.address = wethAddress;
  defaultAmountOut.valid = true;
  defaultAmountOut.max = '100';
  defaultAmountOut.value = '10';
  return Object.assign(defaultAmountOut, ...options);
}

export function buildExitParams(...options: Partial<ExitParams>[]): ExitParams {
  const defaultExitParams = mock<ExitParams>();

  defaultExitParams.amountsOut = [anAmountOut({ address: wethAddress })];

  defaultExitParams.tokenInfo = {
    // This will be parametrized in incoming PRs:
    ['0x702605F43471183158938C1a3e5f5A359d7b31ba']: aTokenInfo(wethAddress),
    [wethAddress]: aTokenInfo(wethAddress),
  };

  defaultExitParams.signer = aSigner();

  return Object.assign(defaultExitParams, ...options);
}

export function buildJoinParams(...options: Partial<JoinParams>[]): JoinParams {
  const defaultJoinParams = mock<JoinParams>();

  defaultJoinParams.amountsIn = [];

  defaultJoinParams.signer = aSigner();

  return Object.assign(defaultJoinParams, ...options);
}
