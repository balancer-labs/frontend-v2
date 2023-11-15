import { PoolWarning, Pools } from '@/types/pools';
import { Network } from '../types';
import { CSP_ISSUE_POOL_IDS } from '@/constants/pool-lists/csp-issue';

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
    'Gyro2',
    'Gyro3',
    'GyroE',
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
      '0xac2cae8d2f78a4a8f92f20dbe74042cd0a8d5af3000000000000000000000be2', // stMATIC-bb-a-WMATIC
      '0x402cfdb7781fa85d52f425352661128250b79e12000000000000000000000be3', // MaticX-bb-a-WMATIC
      '0xb266ac3b7c98d7bcb28731dac0ef42dba1b276be000000000000000000000be4', // truMATIC/bb-a-WMATIC
      '0x9321e2250767d79bab5aa06daa8606a2b3b7b4c5000000000000000000000bf4', // bb-t-USD
      '0x03090a9811181a2afe830a3a0b467698ccf3a8b1000000000000000000000bf5', // bb-am-USD
      '0xab269164a10fab22bc87c39946da06c870b172d6000000000000000000000bfc', // wstETH-bb-a-WETH-BPT
      '0xf42ed61450458ee4620f5ef4f29adb25a6ef0fb6000000000000000000000bf8', // frxETH-bb-a-WETH
      '0xa8bf1c584519be0184311c48adbdc4c15cb2e8c1000000000000000000000bf6', // FRAX-bb-am-USD
      '0x42942cdec85078cf0e28e9cb5acd40cb53997ed6000000000000000000000bea', // BRX-jBRL
      '0x70ff0078d55ce9c1a0e668f35eb4400a4300122d000000000000000000000beb', // jCHF-vCHF
      '0x2645b13fd2c5295296e94a76280b968bdcbbdfed000000000000000000000c11', // DUSD/bbaUSD
      '0x7af62c1ebf97034b7542ccec13a2e79bbcf34380000000000000000000000c13', // tetubal/aurabal
      '0x89b753153678bc434c610b7e9182297cada8ff29000000000000000000000c21', // stMATIC-WMATIC-BPT
      '0xcd78a20c597e367a4e478a2411ceb790604d7c8f000000000000000000000c22', // maticX-WMATIC-BPT
      '0xdc31233e09f3bf5bfe5c10da2014677c23b6894c000000000000000000000c23', // wstETH-WETH-BPT
      '0xc474b8512664edc9e746ee5e786478aea15887d2000000000000000000000c25', // frxETH-WETH-BPT
      '0x8c89fb53d4d83173dd65b7a94569558ce393460f000000000000000000000c26', // FRAX-USDC-BPT
      '0x6da7f1c193ab6c4bd16eb14a6305bba8d25737ff000000000000000000000c29', // DUSD-USDC-BPT
      '0x6a6525d88de3c2434dc060f54eaec8fdfa12869c000000000000000000000c5e', // 2brl (BRLA)
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
      '0x9841438683c2efbfb28c94ec341544b94e4f6dd5000100000000000000000b8f', // WBTC/USDC/PAXG/WETH
      '0x945f337307ea76fdaa2590d083423850f64e247f000100000000000000000b98', // 27wstETH-7WMATIC-25WBTC-7USDC-18stMATIC-8WETH-8DAI
      '0xd7786ac3f9071ddacaf9a5b0bf443c58f8d6cf67000100000000000000000ba8', // 25MKR-25WETH-25DAI-25NEX
      '0xe93a1e6fb57d2e2be40377841a6477cfe1ef55c2000100000000000000000bbb', // AGA/AGAR/WSTETH/STMATIC/USDC
      '0x7f6a9b65cf1fc091b0e012c2908f0f711dfc95b5000200000000000000000bab', // 80mooMvxMVLP-20wUSDR
      '0xed35f28f837e96f81240ebb82e0e3f518c7e8a2f000100000000000000000bb5', // STARV2-SuperPoolV1
      '0xb49bd41ed56340674e2d2d3cfbfa9807e4e1fe27000100000000000000000bc2', // 25SUSHI-25WETH-25AAVE-25agEUR
      '0xca0f8eb1b81e1a69fac97f1c898e0938c768eb20000200000000000000000bc1', // 30WBTC-702BRL (BRZ)
      '0x2e1fd968a7185f52cfb933e51b5bb7f8f43e6105000100000000000000000bc5', // 10WBTC-10USDC-40WETH-40NEX
      '0x3c2f277eedac899f67116ad598664f0f91bac210000100000000000000000bcd', // 20AGA-20RNDR-20MANA-20DIMO-20AGAr
      '0xe833723690873780b967ad94a1218eb410319411000200000000000000000bc8', // wstETHUSDC
      '0x2814a9f16d7b5b5826df47f702f16279ccd799c8000200000000000000000bd1', // 50wMatic-50stMatic
      '0xa874e67a1b203819bce84f161eba4b4eb3f4359b000200000000000000000bcc', // 50USDC-50TRYB
      '0xa5a935833f6a5312715f182733eab088452335d7000100000000000000000bee', // 30WBTC-20stMATIC-bb-a-WMATIC
      '0xaaf737aeb1e5f1dc9429de4a639fe16c42fa1fe3000200000000000000000bf9', // 50fireEP-50FBX
      '0x6036b4d28685d28cc0891b5f63c3449543cb9821000200000000000000000c07', // 50usdc-50Dai
      '0xd2f3b9e67c69762dd1c88f1d3dadd1649a190761000200000000000000000bf7', // 2BRL-bbamUSD
      '0x788d7f70ce60a4c1a91e5d0a7ee63d636177c52a000200000000000000000c0b', // MATIC-UAHT
      '0x809c86c9d01ef7e44345a8110474c551359aac44000200000000000000000c0a', // UAHT-USDC
      '0x8670b3b82ddf5e1137c638969c3f747923268d77000200000000000000000c09', // UAHT-USDT
      '0x401721a526e82d5c652fac001b691bb053380ff5000200000000000000000c0e', // 80BETS/20stMATIC
      '0x74c7a222fb745628760b01ca99f51f9473377b95000200000000000000000c08', // 90MASQ-10wstETH
      '0x84fead5f6fc27ca9ba5b89ddc3d6035dce511013000200000000000000000c12', // 50miMATIC-50USDT
      '0x0e6d6ec825c9db806384da12eba4fb67a85769fd000200000000000000000c14', // 50ankrMATIC-50stMATIC
      '0xa88e4fae334a2237e300592ae7d52705cade95a0000200000000000000000c17', // 50WBTC-50MaticX
      '0xf7fd196c4606fb78178a85d1059f8224ddbccd2d000200000000000000000c18', // 50DAI-50miMATIC
      '0xacb0bd6f7206174c64cef5e05c4d7871ea888d33000100000000000000000c19', // 33WBTC-33WETH-33NEX
      '0x93a97f352c8be88d1468b8f7e0c24ce535be9eae000100000000000000000c1a', // farmDE
      '0x5250525a8fd922ec87b42c42b0ea71fd46565cb0000200000000000000000c1e', // xWARU
      '0x1cca7b11a3b36082c13e022d441b2da3a4d7206f000100000000000000000c1d', // 33rETH-33WETH-33NEX
      '0x16b98793f3e6a17d15931a2c9f98fe28d1c845a1000100000000000000000c1f', // 1stMATIC-bb-a-WMATIC-BPT-0QI-50STARD-0fireEP-1bb-am-USD-1vQi-47STARV2
      '0xc976855d2201298b8b35ad523dfb4cbd67ad6838000200000000000000000c20', // 50WETH-50NEX
      '0x513f69b2e2a6fa0347529e6178002213cf60ce3d000200000000000000000c24', // 50WETH-50AAVE
      '0xec7b8286e906fd74f14d0a0bdf0d362e0d1a3f9c000100000000000000000c1c', // 45WETH-45WMATIC-10TSB
      '0x0dd7398a4366efad04bad15ad0d6f3efd1682cd0000200000000000000000c28', // 50SUSHI-50USDT
      '0x2fb9cc718d45867688da816c35858a436c1b62e4000200000000000000000c2d', // 50STARD-50STARV2
      '0x78e0f9e91fe77058d13a7162b72a5d5e5f2bbd23000200000000000000000c2f', // 50STARD-50wUSDR
      '0x6f662a90bc9c48a2acb0958df49c71f35d7bf248000200000000000000000c30', // 50tetuQi-50STARV2
      '0xc75daa752fb3f160b4c96364f2ee12e3434df655000200000000000000000c31', // 50wstETH-50bIB01
      '0xfff3a0c1a7d3d3d4531c2c455954dea79fa94cbf000200000000000000000c38', // 20RBW-80UNIM
      '0x7702a652b86d851d3582067f1f4aae5ef7854dee000200000000000000000c3f', // 85TQi-15Qi-5%-SDAO
      '0x1f769840cb572b853ef3b0df1a566d74dbc1b8de000100000000000000000c3e', // 70tetuQi-10QI-20vQi
      '0x040211b2492d7540ebb6e81ec84b116684fed129000200000000000000000c3d', // 85tetuQi-15QI
      '0x34299dd7f2971ce9673a6c156b9a5a49844492d0000200000000000000000c40', // 50DE-50DAI
      '0x4830eac1aaae42d62d1e596237997158e4beea0f000200000000000000000c42', // 50DE-50TBY
      '0xe93f9dd10b0ba38831cba4d5a9d092e22db130ec000200000000000000000c44', // BPT
      '0x8a352ffbc8c8bc87d7e33255a34f2cf5543e6416000200000000000000000c46', // 80CNT(NEW)-20WETH
      '0x3078fcdfe3a34feebcb13bbfc74a02790d0ad1cd000200000000000000000c4d', // WSD
      '0x80bd7a851d9ca7f2b708aa3d395c64be0bb049b7000200000000000000000c4b', // 1WMATIC-99AVA
      '0xe4f47361480bc3b37dc2d2842f97dee2da17f31b000200000000000000000c51', // AFSD
      '0x1d17bfefbf304b04939519b46c4c75fcf4889623000100000000000000000c52', // 15WMATIC-10BAL-15SAND-45GROSH-15TEL
      '0xafd8a58780f08fdac15c8c36cae7b1d6fa3f7616000100000000000000000c54', // 25WBTC-25SOIL-25WETH-25NEX
      '0x54c1cd3db3d6eeb1f041d02140b80639068a636c000100000000000000000c55', // 25WMATIC-25WBTC-25WETH-25NEX
      '0x6e9e1395534cc43b7295ae412e0293b48844dc0e000200000000000000000c56', // 1USDC-99SOL
      '0x530c6845f4acebc324e1f549589b4944e7b17079000100000000000000000c5a', // 25WBTC-25WETH-25SOL-25NEX
      '0x6ad06841ce54b8498d7159f50b22ecb05ea46b7c000200000000000000000c59', // 50fireFBX-50fireEP
      '0x9c362d37a40d0cd3cac9ffc2427eb5239dd4b194000100000000000000000c5c', // 33USDC-33WETH-33DAI
      '0x9627205fc978b118c2d10a8b7761974a26582d77000200000000000000000c5b', // 70WBTC-30USDC
      '0x51fc57e13a7837d4890f1bcffbad285b7d00f7c1000200000000000000000c5f', // 80DE-20WBTC
      '0x3234df8de6108482c3bd24eadcb4ed0f777b113e000200000000000000000c60', // 80DE-20WETH
      '0x1b82799aefc5049ea30a88b89171702b3cacfa74000200000000000000000c65', // 5020WETH-80BAL-50tetuBAL
      '0x02db2baa9a2b90b931416703ee83a11943d5c571000200000000000000000c66', // 50wstETH-50MaticX
      '0x7666f4daca9f9243a796aa429a7f43c77060470a000200000000000000000c68', // 10USDC-90SPHERE
      '0xaecbdbeb6f4c1e4ee5b65e397249a49691b538fc000100000000000000000c6a', // 20USDC-50PAXG-10DAI-20USDT
      '0x9105c470449921fb7061efceb318e30662d14621000100000000000000000c6c', // MATIC-ETH-BTC-MAI/StarSeeds-Protocol
      '0x559abdfcde5d1970dc1c98992742e0beb7441c00000100000000000000000c6b', // TetuQI-VQi-Matic/StarSeeds-Protocol
      '0xe603104baf3743ce615cce88f08f229f9620c924000200000000000000000c6d', // STARV2-StarSeeds-Protocol
      '0xafb5d11629f3fe66ff2d2595180c1ed83a5e7b55000100000000000000000c6f', // money-machine-v1-starseeds-protocol
      '0x1bc9a8f8855ca78896eee5d1d573fb5cbca2ce75000100000000000000000c6e', // LP-Test-StarSeeds-Protocol
      '0x4a818e84e67866484abbf0003da1bed9cc2bbafc000100000000000000000c71', // TetuBal-BalwETH-Matic-StarSeeds_Protocol
      '0x11ff73fa7ffa63d3de1d2e1afb77894274259d88000200000000000000000c75', // STARV2-Link/ArbitrageLP/StarSeedsProtocol
      '0x17abb6ffe47e4ab120aa57de5e1c7fc6fe307633000200000000000000000c74', // STARV2-wstETH/ArbitrageLP/StarSeeds_Protocol
      '0xb56ff8104cf3e42065b1613b4549aab12fa91646000200000000000000000c73', // STARV2-WBTC-arbitrage/StarSeeds-Protocol
      '0x2e7f4db55bf11e0d8c25b0007728dfb2d138f904000100000000000000000c72', // STARV2-APR-FARM-V1-StarSeeds_Protocol
      '0xd6e5704d4b43d79f1ea597a9c36105baf2dea993000100000000000000000c70', // Big-Three-V2-StarSeeds-Protocol
      '0xf8c6f6223ee9d7fa55a508ef96f951f92f412612000200000000000000000c77', // 20WMATIC-80EAC
      '0xa5b7c3e5fdd26bb99a50a5dcb32b16bfa5060595000200000000000000000c7a', // JARVIS-ETH 8020
      '0x99d32658012027ff500a1446c35a8e5419ba45c0000100000000000000000c7e', // 33wstETH-33tetuBAL-BALWETH-33STARV2
      '0xdc8787134cf477f1e70c5b0ae402e57ea198dbd0000200000000000000000c7d', // STARV2-Tetu/Arbitrage/StarSeeds_Protocol
      '0xd04ad53b5d81bd9d129aaef7731eee1843c8dae0000200000000000000000c7b', // STARV2-MAI/Arbitrage/StarSeeds_Protocol
      '0x2dc47abce2a3d5644139c663493c2bb825d2b103000200000000000000000c84', // STARV3-LINK/65-35/StarSeeds_Protocol
      '0x432d58fe7a40c5cf159c229ee5874f1f0ce44c91000100000000000000000c89', // STARV3/FeeV2/StarSeeds_Protocol
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
    '0xe2fa4e1d17725e72dcdafe943ecf45df4b9e285b': 'composableStablePool', // ComposableStable V5
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
      '0xb266ac3b7c98d7bcb28731dac0ef42dba1b276be000000000000000000000be4',
      '0xac2cae8d2f78a4a8f92f20dbe74042cd0a8d5af3000000000000000000000be2',
      '0x402cfdb7781fa85d52f425352661128250b79e12000000000000000000000be3',
      '0x9321e2250767d79bab5aa06daa8606a2b3b7b4c5000000000000000000000bf4',
      '0x03090a9811181a2afe830a3a0b467698ccf3a8b1000000000000000000000bf5',
      '0xf42ed61450458ee4620f5ef4f29adb25a6ef0fb6000000000000000000000bf8',
      '0xd2f3b9e67c69762dd1c88f1d3dadd1649a190761000200000000000000000bf7',
      '0xa8bf1c584519be0184311c48adbdc4c15cb2e8c1000000000000000000000bf6',
      '0xab269164a10fab22bc87c39946da06c870b172d6000000000000000000000bfc',
      '0x2645b13fd2c5295296e94a76280b968bdcbbdfed000000000000000000000c11',
      '0x42942cdec85078cf0e28e9cb5acd40cb53997ed6000000000000000000000bea',
      '0x89b753153678bc434c610b7e9182297cada8ff29000000000000000000000c21',
      '0xcd78a20c597e367a4e478a2411ceb790604d7c8f000000000000000000000c22',
      '0xdc31233e09f3bf5bfe5c10da2014677c23b6894c000000000000000000000c23',
      '0xc474b8512664edc9e746ee5e786478aea15887d2000000000000000000000c25',
      '0x8c89fb53d4d83173dd65b7a94569558ce393460f000000000000000000000c26',
      '0x6da7f1c193ab6c4bd16eb14a6305bba8d25737ff000000000000000000000c29',
      '0x70ff0078d55ce9c1a0e668f35eb4400a4300122d000000000000000000000beb',
      '0x7af62c1ebf97034b7542ccec13a2e79bbcf34380000000000000000000000c13',
    ],
    AllowList: [],
  },
  Metadata: {},
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
    '0xca0f8eb1b81e1a69fac97f1c898e0938c768eb20000200000000000000000bc1', // 30WBTC-702BRL (BRZ)
    '0xac2cae8d2f78a4a8f92f20dbe74042cd0a8d5af3000000000000000000000be2', // stMATIC-bb-a-WMATIC
    '0x402cfdb7781fa85d52f425352661128250b79e12000000000000000000000be3', // MaticX-bb-a-WMATIC
    '0xb266ac3b7c98d7bcb28731dac0ef42dba1b276be000000000000000000000be4', // truMATIC/bb-a-WMATIC
    '0x9321e2250767d79bab5aa06daa8606a2b3b7b4c5000000000000000000000bf4', // bb-t-USD
    '0x03090a9811181a2afe830a3a0b467698ccf3a8b1000000000000000000000bf5', // bb-am-USD
    '0xab269164a10fab22bc87c39946da06c870b172d6000000000000000000000bfc', // wstETH-bb-a-WETH-BPT
    '0xf42ed61450458ee4620f5ef4f29adb25a6ef0fb6000000000000000000000bf8', // frxETH-bb-a-WETH
    '0xa8bf1c584519be0184311c48adbdc4c15cb2e8c1000000000000000000000bf6', // FRAX-bb-am-USD
    '0xd2f3b9e67c69762dd1c88f1d3dadd1649a190761000200000000000000000bf7', // 2BRL-bbamUSD
    '0x2645b13fd2c5295296e94a76280b968bdcbbdfed000000000000000000000c11', // DUSD/bbaUSD
  ],
  BoostedApr: [
    '0x48e6b98ef6329f8f0a30ebb8c7c960330d648085', // bb-am-USD
    '0xb54b2125b711cd183edd3dd09433439d53961652', // miMATIC/bb-am-USD
  ],
  DisabledJoins: [
    '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc5600020000000000000000001e',
    '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e',
    ...CSP_ISSUE_POOL_IDS[Network.POLYGON],
  ],
  Deprecated: {
    '0xc17636e36398602dd37bb5d1b3a9008c7629005f0002000000000000000004c4': {},
    '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366': {},
    '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012': {},
    '0xac2cae8d2f78a4a8f92f20dbe74042cd0a8d5af3000000000000000000000be2': {
      newPool:
        '0x89b753153678bc434c610b7e9182297cada8ff29000000000000000000000c21',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0x402cfdb7781fa85d52f425352661128250b79e12000000000000000000000be3': {
      newPool:
        '0xcd78a20c597e367a4e478a2411ceb790604d7c8f000000000000000000000c22',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0xab269164a10fab22bc87c39946da06c870b172d6000000000000000000000bfc': {
      newPool:
        '0xdc31233e09f3bf5bfe5c10da2014677c23b6894c000000000000000000000c23',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0xf42ed61450458ee4620f5ef4f29adb25a6ef0fb6000000000000000000000bf8': {
      newPool:
        '0xc474b8512664edc9e746ee5e786478aea15887d2000000000000000000000c25',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0xa8bf1c584519be0184311c48adbdc4c15cb2e8c1000000000000000000000bf6': {
      newPool:
        '0x8c89fb53d4d83173dd65b7a94569558ce393460f000000000000000000000c26',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0x2645b13fd2c5295296e94a76280b968bdcbbdfed000000000000000000000c11': {
      newPool:
        '0x6da7f1c193ab6c4bd16eb14a6305bba8d25737ff000000000000000000000c29 ',
      description: 'deprecatedPool.hasNewPool.description',
    },
  },
  GaugeMigration: {},
  BrandedRedirect: {
    FX: 'xave',
    Gyro2: 'gyro',
    Gyro3: 'gyro',
    GyroE: 'gyro',
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
    [PoolWarning.CspPoolVulnWarning]: CSP_ISSUE_POOL_IDS[Network.POLYGON],
  },
};

export default pools;
