import { Pools } from '@/types/pools';

const pools: Pools = {
  IdsMap: {
    staBAL:
      '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
    bbAaveUSD: {
      v1: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
      v2: '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
    },
    veBAL: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: true,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: [
    'Weighted',
    'Stable',
    'MetaStable',
    'LiquidityBootstrapping',
    'Investment',
    'StablePhantom',
    'ComposableStable',
    'FX',
    'EulerLinear',
  ],
  Stable: {
    AllowList: [
      '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063', // staBAL3 (DAI-USD-USDC)
      '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56000000000000000000000066', // WBTC-renBTC-sBTC
      '0x9f19a375709baf0e8e35c2c5c65aca676c4c719100000000000000000000006e', // PAR-sEUR-EURS
      '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080', // Lido Metastable
      '0x1e19cf2d73a72ef1332c882f20534b6519be0276000200000000000000000112', // Rocket Pool Metastable
      '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe', // Mainnet bb-a-USD
      '0x851523a36690bf267bbfec389c823072d82921a90002000000000000000001ed', // wstETH/WETH #2
      '0x3dd0843a028c86e0b760b1a76929d1c5ef93a2dd000200000000000000000249', // b-auraBAL-Stable (auraBal / 8020 BALETH)
      '0x2d011adf89f0576c9b722c28269fcb5d50c2d17900020000000000000000024d', // sdBAL Stable Pool (sdBAL / 8020 BALETH)
      '0x178e029173417b1f9c8bc16dcec6f697bc32374600000000000000000000025d', // Fiat DAO Stable Pool
      '0xf93579002dbe8046c43fefe86ec78b1112247bb80000000000000000000002bc', // USDD 3 pool
      '0xf3aeb3abba741f0eece8a1b1d2f11b85899951cb000200000000000000000351', // MAI stable pool
      '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d', // bb-a-USD V2
      '0x5b3240b6be3e7487d61cd1afdfc7fe4fa1d81e6400000000000000000000037b', // DOLA/INV stable pool
      '0x2ba7aa2213fa2c909cd9e46fed5a0059542b36b00000000000000000000003a3', // TUSD/bbausd
      '0x6a9603e481fb8f2c09804ea9adab49a338855b900000000000000000000003a8', // Balancer graviAURA Stable Pool
      '0x8e85e97ed19c0fa13b2549309965291fbbc0048b0000000000000000000003ba', // staked frax/rocket/wsteth
      '0xac976bb42cb0c85635644e8c7c74d0e0286aa61c0000000000000000000003cb', // fiat/bbausd
      '0xc9c5ff67bb2fae526ae2467c359609d6bcb4c5320000000000000000000003cc', // qeth/eth tranchess
      '0x4edcb2b46377530bc18bb4d2c7fe46a992c73e100000000000000000000003ec', // cbETH/wstETH
      '0x53bc3cba3832ebecbfa002c12023f8ab1aa3a3a0000000000000000000000411', // TUSD/bb-a-usd
      '0x4c8d2e60863e8d7e1033eda2b3d84e92a641802000000000000000000000040f', // FRAX/aave-usdc
      '0x9c6d47ff73e0f5e51be5fd53236e3f595c5793f200020000000000000000042c', // cbeth/wsteth stable
      '0xff4ce5aaab5a627bf82f4a571ab1ce94aa365ea6000200000000000000000426', // dola/usdc stable
      '0x384f67aa430376efc4f8987eabf7f3f84eb9ea5d00020000000000000000043d', // dola/cusd stable
      '0x8a34b5ad76f528bfec06c80d85ef3b53da7fc30000020000000000000000043e', // ankrETH/weth stable
      '0xb08885e6026bab4333a80024ec25a1a3e1ff2b8a000200000000000000000445', // rETH (stafi ETH)/weth
      '0x961764651931941f23cea5bab246607dc19ef224000200000000000000000444', // tetubal
      '0x831261f44931b7da8ba0dcc547223c60bb75b47f000200000000000000000460', // wUSDR/USDC stable pool
      '0x5aee1e99fe86960377de9f88689616916d5dcabe000000000000000000000467', // sfrxeth/wsteth/reth (v3)
      '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f', // bbeusd
      '0x133d241f225750d2c92948e464a5a80111920331000000000000000000000476', // dola/bbeusd
      '0x00c2a4be503869fa751c2dbcb7156cc970b5a8da000000000000000000000477', // euler-frax/euler-usdc
      '0x3dbb8d974b82e82ce79c20c0f5995f4f1f533ede000000000000000000000470', // zUSD-bb-e-USD
      '0x60683b05e9a39e3509d8fdb9c959f23170f8a0fa000000000000000000000489', // idle boosted
      '0x483006684f422a9448023b2382615c57c5ecf18f000000000000000000000488', // tusd euler
      '0x99c88ad7dc566616548adde8ed3effa730eb6c3400000000000000000000049a', // gearbox stable
      '0x20b156776114e8a801e9767d90c6ccccc8adf398000000000000000000000499', // yearn stable
      '0xdb3b48f27332c171869f2ae4160bc93a8eed347c00000000000000000000049b', // baoUSD USDC
      '0x779d01f939d78a918a3de18cc236ee89221dfd4e0000000000000000000004c7', // sturdy usd
      '0xcaa052584b462198a5a9356c28bce0634d65f65c0000000000000000000004db', // morpho usd
      '0x79c58f70905f734641735bc61e45c19dd9ad60bc0000000000000000000004e7', // stable3
      '0x793f2d5cd52dfafe7a1a1b0b3988940ba2d6a63d0000000000000000000004f8', // Bifrost vETH stableswap
      '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016000000000000000000000502', // bb-a-usd v3
      '0xe0fcbf4d98f0ad982db260f86cf28b49845403c5000000000000000000000504', // bb-a-eth / wsteth
      '0x02d928e68d8f10c0358566152677db51e1e2dc8c00000000000000000000051e', // sweth/bb-a-weth
      '0x04248aabca09e9a1a3d5129a7ba05b7f17de768400000000000000000000050e', // bb-a-weth / qeth
      '0x9001cbbd96f54a658ff4e6e65ab564ded76a543100000000000000000000050a', // bb-a-weth / cbeth
      '0xbfce47224b4a938865e3e2727dc34e0faa5b1d82000000000000000000000527', // uniweth / weth
    ],
  },
  Investment: {
    AllowList: [
      '0xccf5575570fac94cec733a58ff91bb3d073085c70002000000000000000000af', // iROBOT mainnet
      '0xe7b1d394f3b40abeaa0b64a545dbcf89da1ecb3f00010000000000000000009a', // Techemy mainnet
      '0x3b40d7d5ae25df2561944dd68b252016c4c7b2800001000000000000000000c2', // WSB-DEFI mainnet
    ],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [
      '0x67f117350eab45983374f4f83d275d8a5d62b1bf0001000000000000000004f2', // GRAIN/OATH/USDC/WETH
      '0x0fadd10f606554fec1574f28398469d98d68d297000200000000000000000503', // 80XEX/20USDC
      '0x42fbd9f666aacc0026ca1b88c94259519e03dd67000200000000000000000507', // COIL/USDC
      '0x639883476960a23b38579acfd7d71561a0f408cf000200000000000000000505', // STG/bb-a-usd
      '0x68e3266c9c8bbd44ad9dca5afbfe629022aee9fe000200000000000000000512', // wjonesaura
      '0xd278166dabaf26707362f7cfdd204b277fd2a4600002000000000000000004f6', // USH/WETH
      '0x08775ccb6674d6bdceb0797c364c2653ed84f3840002000000000000000004f0', // 3Pool/WETH
      '0x87a867f5d240a782d43d90b6b06dea470f3f8f22000200000000000000000516', // wseth/comp
      '0x8bd4a1e74a27182d23b98c10fd21d4fbb0ed4ba00002000000000000000004ed', // temple/dai
      '0xd689abc77b82803f22c49de5c8a0049cc74d11fd000200000000000000000524', // ush/unstheth
      '0x6987633f18ca0b4a10831331fcc57211941b6ba0000200000000000000000530', // 20AGI/80WETH
    ],
  },
  Factories: {
    '0xa5bf2ddf098bb0ef6d120c98217dd6b141c74ee0': 'oracleWeightedPool',
    '0x8e9aa87e45e92bad84d5f8dd1bff34fb92637de9': 'weightedPool',
    '0xc66ba2b6595d3613ccab350c886ace23866ede24': 'stablePool',
    '0x67d27634e44793fe63c467035e31ea8635117cd4': 'stablePool', // Metastable
    '0x751a0bc0e3f75b38e01cf25bfce7ff36de1c87de': 'liquidityBootstrappingPool', // Mainnet LBP
    '0x0f3e0c4218b7b0108a3643cfe9d3ec0d4f57c54e': 'liquidityBootstrappingPool', // Mainnet LBP (zero protocol fee)
    '0x48767f9f868a4a7b86a90736632f6e44c2df7fa9': 'managedPool', // Mainnet Managed
    '0xb08e16cfc07c684daa2f93c70323badb2a6cbfd2': 'boostedPool', // mainnet stablephantom
    '0x8df6efec5547e31b0eb7d1291b511ff8a2bf987c': 'stablePool', // stable pool v2
    '0xf9ac7b9df2b3454e841110cce5550bd5ac6f875f': 'composableStablePool', // ComposableStable
    '0xcc508a455f5b0073973107db6a878ddbdab957bc': 'weightedPool', // weighted pool v2
    '0xdba127fbc23fb20f5929c546af220a991b5c6e01': 'composableStablePool', // ComposableStable v2
    '0x5dd94da3644ddd055fcf6b3e1aa310bb7801eb8b': 'weightedPool', // weighted pool v3
    '0x81fe9e5b28da92ae949b705dfdb225f7a7cc5134': 'fx', // fx
    '0x897888115ada5773e02aa29f775430bfb5f34c51': 'weightedPool', // weighted pool v4
    '0x5f43fba61f63fa6bff101a0a0458cea917f6b347': 'eulerLinear',
  },
  Stakable: {
    VotingGaugePools: [
      '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
      '0x072f14b85add63488ddad88f855fda4a99d6ac9b000200000000000000000027',
      '0x0b09dea16768f0799065c475be02919503cb2a3500020000000000000000001a',
      '0x186084ff790c65088ba694df11758fae4943ee9e000200000000000000000013',
      '0x1e19cf2d73a72ef1332c882f20534b6519be0276000200000000000000000112',
      '0x27c9f71cc31464b906e0006d4fcbc8900f48f15f00020000000000000000010f',
      '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080',
      '0x350196326aeaa9b98f1903fb5e8fc2686f85318c000200000000000000000084',
      '0x3e5fa9518ea95c3e533eb377c001702a9aacaa32000200000000000000000052',
      '0x51735bdfbfe3fc13dea8dc6502e2e958989429610002000000000000000000a0',
      '0x5d66fff62c17d841935b60df5f07f6cf79bd0f4700020000000000000000014c',
      '0x5f7fa48d765053f8dd85e052843e12d23e3d7bc50002000000000000000000c0',
      '0x702605f43471183158938c1a3e5f5a359d7b31ba00020000000000000000009f',
      '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
      '0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8',
      '0x8f4205e1604133d1875a3e771ae7e4f2b086563900020000000000000000010e',
      '0x90291319f1d4ea3ad4db0dd8fe9e12baf749e84500020000000000000000013c',
      '0x96646936b91d6b9d7d0c47c496afbf3d6ec7b6f8000200000000000000000019',
      '0x96ba9025311e2f47b840a1f68ed57a3df1ea8747000200000000000000000160',
      '0xa02e4b3d18d4e6b8d18ac421fbc3dfff8933c40a00020000000000000000004b',
      '0xa6f548df93de924d73be7d25dc02554c6bd66db500020000000000000000000e',
      '0xbaeec99c90e3420ec6c1e7a769d2a856d2898e4d00020000000000000000008a',
      '0xbf96189eee9357a95c7719f4f5047f76bde804e5000200000000000000000087',
      '0xe2469f47ab58cf9cf59f9822e3c5de4950a41c49000200000000000000000089',
      '0xe99481dc77691d8e2456e5f3f61c1810adfc1503000200000000000000000018',
      '0xec60a5fef79a92c741cb74fdd6bfc340c0279b01000200000000000000000015',
      '0xedf085f65b4f6c155e13155502ef925c9a756003000200000000000000000123',
      '0xefaa1604e82e1b3af8430b90192c1b9e8197e377000200000000000000000021',
      '0xf4c0dd9b82da36c07605df83c8a416f11724d88b000200000000000000000026',
      '0xf5aaf7ee8c39b651cebf5f1f50c10631e78e0ef9000200000000000000000069',
      '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56000000000000000000000066',
      '0x17ddd9646a69c9445cd8a9f921d4cd93bf50d108000200000000000000000159',
      '0x92762b42a06dcdddc5b7362cfb01e631c4d44b40000200000000000000000182',
      '0xde8c195aa41c11a0c4787372defbbddaa31306d2000200000000000000000181',
      '0xc45d42f801105e861e86658648e3678ad7aa70f900010000000000000000011e',
      '0x2d344a84bac123660b021eebe4eb6f12ba25fe8600020000000000000000018a',
      '0xb460daa847c45f1c4a41cb05bfb3b51c92e41b36000200000000000000000194',
      '0x5122e01d819e58bb2e22528c0d68d310f0aa6fd7000200000000000000000163',
      '0x851523a36690bf267bbfec389c823072d82921a90002000000000000000001ed',
      '0xe8cc7e765647625b95f59c15848379d10b9ab4af0002000000000000000001de',
      '0x85370d9e3bb111391cc89f6de344e801760461830002000000000000000001ef',
      '0xa7ff759dbef9f3efdd1d59beee44b966acafe214000200000000000000000180',
      '0x3f7c10701b14197e2695dec6428a2ca4cf7fc3b800020000000000000000023c',
      '0x2d011adf89f0576c9b722c28269fcb5d50c2d17900020000000000000000024d',
      '0x178e029173417b1f9c8bc16dcec6f697bc32374600000000000000000000025d',
      '0xcfca23ca9ca720b6e98e3eb9b6aa0ffc4a5c08b9000200000000000000000274',
      '0x3dd0843a028c86e0b760b1a76929d1c5ef93a2dd000200000000000000000249',
      '0x0578292cb20a443ba1cde459c985ce14ca2bdee5000100000000000000000269',
      '0x8eb6c82c3081bbbd45dcac5afa631aac53478b7c000100000000000000000270',
      '0x1b65fe4881800b91d4277ba738b567cbb200a60d0002000000000000000002cc',
      '0x99a14324cfd525a34bbc93ac7e348929909d57fd00020000000000000000030e',
      '0x9b532ab955417afd0d012eb9f7389457cd0ea712000000000000000000000338',
      '0x48607651416a943bf5ac71c41be1420538e78f87000200000000000000000327',
      '0x6a5ead5433a50472642cd268e584dafa5a394490000200000000000000000366',
      '0x0fd5663d4893ae0d579d580584806aadd2dd0b8b000200000000000000000367',
      '0x441b8a1980f2f2e43a9397099d15cc2fe6d3625000020000000000000000035f',
      '0xf3aeb3abba741f0eece8a1b1d2f11b85899951cb000200000000000000000351',
      '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
      '0x496ff26b76b8d23bbc6cf1df1eee4a48795490f7000200000000000000000377',
      '0x5b3240b6be3e7487d61cd1afdfc7fe4fa1d81e6400000000000000000000037b',
      '0x334c96d792e4b26b841d28f53235281cec1be1f200020000000000000000038a',
      '0x25accb7943fd73dda5e23ba6329085a3c24bfb6a000200000000000000000387',
      '0xe340ebfcaa544da8bb1ee9005f1a346d50ec422e000200000000000000000396',
      '0xae7bfd6fa54259fc477879712eebe34164d3a84f000200000000000000000376',
      '0x4ce0bd7debf13434d3ae127430e9bd4291bfb61f00020000000000000000038b',
      '0x8e85e97ed19c0fa13b2549309965291fbbc0048b0000000000000000000003ba',
      '0x173063a30e095313eee39411f07e95a8a806014e0002000000000000000003ab',
      '0x8167a1117691f39e05e9131cfa88f0e3a620e96700020000000000000000038c',
      '0x798b112420ad6391a4129ac25ef59663a44c88bb0002000000000000000003f4',
      '0x798b112420ad6391a4129ac25ef59663a44c88bb0002000000000000000003f4',
      '0x5512a4bbe7b3051f92324bacf25c02b9000c4a500001000000000000000003d7',
      '0x4edcb2b46377530bc18bb4d2c7fe46a992c73e100000000000000000000003ec',
      '0xd1ec5e215e8148d76f4460e4097fd3d5ae0a35580002000000000000000003d3',
      '0x76fcf0e8c7ff37a47a799fa2cd4c13cde0d981c90002000000000000000003d2',
      '0xc9c5ff67bb2fae526ae2467c359609d6bcb4c5320000000000000000000003cc',
      '0x9c6d47ff73e0f5e51be5fd53236e3f595c5793f200020000000000000000042c',
      '0xff4ce5aaab5a627bf82f4a571ab1ce94aa365ea6000200000000000000000426',
      '0xd590931466cdd6d488a25da1e89dd0539723800c00020000000000000000042b',
      '0x8a34b5ad76f528bfec06c80d85ef3b53da7fc30000020000000000000000043e',
      '0xdb0cbcf1b8282dedc90e8c2cefe11041d6d1e9f0000200000000000000000431',
      '0xe4010ef5e37dc23154680f23c4a0d48bfca91687000200000000000000000432',
      '0xb08885e6026bab4333a80024ec25a1a3e1ff2b8a000200000000000000000445',
      '0x384f67aa430376efc4f8987eabf7f3f84eb9ea5d00020000000000000000043d',
      '0xad0e5e0778cac28f1ff459602b31351871b5754a0002000000000000000003ce',
      '0x00c2a4be503869fa751c2dbcb7156cc970b5a8da000000000000000000000477',
      '0x959216bb492b2efa72b15b7aacea5b5c984c3cca000200000000000000000472',
      '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f',
      '0xa3c500969accb3d8df08cba313c120818fe0ed9d000200000000000000000471',
      '0x831261f44931b7da8ba0dcc547223c60bb75b47f000200000000000000000460',
      '0xfd1cf6fd41f229ca86ada0584c63c49c3d66bbc9000200000000000000000438',
      '0x5aee1e99fe86960377de9f88689616916d5dcabe000000000000000000000467',
      '0x9f9d900462492d4c21e9523ca95a7cd86142f298000200000000000000000462',
      '0x1ee442b5326009bb18f2f472d3e0061513d1a0ff000200000000000000000464',
      '0x5f1f4e50ba51d723f12385a8a9606afc3a0555f5000200000000000000000465',
      '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473',
      '0xa718042e5622099e5f0ace4e7122058ab39e1bbe000200000000000000000475',
      '0xb5e3de837f869b0248825e0175da73d4e8c3db6b000200000000000000000474',
      '0x133d241f225750d2c92948e464a5a80111920331000000000000000000000476',
      '0x36be1e97ea98ab43b4debf92742517266f5731a3000200000000000000000466',
      '0x99c88ad7dc566616548adde8ed3effa730eb6c3400000000000000000000049a',
      '0x20b156776114e8a801e9767d90c6ccccc8adf398000000000000000000000499',
      '0x15c1cdacd3da1e1c1304200b1beb080d50bbbc0f00020000000000000000045f',
      '0x483006684f422a9448023b2382615c57c5ecf18f000000000000000000000488',
      '0x60683b05e9a39e3509d8fdb9c959f23170f8a0fa000000000000000000000489',
      '0xd4f79ca0ac83192693bce4699d0c10c66aa6cf0f00020000000000000000047e',
      '0xf16aee6a71af1a9bc8f56975a4c2705ca7a782bc0002000000000000000004bb',
      '0xcaa052584b462198a5a9356c28bce0634d65f65c0000000000000000000004db',
      '0x779d01f939d78a918a3de18cc236ee89221dfd4e0000000000000000000004c7',
      '0x9cc64ee4cb672bc04c54b00a37e1ed75b2cc19dd0002000000000000000004c1',
      '0x79c58f70905f734641735bc61e45c19dd9ad60bc0000000000000000000004e7',
      '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016000000000000000000000502',
      '0xe0fcbf4d98f0ad982db260f86cf28b49845403c5000000000000000000000504',
      '0xd278166dabaf26707362f7cfdd204b277fd2a4600002000000000000000004f6',
      '0x08775ccb6674d6bdceb0797c364c2653ed84f3840002000000000000000004f0',
      '0x639883476960a23b38579acfd7d71561a0f408cf000200000000000000000505',
      '0x8bd4a1e74a27182d23b98c10fd21d4fbb0ed4ba00002000000000000000004ed',
      '0x9001cbbd96f54a658ff4e6e65ab564ded76a543100000000000000000000050a',
      '0x87a867f5d240a782d43d90b6b06dea470f3f8f22000200000000000000000516',
      '0x04248aabca09e9a1a3d5129a7ba05b7f17de768400000000000000000000050e',
      '0x68e3266c9c8bbd44ad9dca5afbfe629022aee9fe000200000000000000000512',
      '0x0018c32d85d8aebea2efbe0b0f4a4eb9e4f1c8c900020000000000000000050c',
      '0x02d928e68d8f10c0358566152677db51e1e2dc8c00000000000000000000051e',
      '0xd689abc77b82803f22c49de5c8a0049cc74d11fd000200000000000000000524',
      '0x42fbd9f666aacc0026ca1b88c94259519e03dd67000200000000000000000507',
      '0x3e953c6bf97284f736c5f95b3c3be8f4e48075f4000200000000000000000522',
    ],
    AllowList: [],
  },
  Metadata: {
    '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe': {
      name: 'Balancer Boosted Aave USD',
      hasIcon: true,
    },
    '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d': {
      name: 'Balancer Boosted Aave USD',
      hasIcon: true,
    },
    '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f': {
      name: 'Balancer Boosted Euler USD',
      hasIcon: true,
    },
    '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063': {
      name: 'Balancer Stable USD',
      hasIcon: true,
    },
    '0x3dd0843a028c86e0b760b1a76929d1c5ef93a2dd000200000000000000000249': {
      name: 'AuraBAL Stable Pool',
      hasIcon: false,
    },
    '0x60683b05e9a39e3509d8fdb9c959f23170f8a0fa000000000000000000000489': {
      name: 'Balancer Idle JuniorBY Boosted StablePool',
      hasIcon: false,
    },
    '0x20b156776114e8a801e9767d90c6ccccc8adf398000000000000000000000499': {
      name: 'Balancer Boosted Yearn USD',
      hasIcon: true,
    },
    '0x99c88ad7dc566616548adde8ed3effa730eb6c3400000000000000000000049a': {
      name: 'Balancer Boosted Gearbox USD',
      hasIcon: true,
    },
    '0x133d241f225750d2c92948e464a5a80111920331000000000000000000000476': {
      name: 'Euler Boosted USD/DOLA',
      hasIcon: false,
    },
    '0x483006684f422a9448023b2382615c57c5ecf18f000000000000000000000488': {
      name: 'Euler Boosted USD/TUSD',
      hasIcon: false,
    },
    '0xb5e3de837f869b0248825e0175da73d4e8c3db6b000200000000000000000474': {
      name: 'Euler Boosted USD/rETH',
      hasIcon: false,
    },
    '0xa718042e5622099e5f0ace4e7122058ab39e1bbe000200000000000000000475': {
      name: 'Euler Boosted USD/TEMPLE',
      hasIcon: false,
    },
    '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473': {
      name: 'Euler Boosted USD/wstETH',
      hasIcon: false,
    },
    '0x779d01f939d78a918a3de18cc236ee89221dfd4e0000000000000000000004c7': {
      name: 'Balancer Boosted Sturdy USD',
      hasIcon: false,
    },
    '0xcaa052584b462198a5a9356c28bce0634d65f65c0000000000000000000004db': {
      name: 'Balancer Boosted Morpho-Aave USD',
      hasIcon: false,
    },
    '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016000000000000000000000502': {
      name: 'Balancer Boosted Aave v3 USD',
      hasIcon: false,
    },
    '0xe0fcbf4d98f0ad982db260f86cf28b49845403c5000000000000000000000504': {
      name: 'wstETH/Boosted Aave v3  WETH',
      hasIcon: false,
    },
    '0x639883476960a23b38579acfd7d71561a0f408cf000200000000000000000505': {
      name: 'STG/Boosted Aave v3 USD',
      hasIcon: false,
    },
  },
  Deep: [
    '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe', // bb-a-USD1 (mainnet)
    '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d', // bb-a-USD2 (mainnet)
    // '0x25accb7943fd73dda5e23ba6329085a3c24bfb6a000200000000000000000387', // wstETH/bb-a-USD (mainnet)
    '0x5b3240b6be3e7487d61cd1afdfc7fe4fa1d81e6400000000000000000000037b', // dola/bb-a-USD (mainnet)
    // '0x4ce0bd7debf13434d3ae127430e9bd4291bfb61f00020000000000000000038b', // STG/bba-usd (mainnet)
    // '0x334c96d792e4b26b841d28f53235281cec1be1f200020000000000000000038a', // rETH/bba-usd (mainnet)
    // '0x53bc3cba3832ebecbfa002c12023f8ab1aa3a3a0000000000000000000000411', // TUSD/bb-a-usd (mainnet)
    '0x4c8d2e60863e8d7e1033eda2b3d84e92a641802000000000000000000000040f', // FRAX/aave-usdc (mainnet)
    '0x5aee1e99fe86960377de9f88689616916d5dcabe000000000000000000000467', // wstETH/sfrxETH/rETH (mainnet)
    // '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f', // euler usd (mainnet)
    // '0x133d241f225750d2c92948e464a5a80111920331000000000000000000000476', // dola/bb-e-usd (mainnet)
    // '0x00c2a4be503869fa751c2dbcb7156cc970b5a8da000000000000000000000477', // euler frax/euler usdc (mainnet)
    // '0x483006684f422a9448023b2382615c57c5ecf18f000000000000000000000488', // tusd/bb-e-usd (mainnet)
    '0x60683b05e9a39e3509d8fdb9c959f23170f8a0fa000000000000000000000489', // bb-i-usd (mainnet)
    // '0xb5e3de837f869b0248825e0175da73d4e8c3db6b000200000000000000000474', // reth/bb-e-usd (mainnet)
    // '0xa718042e5622099e5f0ace4e7122058ab39e1bbe000200000000000000000475', // temple/bb-e-usd (mainnet)
    // '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473', // wsteth/bb-e-usd (mainnet)
    '0x959216bb492b2efa72b15b7aacea5b5c984c3cca000200000000000000000472', // stakedape/wsteth (mainnet)
    '0x99c88ad7dc566616548adde8ed3effa730eb6c3400000000000000000000049a', // bb-g-usd (mainnet)
    '0x3f7a7fd7f214be45ec26820fd01ac3be4fc75aa70002000000000000000004c5', // stg/bbeusd
    '0xcaa052584b462198a5a9356c28bce0634d65f65c0000000000000000000004db', // ma usdc/usdt/dai (morpho boosted)
    '0x779d01f939d78a918a3de18cc236ee89221dfd4e0000000000000000000004c7', // sturdy usd
    '0x639883476960a23b38579acfd7d71561a0f408cf000200000000000000000505', // stg/bb-a-usd
    '0x08775ccb6674d6bdceb0797c364c2653ed84f3840002000000000000000004f0', // weth 3pool
    '0xe0fcbf4d98f0ad982db260f86cf28b49845403c5000000000000000000000504', // bb-a-weth/wsteth
    '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016000000000000000000000502', // aave usd v3
    '0x02d928e68d8f10c0358566152677db51e1e2dc8c00000000000000000000051e', // sweth/bb-a-weth
    '0x04248aabca09e9a1a3d5129a7ba05b7f17de768400000000000000000000050e', // bb-a-weth / qeth
  ],
  BoostedApr: [
    '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2', // bb-a-USD1 (mainnet)
    '0xa13a9247ea42d743238089903570127dda72fe44', // bb-a-USD2 (mainnet)
    '0x25accb7943fd73dda5e23ba6329085a3c24bfb6a', // wstETH/bb-a-USD (mainnet)
    '0x5b3240b6be3e7487d61cd1afdfc7fe4fa1d81e64', // dola/bb-a-USD (mainnet)
  ],
  DisabledJoins: [
    '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56000000000000000000000066',
    '0xad6a8c18b62eb914604ec1eec7fbcf132799fe090001000000000000000003f6',
    '0x5b3240b6be3e7487d61cd1afdfc7fe4fa1d81e6400000000000000000000037b',
    '0x851523a36690bf267bbfec389c823072d82921a90002000000000000000001ed',
    '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f', // Euler Boosted USD
    '0x00c2a4be503869fa751c2dbcb7156cc970b5a8da000000000000000000000477', // Euler USDC / Euler FRAX
    '0x483006684f422a9448023b2382615c57c5ecf18f000000000000000000000488', // Euler Boosted USD/TUSD
    '0xb5e3de837f869b0248825e0175da73d4e8c3db6b000200000000000000000474', // Euler Boosted USD/rETH
    '0xa718042e5622099e5f0ace4e7122058ab39e1bbe000200000000000000000475', // Euler Boosted USD/TEMPLE
    '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473', // Euler Boosted USD/wstETH
    '0x133d241f225750d2c92948e464a5a80111920331000000000000000000000476', // Euler Boosted USD/dola
  ],
  Deprecated: {
    '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063': {
      joinsDisabled: true,
      stakingDisabled: true,
    },
    '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe': {
      joinsDisabled: true,
      stakingDisabled: true,
    },
    '0x8e85e97ed19c0fa13b2549309965291fbbc0048b0000000000000000000003ba': {
      newPool:
        '0x5aee1e99fe86960377de9f88689616916d5dcabe000000000000000000000467',
      joinsDisabled: true,
      stakingDisabled: true,
    },
    '0xe340ebfcaa544da8bb1ee9005f1a346d50ec422e000200000000000000000396': {
      newPool:
        '0x1ee442b5326009bb18f2f472d3e0061513d1a0ff000200000000000000000464',
      joinsDisabled: true,
      stakingDisabled: true,
    },
    '0x6a5ead5433a50472642cd268e584dafa5a394490000200000000000000000366': {
      newPool:
        '0x5f1f4e50ba51d723f12385a8a9606afc3a0555f5000200000000000000000465',
      joinsDisabled: true,
      stakingDisabled: true,
    },
    '0x798b112420ad6391a4129ac25ef59663a44c88bb0002000000000000000003f4': {
      newPool:
        '0x36be1e97ea98ab43b4debf92742517266f5731a3000200000000000000000466',
      joinsDisabled: true,
      stakingDisabled: true,
    },
    '0x0fd5663d4893ae0d579d580584806aadd2dd0b8b000200000000000000000367': {
      newPool:
        '0x9f9d900462492d4c21e9523ca95a7cd86142f298000200000000000000000462',
      joinsDisabled: true,
      stakingDisabled: true,
    },
    '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d': {
      newPool:
        '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016000000000000000000000502',
      description: 'deprecatedPool.migrateApril',
      joinsDisabled: true,
      stakingDisabled: true,
    },
    '0x4ce0bd7debf13434d3ae127430e9bd4291bfb61f00020000000000000000038b': {
      newPool:
        '0x639883476960a23b38579acfd7d71561a0f408cf000200000000000000000505',
      description: 'deprecatedPool.migrateApril',
      joinsDisabled: true,
      stakingDisabled: true,
    },
  },
  BrandedRedirect: {
    '0xad0e5e0778cac28f1ff459602b31351871b5754a0002000000000000000003ce':
      'xave',
  },
  ExitViaInternalBalance: [
    '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a', // bb-e-USDC
  ],
};

export default pools;
