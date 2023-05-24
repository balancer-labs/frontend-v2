import { BoostedProtocol } from '@/composables/useBoostedPool';
import { PoolWarning, Pools } from '@/types/pools';

const pools: Pools = {
  IdsMap: {
    xMatic: {
      v1: '0xc17636e36398602dd37bb5d1b3a9008c7629005f0002000000000000000004c4',
      v2: '0xb20fc01d21a50d2c734c4a1262b4404d41fa7bf000000000000000000000075c',
    },
    stMatic: {
      v1: '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366',
      v2: '0x8159462d255c1d24915cb51ec361f700174cd99400000000000000000000075d',
    },
    mai4: {
      mai4: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012',
      maiBbaUsd:
        '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e',
    },
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: false,
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
  ],
  Stable: {
    AllowList: [
      '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012', // polygon MAI/DAI/USDC/USDT
      '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc5600020000000000000000001e', // polygon WBTC/renBTC
      '0xf38cf113d2d4f60c36cbd95af2f48a9a0167045a00000000000000000000005b', // polygon,
      '0x0d34e5dd4d8f043557145598e4e2dc286b35fd4f000000000000000000000068', // tusd polygon
      '0x5028497af0c9a54ea8c6d42a054c0341b9fc616800020000000000000000007b', // dusd polygon
      '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366', // polygon staked matic
      '0xc31a37105b94ab4efca1954a14f059af11fcd9bb000000000000000000000455', // 4pool
      '0xc17636e36398602dd37bb5d1b3a9008c7629005f0002000000000000000004c4', // maticx metastable
      '0xb4b22bd6cdad0ab828be6f8a4086dfa54e9b373600020000000000000000058f', // Polygon tetuBAL-80BAL-20WETH
      '0xb797adfb7b268faeaa90cadbfed464c76ee599cd0002000000000000000005ba', // tetuBAL-80BAL-20WETH V2 (with short name)
      '0x0b8319061732b34cab22445fa83b81f950e4b7ed000000000000000000000709',
      '0x8159462d255c1d24915cb51ec361f700174cd99400000000000000000000075d',
      '0xb20fc01d21a50d2c734c4a1262b4404d41fa7bf000000000000000000000075c',
      '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e', // mai / bb-am-USD
      '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b', // bb-am-USD
      '0xa48d164f6eb0edc68bd03b56fa59e12f24499ad10000000000000000000007c4', // ageur stable
      '0x2d46979fd4c5f7a04f65111399cff3da2dab5bd9000000000000000000000807', // ankr stable
      '0x47401399b2eca91930c99126df20a11531f99465000000000000000000000840', // 3brl pool
      '0x76afd126f46ab4fdf2ece8b1a2c149f7cf95d9fb00000000000000000000085c', // 2cad
      '0x92bc61bd96f275ea5507a3e1e5fbf0bc69cc98dc00000000000000000000085d', // 2sgd
      '0x7d60a4cb5ca92e2da965637025122296ea6854f900000000000000000000085e', // 2eur par
      '0x94970a3f6a6aab442aefad68ff57abec0b9e3c0100000000000000000000085f', // 2eur eurt
      '0x7913e4c8d00044689ff5c7c12d2f1b4a2fde4994000000000000000000000860', // 2eur eure
      '0x7982c1b61abdc36942301ff2377d92b43784f120000000000000000000000861', // 2try
      '0x7f408fbcfc88917bff6a79b0ed0646fa090627de000000000000000000000863', // 2jpy
      '0x9e0a3a9b5a4e0b6dc299a56ef19002f23842be8d000000000000000000000862', // 2mxn
      '0x05f21bacc4fd8590d1eaca9830a64b66a733316c00000000000000000000087e', // tetuQI
      '0x02d2e2d7a89d6c5cb3681cfcb6f7dac02a55eda400000000000000000000088f', // csMatic
      '0xe22483774bd8611be2ad2f4194078dac9159f4ba0000000000000000000008f0', // 2BRL
      '0xbf29ef6e23af0ac5b6bf931c8b3f1080f5bc120600000000000000000000091f', // vQi stable
      '0x34a81e8956bf20b7448b31990a2c06f96830a6e4000200000000000000000a14', // wUSDR
      '0x5dee84ffa2dc27419ba7b3419d7146e53e4f7ded000200000000000000000a4e', // frxETH / WETH
      '0xd80ef9fabfdc3b52e17f74c383cf88ee2efbf0b6000000000000000000000a65', // tetu boosted
      '0x513cdee00251f39de280d9e5f771a6eafebcc88e000000000000000000000a6b', // 2eur/par
      '0x77e97d4908be63394bc5dff72c8c7bddf1699882000000000000000000000a6a', // augeur
      '0x3db543faf7a92052de7860c5c9debabee59ed5bd000000000000000000000a62', // 4usd
      '0x65fe9314be50890fb01457be076fafd05ff32b9a000000000000000000000a96', // wsteth/eth
      '0xb3d658d5b95bf04e2932370dd1ff976fe18dd66a000000000000000000000ace', // bb-t-USD (tetu managed boosted pool)
      '0x9a020bdc2faff5bd24c6acc2020d01ff9f2c627a000000000000000000000ae2', // overnight davos usd
      '0x19017f2919a5fb7eca1f0d142330644dc2045423000000000000000000000af9', // 2EUR (EURe)
      '0x02559a4fa0f3dae55820a65eb48b7a2fcd82f361000000000000000000000af8', // 2EUR (EURs)
      '0x36a0ee903841584f47e3c774b59e0cbfba46080f000000000000000000000b0a', // ankMatic/Matic
      '0x71bd10c2a590b5858f5576550c163976a48af906000000000000000000000b27', // bb-t-MATIC (tetu managed boosted pool)
      '0x511a0fb938bb4aee2a3a9d74f68e37bac8318fbf000000000000000000000b18', // rmatic/wmatic
      '0xe78b25c06db117fdf8f98583cdaaa6c92b79e917000000000000000000000b2b', // bb-a-matic / maticx
      '0x216690738aac4aa0c4770253ca26a28f0115c595000000000000000000000b2c', // stmatic / bb-a-matic
      '0xb371aa09f5a110ab69b39a84b5469d29f9b22b76000000000000000000000b37', // bb-a-usd aave v3
      '0x4a77ef015ddcd972fd9ba2c7d5d658689d090f1a000000000000000000000b38', // wseth/bb-a-eth
      '0xe19ed40a47f9b0cea4ca6d372df66107758913ec000000000000000000000b41', // 2brl
      '0xd00f9ca46ce0e4a63067c4657986f0167b0de1e5000000000000000000000b42', // bb-a-weth/frxeth
      '0x8fbd0f8e490735cfc3abf4f29cbddd5c3289b9a7000000000000000000000b5b', // frax/bb-am-usd
    ],
  },
  Investment: {
    AllowList: [''],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [
      '0x7104ad560c1d74aabc108bc51114db121b927a9d000200000000000000000b2a', // 80XES/20USDC
      '0x3efb91c4f9b103ee45885695c67794591916f34e000200000000000000000b43', // bb-am-usd/2brl
      '0x7f4f4942f2a14b6ab7b08b10ada1aacede4ee8d4000200000000000000000b44', // stmatci-bb-wmatic/bb-am-usd
      '0x8fd39252d683fdb60bddd4df4b53c9380b496d59000200000000000000000b45', // wsteth-bb-a-weth/bb-am-usd
      '0xfaf3bc722d34146be83a2aac40b43148a51a9126000200000000000000000b4c', // 50kacy/50weth
      '0xbadcdaf6212b0bacf45cc32447cb615f85fe6adf000100000000000000000b87', // 50weth/50wsteth/50nex
      '0xb1cc24df1d3d2c6cb798b1129ddaae9e29d437c0000100000000000000000b8d', // staking defi pool
    ],
  },
  Factories: {
    '0xa5bf2ddf098bb0ef6d120c98217dd6b141c74ee0': 'oracleWeightedPool',
    '0x8e9aa87e45e92bad84d5f8dd1bff34fb92637de9': 'weightedPool',
    '0xc66ba2b6595d3613ccab350c886ace23866ede24': 'stablePool',
    '0xdae7e32adc5d490a43ccba1f0c736033f2b4efca': 'stablePool', // Metastable
    '0x751a0bc0e3f75b38e01cf25bfce7ff36de1c87de': 'liquidityBootstrappingPool', // LBP
    '0x41b953164995c11c81da73d212ed8af25741b7ac': 'liquidityBootstrappingPool', // LBP (zero protocol fee)
    '0x0f7bb7ce7b6ed9366f9b6b910adefe72dc538193': 'managedPool', // Polygon Managed
    '0xc128a9954e6c874ea3d62ce62b468ba073093f25': 'boostedPool', // polygon stablephantom
    '0xca96c4f198d343e251b1a01f3eba061ef3da73c1': 'stablePool', // stable pool v2,
    '0x136fd06fa01ecf624c7f2b3cb15742c1339dc2c4': 'composableStablePool', // ComposableStable
    '0x0e39c3d9b2ec765efd9c5c70bb290b1fcd8536e3': 'weightedPool', // weighted pool v2
    '0x7bc6c0e73edaa66ef3f6e2f27b0ee8661834c6c9': 'composableStablePool', // ComposableStable V3
    '0x82e4cfaef85b1b6299935340c964c942280327f4': 'weightedPool', // weighted pool v3
    '0x627d759314d5c4007b461a74ebafa7ebc5dfed71': 'fx', // fx
    '0xfc8a407bba312ac761d8bfe04ce1201904842b76': 'weightedPool', // weighted pool v4
    '0x1a79a24db0f73e9087205287761fc9c5c305926b': 'gyroE',
  },
  Stakable: {
    VotingGaugePools: [
      '0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002',
      '0x03cd191f589d12b0582a99808cf19851e468e6b500010000000000000000000a',
      '0x186084ff790c65088ba694df11758fae4943ee9e000200000000000000000032',
      '0x614b5038611729ed49e0ded154d8a5d3af9d1d9e00010000000000000000001d',
      '0x7c9cf12d783821d5c63d8e9427af5c44bad92445000100000000000000000051',
      '0xc31a37105b94ab4efca1954a14f059af11fcd9bb000000000000000000000455',
      '0x0d34e5dd4d8f043557145598e4e2dc286b35fd4f000000000000000000000068',
      '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012',
      '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366',
      '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc5600020000000000000000001e',
      '0xcf354603a9aebd2ff9f33e1b04246d8ea204ae9500020000000000000000005a',
      '0x5a6ae1fd70d04ba4a279fc219dfabc53825cb01d00020000000000000000020e',
      '0xea4e073c8ac859f2994c07e627178719c8002dc00002000000000000000003dc',
      '0x10f21c9bd8128a29aa785ab2de0d044dcdd79436000200000000000000000059',
      '0x36128d5436d2d70cab39c9af9cce146c38554ff0000100000000000000000008',
      '0x805ca3ccc61cc231851dee2da6aabff0a7714aa7000200000000000000000361',
      '0xb204bf10bc3a5435017d3db247f56da601dfe08a0002000000000000000000fe',
      '0xdb1db6e248d7bb4175f6e5a382d0a03fe3dcc813000100000000000000000035',
      '0xce66904b68f1f070332cbc631de7ee98b650b499000100000000000000000009',
      '0xc17636e36398602dd37bb5d1b3a9008c7629005f0002000000000000000004c4',
      '0x2dbc9ab0160087ae59474fb7bed95b9e808fa6bc0001000000000000000003db',
      '0xb797adfb7b268faeaa90cadbfed464c76ee599cd0002000000000000000005ba',
      '0x8f9dd2064eb38e8e40f2ab67bde27c0e16ea9b080002000000000000000004ca',
      '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b',
      '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e',
      '0x8159462d255c1d24915cb51ec361f700174cd99400000000000000000000075d',
      '0xb20fc01d21a50d2c734c4a1262b4404d41fa7bf000000000000000000000075c',
      '0x8ac5fafe2e52e52f5352aec64b64ff8b305e1d4a0002000000000000000007ab',
      '0x05f21bacc4fd8590d1eaca9830a64b66a733316c00000000000000000000087e',
      '0x4973f591784d9c94052a6c3ebd553fcd37bb0e5500020000000000000000087f',
      '0xe2f706ef1f7240b803aae877c9c762644bb808d80002000000000000000008c2',
      '0x4a0b73f0d13ff6d43e304a174697e3d5cfd310a400020000000000000000091c',
      '0xe22483774bd8611be2ad2f4194078dac9159f4ba0000000000000000000008f0',
      '0xa48d164f6eb0edc68bd03b56fa59e12f24499ad10000000000000000000007c4',
      '0x7d60a4cb5ca92e2da965637025122296ea6854f900000000000000000000085e',
      '0x34a81e8956bf20b7448b31990a2c06f96830a6e4000200000000000000000a14',
      '0xf3312968c7d768c19107731100ece7d4780b47b2000200000000000000000a50',
      '0x5dee84ffa2dc27419ba7b3419d7146e53e4f7ded000200000000000000000a4e',
      '0xeab6455f8a99390b941a33bbdaf615abdf93455e000200000000000000000a66',
      '0x577f6076e558818a5df21ce4acde9a9623ec0b4c000200000000000000000a64',
      '0x77e97d4908be63394bc5dff72c8c7bddf1699882000000000000000000000a6a',
      '0x513cdee00251f39de280d9e5f771a6eafebcc88e000000000000000000000a6b',
      '0xd80ef9fabfdc3b52e17f74c383cf88ee2efbf0b6000000000000000000000a65',
      '0x65fe9314be50890fb01457be076fafd05ff32b9a000000000000000000000a96',
      '0xb3d658d5b95bf04e2932370dd1ff976fe18dd66a000000000000000000000ace',
      '0x216690738aac4aa0c4770253ca26a28f0115c595000000000000000000000b2c',
      '0xe78b25c06db117fdf8f98583cdaaa6c92b79e917000000000000000000000b2b',
      '0x36a0ee903841584f47e3c774b59e0cbfba46080f000000000000000000000b0a',
      '0x9f9f548354b7c66dc9a9f3373077d86aaaccf8f2000200000000000000000a4a',
      '0xb371aa09f5a110ab69b39a84b5469d29f9b22b76000000000000000000000b37',
      '0x4a77ef015ddcd972fd9ba2c7d5d658689d090f1a000000000000000000000b38',
      '0xe19ed40a47f9b0cea4ca6d372df66107758913ec000000000000000000000b41',
      '0x7f4f4942f2a14b6ab7b08b10ada1aacede4ee8d4000200000000000000000b44',
      '0xd00f9ca46ce0e4a63067c4657986f0167b0de1e5000000000000000000000b42',
      '0x8fd39252d683fdb60bddd4df4b53c9380b496d59000200000000000000000b45',
      '0x3efb91c4f9b103ee45885695c67794591916f34e000200000000000000000b43',
      '0x924ec7ed38080e40396c46f6206a6d77d0b9f72d00020000000000000000072a',
      '0x8fbd0f8e490735cfc3abf4f29cbddd5c3289b9a7000000000000000000000b5b',
    ],
    AllowList: [],
  },
  Metadata: {
    '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b': {
      name: 'Balancer Boosted Aave USD',
      hasIcon: true,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
    '0xb3d658d5b95bf04e2932370dd1ff976fe18dd66a000000000000000000000ace': {
      name: 'Balancer Boosted Tetu USD',
      hasIcon: true,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Tetu],
    },
    '0x71bd10c2a590b5858f5576550c163976a48af906000000000000000000000b27': {
      name: 'Balancer Boosted Tetu MATIC',
      hasIcon: true,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Tetu],
    },
    '0x216690738aac4aa0c4770253ca26a28f0115c595000000000000000000000b2c': {
      name: 'stMATIC/Boosted Aave v3 WMATIC',
      hasIcon: false,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
    '0xe78b25c06db117fdf8f98583cdaaa6c92b79e917000000000000000000000b2b': {
      name: 'maticX/Boosted Aave v3 WMATIC',
      hasIcon: false,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
    '0x4a77ef015ddcd972fd9ba2c7d5d658689d090f1a000000000000000000000b38': {
      name: 'wstETH/Boosted Aave v3 WETH',
      hasIcon: false,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
    '0xd00f9ca46ce0e4a63067c4657986f0167b0de1e5000000000000000000000b42': {
      name: 'frxETH/Boosted Aave v3 WETH',
      hasIcon: false,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
  },
  Deep: [
    '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b', // bb-am-USD (polygon)
    '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e', // miMATIC/bb-am-USD (polygon)
    '0xd80ef9fabfdc3b52e17f74c383cf88ee2efbf0b6000000000000000000000a65', // tetu/qi (polygon)
    '0xb3d658d5b95bf04e2932370dd1ff976fe18dd66a000000000000000000000ace', // bb-t-USD (tetu managed boosted pool)
    '0x71bd10c2a590b5858f5576550c163976a48af906000000000000000000000b27', // bb-t-MATIC (tetu managed boosted pool)
    '0xe78b25c06db117fdf8f98583cdaaa6c92b79e917000000000000000000000b2b', // bb-a-matic / maticx
    '0x216690738aac4aa0c4770253ca26a28f0115c595000000000000000000000b2c', // stmatic / bb-a-matic
    '0xb371aa09f5a110ab69b39a84b5469d29f9b22b76000000000000000000000b37', // bb-a-usd aave v3
    '0x4a77ef015ddcd972fd9ba2c7d5d658689d090f1a000000000000000000000b38', // wseth/bb-a-eth
    '0x3efb91c4f9b103ee45885695c67794591916f34e000200000000000000000b43', // bb-am-usd/2brl
    '0x7f4f4942f2a14b6ab7b08b10ada1aacede4ee8d4000200000000000000000b44', // stmatci-bb-wmatic/bb-am-usd
    '0x8fd39252d683fdb60bddd4df4b53c9380b496d59000200000000000000000b45', // wsteth-bb-a-weth/bb-am-usd
    '0xd00f9ca46ce0e4a63067c4657986f0167b0de1e5000000000000000000000b42', // frxETH / bb-a-weth
    '0x8fbd0f8e490735cfc3abf4f29cbddd5c3289b9a7000000000000000000000b5b', // frax / bb-am-usd
  ],
  BoostedApr: [
    '0x48e6b98ef6329f8f0a30ebb8c7c960330d648085', // bb-am-USD
    '0xb54b2125b711cd183edd3dd09433439d53961652', // miMATIC/bb-am-USD
  ],
  DisabledJoins: [
    '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc5600020000000000000000001e',
    '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e',
  ],
  Deprecated: {
    '0xc17636e36398602dd37bb5d1b3a9008c7629005f0002000000000000000004c4': {},
    '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366': {},
    '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012': {},
    '0x8159462d255c1d24915cb51ec361f700174cd99400000000000000000000075d': {
      newPool:
        '0x216690738aac4aa0c4770253ca26a28f0115c595000000000000000000000b2c',
      description: 'deprecatedPool.gaugeKilledReason',
    },
    '0xb20fc01d21a50d2c734c4a1262b4404d41fa7bf000000000000000000000075c': {
      newPool:
        '0xe78b25c06db117fdf8f98583cdaaa6c92b79e917000000000000000000000b2b',
      description: 'deprecatedPool.gaugeKilledReason',
    },
    '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b': {
      newPool:
        '0xb371aa09f5a110ab69b39a84b5469d29f9b22b76000000000000000000000b37',
      description: 'deprecatedPool.gaugeKilledReason',
    },
    '0x4a0b73f0d13ff6d43e304a174697e3d5cfd310a400020000000000000000091c': {
      newPool:
        '0x3efb91c4f9b103ee45885695c67794591916f34e000200000000000000000b43',
      description: 'deprecatedPool.gaugeKilledReason',
    },
  },
  GaugeMigration: {},
  BrandedRedirect: {
    '0x726e324c29a1e49309672b244bdc4ff62a270407000200000000000000000702':
      'xave',
    '0xf0ad209e2e969eaaa8c882aac71f02d8a047d5c2000200000000000000000b49':
      'gyro',
  },
  Issues: {
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
};

export default pools;
