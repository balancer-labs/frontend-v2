import { Network } from '@balancer-labs/sdk';
import { computed, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { networkId } from './useNetwork';

export enum PoolWarning {
  PoolProtocolFeeVulnWarning = 'poolProtocolFeeVulnWarning',
  PoolOwnerVulnWarningGovernanceMigrate = 'poolOwnerVulnWarningGovernanceMigrate',
  PoolOwnerVulnWarningGovernanceWithdraw = 'poolOwnerVulnWarningGovernanceWithdraw',
  PoolOwnerVulnWarningGovernance = 'poolOwnerVulnWarningGovernance',
  PoolOwnerVulnWarningEcosystem = 'poolOwnerVulnWarningEcosystem',
  PoolOwnerVulnWarningEcosystemMigrate = 'poolOwnerVulnWarningEcosystemMigrate',
  RenBTCWarning = 'renBTCWarning',
  EulerBoostedWarning = 'eulerBoostedWarning',
  EulerRecoveryModeWarning = 'eulerRecoveryModeWarning',
}

const POOL_ISSUES = {
  [Network.GOERLI]: {},
  [Network.MAINNET]: {
    [PoolWarning.PoolProtocolFeeVulnWarning]: [
      '0x5b3240b6be3e7487d61cd1afdfc7fe4fa1d81e6400000000000000000000037b',
    ],
    [PoolWarning.PoolOwnerVulnWarningGovernanceMigrate]: [
      '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
    ],
    [PoolWarning.PoolOwnerVulnWarningGovernanceWithdraw]: [
      '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
    ],
    [PoolWarning.PoolOwnerVulnWarningGovernance]: [
      '0x9f19a375709baf0e8e35c2c5c65aca676c4c719100000000000000000000006e',
    ],
    [PoolWarning.PoolOwnerVulnWarningEcosystem]: [
      '0xe7b1d394f3b40abeaa0b64a545dbcf89da1ecb3f00010000000000000000009a',
      '0x3b40d7d5ae25df2561944dd68b252016c4c7b2800001000000000000000000c2',
      '0xccf5575570fac94cec733a58ff91bb3d073085c70002000000000000000000af',
    ],
    [PoolWarning.RenBTCWarning]: [
      '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56000000000000000000000066',
      '0xad6a8c18b62eb914604ec1eec7fbcf132799fe090001000000000000000003f6',
    ],
    [PoolWarning.EulerBoostedWarning]: [
      '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f',
    ],
    [PoolWarning.EulerRecoveryModeWarning]: [
      '0x133d241f225750d2c92948e464a5a80111920331000000000000000000000476',
      '0x00c2a4be503869fa751c2dbcb7156cc970b5a8da000000000000000000000477',
      '0x483006684f422a9448023b2382615c57c5ecf18f000000000000000000000488',
      '0xb5e3de837f869b0248825e0175da73d4e8c3db6b000200000000000000000474',
      '0xa718042e5622099e5f0ace4e7122058ab39e1bbe000200000000000000000475',
      '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473',
    ],
  },
  [Network.POLYGON]: {
    [PoolWarning.PoolProtocolFeeVulnWarning]: [
      '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e',
    ],
    [PoolWarning.RenBTCWarning]: [
      '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc5600020000000000000000001e',
    ],
    [PoolWarning.PoolOwnerVulnWarningGovernanceMigrate]: [
      '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012',
      '0xc17636e36398602dd37bb5d1b3a9008c7629005f0002000000000000000004c4',
    ],
    [PoolWarning.PoolOwnerVulnWarningGovernance]: [
      '0xf38cf113d2d4f60c36cbd95af2f48a9a0167045a00000000000000000000005b',
      '0x0d34e5dd4d8f043557145598e4e2dc286b35fd4f000000000000000000000068',
      '0x5028497af0c9a54ea8c6d42a054c0341b9fc616800020000000000000000007b',
      '0xc31a37105b94ab4efca1954a14f059af11fcd9bb000000000000000000000455',
    ],
    [PoolWarning.PoolOwnerVulnWarningEcosystemMigrate]: [
      '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366',
    ],
    [PoolWarning.PoolOwnerVulnWarningEcosystem]: [
      '0xb4670d1389c758e4380c4211bcbc85342688b9c50002000000000000000003d8',
    ],
  },
  [Network.ARBITRUM]: {
    [PoolWarning.PoolOwnerVulnWarningGovernance]: [
      '0x5a5884fc31948d59df2aeccca143de900d49e1a300000000000000000000006f',
    ],
    [PoolWarning.PoolOwnerVulnWarningEcosystem]: [
      '0x0510ccf9eb3ab03c1508d3b9769e8ee2cfd6fdcf00000000000000000000005d',
    ],
  },
  [Network.GNOSIS]: {},
};

const issues = POOL_ISSUES[networkId.value];

export function usePoolWarning(poolId: Ref<string>) {
  const { t } = useI18n();

  /**
   * Array of issue keys that poolId is affected by.
   */
  const issueKeys = computed((): PoolWarning[] => {
    return Object.keys(issues)
      .map(issueKey => issues[issueKey].includes(poolId.value) && issueKey)
      .filter(issueKey => !!issueKey);
  });

  /**
   * If any issue keys, poolId is an affected pool and we should display warnings.
   */
  const isAffected = computed((): boolean => {
    return issueKeys.value.length > 0;
  });

  /**
   * Array of warnings we should display for the affected poolId.
   */
  const warnings = computed(() => {
    return issueKeys.value.map(issueKey => ({
      title: t(`poolWarnings.${issueKey}.title`),
      description: t(`poolWarnings.${issueKey}.description`),
    }));
  });

  function isAffectedBy(issueKey: PoolWarning): boolean {
    return issueKeys.value.includes(issueKey);
  }

  return {
    isAffected,
    warnings,
    isAffectedBy,
  };
}
