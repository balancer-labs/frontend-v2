import { Pools } from '@/types/pools';

const pools: Pools = {
  IdsMap: {},
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
  ],
  Stable: {
    AllowList: [
      '0x6fbfcf88db1aada31f34215b2a1df7fafb4883e900000000000000000000000c', // stabal3
      '0xe58ca65f418d4121d6c70d4c133e60cf6fda363c000000000000000000000013', // usdc/axlusd
      '0x8c2062ec8d477366c749982e3703371a7ae1e66500000000000000000000001f', // rETH/WETH
      '0xfb4c2e6e6e27b5b4a07a36360c89ede29bb3c9b6000000000000000000000026', // cbeth/weth
      '0xc771c1a5905420daec317b154eb13e4198ba97d0000000000000000000000023', // reth/weth
      '0x0c659734f1eef9c63b7ebdf78a164cdd745586db000000000000000000000046', // USDC/USDbC/axlUSDC
      '0x58f2110b61f97fd6b9200b038d92f17c722a5a3300000000000000000000004f', // axlBAL/BAL
      '0x30722f57d56037caa2c38abd1f5e2955814875e9000000000000000000000087', // axlETH/ETH
      '0x0c316e55f987ef2d467f18852301492bca7e8a690000000000000000000000bc', // USDbC/tUSDbC
      '0x15d9d108437b17d1fa70392f9ed086306229ec910000000000000000000000bf', // SWEEP-USDC-BPT
      '0x98bedb6a3c0b6feebbe662e6419481a6877d9681000000000000000000000104', // sfrxETH/cbETH
      '0xab99a3e856deb448ed99713dfce62f937e2d4d74000000000000000000000118', // weETH/wETH
    ],
  },
  Investment: {
    AllowList: [],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [
      '0xcde67b70e8144d7d2772de59845b3a67266c2ca7000200000000000000000009', // BAL/DAI
      '0x868f0efc81a6c1df16298dcc82f7926b9099946b00020000000000000000000b', // Bald/weth
      '0x2db50a0e0310723ef0c2a165cb9a9f80d772ba2f00020000000000000000000d', // Weth/stabal3
      '0x2423d6e341270bcd5add138bc3d4058857d5455f00020000000000000000000e', // WETH/DAI
      '0x0be4dc963db6ca066ff147069b9c437da683608b00020000000000000000000f', // OGRE/WETH
      '0xa892be6ee527f4fb8b3b60486a53c0627cb1d27e000200000000000000000014', // LINU/WETH
      '0x012e776cc3ed4c5adea3eda8677e82343e4de396000200000000000000000015', // 50WETH/50USDbC
      '0x52e281318fed4efffb8e46c0847a8f9b71a461a8000200000000000000000018', // 50BTC-50WETH
      '0x036d68e4e0005da4ef1c9ebd53b948d2c083495e00020000000000000000001a', // 50BTC-50USD
      '0xe40cbccba664c7b1a953827c062f5070b78de86800020000000000000000001b', // WETH-GOLD
      '0xfab10dd71e11d0ad403cc31418b45d816f2f988200020000000000000000001d', // well-eth
      '0xc69793563a8f0a2c5b25bcfb8661de50da8eae1000020000000000000000001c', // stg-usdc
      '0x17e7d59bb209a3215ccc25fffef7161498b7c10d000200000000000000000020', // weth-gold 99
      '0x3f3e72417d016687f02eb369025f33b60db585cd000200000000000000000022', // 50WETH/50OGRE
      '0xa30ad556d10c829a67f41f60d41afdd4efa9286c000100000000000000000029', // base friend pool
      '0xe94dfd524414220b3f5d321a20b6f9dbc1d53a1f00020000000000000000002d', // sis-weth
      '0xc8dd61ff747c4bf93995a8086a8562f136059dc300020000000000000000002e', // one-cbeth
      '0xfa4ac3ecfece20769f8b5d9b6dfa5b7ed6569de2000200000000000000000033', // weth-mz
      '0x65e8e75899f683c8e2e73c77d6c5c63075f296cd00020000000000000000002b', // sus-weth
      '0x109fb663fbe47bcef8cf1d74759ebb869e390105000200000000000000000037', // 1WETH-99USDbC
      '0x7bd499100daee002c8df900d831a3dc0c2c91040000200000000000000000039', // 85BPT-stabal3-15ONE
      '0x18f150c43598cd822d39711c55bd90407a8b8ad700020000000000000000003b', // 90BPT-50STABAL3-50WETH-10ONE
      '0xce1edbf534b0d787cea315ecdc27bf857b73579300020000000000000000003c', // 50BPT-stabal3-50axlUSDC
      '0x775e01bde8c3f3de0f8ed1fd1331c32580417f5700020000000000000000003f', // 50DAI-50axlUSDC
      '0x35f823b87ea3c1918992f958b7764b4d37c7329400020000000000000000003e', // 50WETH-50USDbC
      '0x07d72005b9e2b0e4d9f2ee903de59a43439e15e6000200000000000000000044', // 50WETH-50cbXEN
      '0xb1b1155337d19eb0ef9c75aa88aeb4e531440508000200000000000000000042', // 50WETH-50Gekko
      '0x45754a260273183dd91f795b7feaa43c37eb148d000100000000000000000045', // 33WETH-33DAI-33BAL
      '0xb328b50f1f7d97ee8ea391ab5096dd7657555f49000100000000000000000048', // GOLD/BAL/USDC
      '0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047', // 50GOLD/25WETH/25USDC
      '0x4387119e8341ff2ba632b9f81649d865cf759276000200000000000000000049', // 50USDbC-50axlUSDC
      '0xb282f87938525296d4e6471af9fa15a669851c3200020000000000000000004a', // 50USDbC-50axlUSDC
      '0x6f1b5e5bd3e5cc88e835c7122b90588e3cf894cd00020000000000000000004c', // 50WETH-50USDbC
      '0xa0aa5caffc32a2fe3bdbebaf37e2c75d0dc6d1ab00020000000000000000004b', // 50BAL-50DAI
      '0x18423174a94aa1856ed43b76214fa5a94534ceb000020000000000000000004e', // 50WETH-50USDbC
      '0x096fa90589c05a12b7c4356f9c908c650894e1e0000200000000000000000051', // 50WETH-50USDC
      '0xbbb493817418c769e3799ea9ad2228a38c0950b7000200000000000000000054', // 50WETH-50WELL
      '0xc80289149774aeab633a7a2c28d673c784a30ba1000200000000000000000055', // 50BAL-50USDbC
      '0x2ef2f21f3ccdc6de4147637275905df9b50dd094000200000000000000000057', // 50WETH-50DAI
      '0x668c6196e539391e0020a3dee3ac99b74984bcce000200000000000000000059', // 50BAL-50WETH
      '0x9544eb53f98098c6a885a7a4cd014d7a4a03aa6300020000000000000000005c', // 80GOLD-20WETH
      '0x6ffcdc1eba9e6fb98cb09ac27fd65bc01a9d34ef00020000000000000000005d', // 50WETH-50USDbC
      '0x4aed3e44a664228f016b62a186bc6893bd7e323e000200000000000000000060', // 50BAL-50BPT-stabal3
      '0x2f5506155e08ca0766d963d5cb51137b8f8efb5100010000000000000000005f', // 33BALD-33WETH-33GOLD
      '0x6b0db5b8477b3c36de5ddd790482e264eb174d4a000200000000000000000061', // 50LINU-50OGRE
      '0x143ab71e47361d0a65499ca2e12b1edd10f2e540000200000000000000000062', // 50WETH-50USDC
      '0x9599c892adee7230b259bb4c9cff7920da7c9279000200000000000000000064', // 50BAL-50WETH
      '0x78380eff80f1381b29702c0f87da10bd7d7cec97000200000000000000000066', // 50WETH-50USDbC
      '0xd6d41238e56ee3427c6d76e38ebf9f331408dd5b000200000000000000000067', // 50BAL-50USDC
      '0xb301f96097f1ab4f189f04a4662c751c822ef38f00020000000000000000006d', // 50DAI-50USDbC
      '0x26987d07edb3bbff6c20642aa63c2fddf29aecab00020000000000000000006c', // 50WETH-50USDC
      '0x4131cf825cc960a6ccca186a2fda16ae2d3b2e0b00020000000000000000006a', // 50WETH-50axlUSDC
      '0x22dfd49958ff8a2b60d3006360a41963d403024a000200000000000000000069', // 60WETH-40USDbC
      '0x8b7baa97593af52a6c81fbb1539ea920804380d8000200000000000000000068', // 1WETH-99USDbC
      '0xe431ed76d1ad5b262230037ea16463c6398591ad00020000000000000000006e', // 50USDC-50USDbC
      '0xdad0cf7940078ec8537df85e9499fb235d32c3d100020000000000000000006f', // 50WETH-50USDC
      '0x4c271a843daa3a681bcbfb3cb44942a7b98f3edb000200000000000000000070', // 50USDbC-50axlUSDC
      '0xcc4ccab360dc7267117f20ecd929a7437eadc004000200000000000000000071', // 50WETH-50USDbC
      '0x0631a3b78f3d87eca5e20bf15f6a2fba1ed38916000200000000000000000072', // 50USDbC-50axlUSDC
      '0xd9c664b89e335f801e887a66f02a63ac1afce1be000200000000000000000081', // 50USDbC-50axlUSDC
      '0xf912fe5769800bb19c66706cb7f61c97c7122f22000200000000000000000082', // 50WETH-50axlUSDC
      '0xaf4e8c5c8c4e185e1160e291fe17c61b51f7dc52000200000000000000000078', // 50USDbC-50axlUSDC
      '0xf0b2d22311214b40668c386fd736bad338b1a9db00020000000000000000007f', // 50USDC-50USDbC
      '0x8f68c9afe436d0ac503084f20b771ffc64930345000200000000000000000077', // 50WETH-50USDbC
      '0xadfa872b5107022979fe972e25c6dfcf3f074b4e000200000000000000000079', // 50WETH-50USDbC
      '0x7fc88c8a4900b534bcaa2de461578d5403d4f3de00020000000000000000007d', // 50WETH-50USDbC
      '0x348836989bce46086433437cec59d89f9e59eea9000200000000000000000076', // 50WETH-50axlUSDC
      '0xdd6253dc8052fdecd9f425fd6173a244fd343e5d000200000000000000000083', // 50cbETH-50axlUSDC
      '0x69e82e733711039af7f6f922b97fd0c3213708ea000200000000000000000085', // 50WETH-50USDbC
      '0xad9a6c03750f30204fcbdbd5bebdbb80a66129ff000200000000000000000084', // 50USDbC-50axlUSDC
      '0x0eff7b6a3003022062bcf3373523fe2754a42d0d000200000000000000000088', // 50USDbC-50axlUSDC
      '0x5c24ab24f33a33d4e25fd51c6f4ef8170c718b1c00020000000000000000008d', // 50USDC-50axlUSDC
      '0x002a1eb0804504dd5162757bc309fd34784ae7e000020000000000000000008e', // 50WETH-50USDbC
      '0xb79e50c4c4ade28df004cd552ecf8435db56162d000200000000000000000091', // 50BAL-50axlUSDC
      '0x4128274638b2abe5212e0446ec96f34b615f30ec000200000000000000000092', // 50BALD-50USDbC
      '0xb88bb8ad8489f57d044c0ff9aab490f9e8247205000200000000000000000093', // 50WETH-50USDC
      '0x6b1baa0a046c9ebb7da8668b66e9282a896e1edb000200000000000000000094', // 50WETH-50USDbC
      '0xfa3c16d8a8c7a956a5c17d8f1daf7bf6abcaaa39000200000000000000000095', // 50USDC-50USDbC
      '0x1a1ea93743c29b68ac412bc28ad0bd22de4b4c5c000100000000000000000097', // 33BAL-33USDbC-33axlUSDC
      '0x37304cc49ebf4e8da130a0ab9e0f71b9e624bc4d00020000000000000000009e', // 50WETH-50USDbC
      '0xb1cde90a002bcbe674764947cd0d99e6d83786a500020000000000000000009d', // 50USDbC-50axlUSDC
      '0x9a5b02e917447e599d5fb1f74f7f131d45da02dc00020000000000000000009f', // 50WETH-50DAI
      '0x632a4fa910c3fadbe0720767963d2e909410f8110002000000000000000000a2', // 50WETH-50USDbC
      '0x08ecc11058efd2acfd8d351ecda17bf46b5dea350002000000000000000000a9', // 50WETH-50USDbC
      '0xa8ddab0f23e5be61e6857af78fcf61d1c0ea00590002000000000000000000ac', // 50USDbC-50STG
      '0x4d8c33e4acaa3877511e5af6c36334dfe236e5c00001000000000000000000ad', // 33BAL-33USDC-33USDbC
      '0x990a0f03c3ee397cafda61cad277de18280751fd0002000000000000000000b6', // 50WETH-50TAG
      '0x031e96f4cebfef8829c2dabf3e45bc4886b771860002000000000000000000b7', // 50WETH-50USDbC
      '0xee94d8df3ecf9158d1cd3d752c7b61fc4fd46b120002000000000000000000b8', // 50WETH-50USDbC
      '0xa1d5264a2d3e2652756993c29729e092ca91d0d40001000000000000000000b9', // 40cbETH-40WETH-20rETH
      '0x06eaace423af9a6bf6268d0421ac0e0b94c879460002000000000000000000ba', // 20WETH-80TAG
      '0x87646430235a2b1ab9366f424750e778991047a10002000000000000000000bd', // 50DAI-50USDC
      '0x64fcbd882d7de9d4dd1fa670c3f1ea15f324baf40002000000000000000000be', // 50DAI-50USDbC
      '0x9d884e09e0ddf816a1b3f31ccd94a0319793b11b0001000000000000000000c1', // 33BAL-33WETH-33USDC
      '0xfb7c21f274139011dab38898ba66401d111144350002000000000000000000c3', // 50DAI-50USDC
      '0xc876db69ab7e24a3364017f0b67152c85003a6240002000000000000000000c4', // 50cbETH-50WETH
      '0x6aefce8ff88dcc04e201964e9312cdbe446578710002000000000000000000c5', // 50USDC-50USDbC
      '0x9bf1597a7308cb6f15b9379b7273f19ec88eec0d0002000000000000000000c6', // 50USDbC-50STG
      '0x317ab8cae8bbdae8df2a5f325a3ed80aa0da49880001000000000000000000cd', // 33COIN-33GOLD-33WETH
      '0x2650d8d8167faa125a9156d533703a2af5d9f4e10001000000000000000000ce', // 8AURA-8BAL-33GOLD-50COIN
      '0x43037cb21cf259efa87febb844cc1179c13f8efc0002000000000000000000d1', // 30USDbC-70WELL
      '0xdd2a31355a7a478fe43233b41b978b5286cdb7c90002000000000000000000d2', // 50WETH-50USDbC
      '0x32b494056a118c1d43ad823fa650557a5a2870ab0002000000000000000000d5', // 50BAL-50WETH
      '0xb8773cd299b5e1319f6d06fe76f6d94e7b17c4ab0002000000000000000000d6', // 50cbETH-50WETH
      '0x09a1b02b88addd42885888d8c39a64e51912b4fd0002000000000000000000d7', // 50SIS-50USDbC
      '0x44b3dcadda609590ed0e207852f3bf99b9eb37520002000000000000000000d9', // 50USDbC-50axlUSDC
      '0xbc342f8e096a4205f8d66945fc67ed1f437e08660002000000000000000000db', // 50WETH-50rETH
      '0x8867eb449ce97a404e427779c00e723cb11f8ce20002000000000000000000de', // 50BAL-50USDC
      '0x83650f1e76901a85d34be8d3c8c4adfe7c2a55f40001000000000000000000df', // 33BAL-33USDbC-33axlUSDC
      '0x1607aa77f703deedfd4b8e146d3c7fcb5bee4a9c0002000000000000000000dd', // 50USDC-50axlUSDC
      '0x1d2aef019a6b1a467ee53da801934ea5a283d5ed0001000000000000000000dc', // 33BAL-33USDC-33axlUSDC
      '0xe2dfaa9ce690e0a4197f6367a376c11482b95dd20002000000000000000000e0', // 50USDbC-50WELL
      '0x3acea8a239161bc68e956fcea6b2fd0ad5da6fca0002000000000000000000e5', // 50BAL-50DAI
      '0x03e17ea4133bf5c87d98d663d6299baddeff9eaf0002000000000000000000e4', // 30BAL-70WETH
      '0x0cc31651a39ae32c8c2147fa01c194036ac52df20002000000000000000000e9', // 50BAL-50USDC
      '0x30e8ddebf3426234073deaff676e4ddce156ba3f0002000000000000000000e6', // 50BALD-50USDC
      '0x26f2e20407a4588f700b6c2d550b29e73809759f0002000000000000000000e7', // 50BAL-50USDbC
      '0x1ab96d1b0a5e6f7781bd88e07a54a09a099f6e750002000000000000000000e8', // 50BAL-50USDbC
      '0x8bed8839f2f1ea612efc084ed483f7653a2921c40002000000000000000000ea', // 50DAI-50USDbC
      '0x88a777583a2f3aa3e6c2de1d45f4a86f922acd040002000000000000000000ee', // 50WETH-50USDbC
      '0x53d3149e331d94105b31b838bea94c8c735862ec0002000000000000000000ed', // 50WETH-50USDbC
      '0x27d6b39bbc5fdf3a1ae8c55a8ee499ad7234377b0002000000000000000000eb', // 50BAL-50USDbC
      '0x7308e18fccb00b11454f08140e7efad8161a6a2c0002000000000000000000ef', // 50WETH-50USDbC
      '0x77bdaece95a25f28e1598f4126f8257ae2b8b09f0002000000000000000000ec', // 50WETH-50USDbC
      '0xc3f181b99d72697c8fa28bb7116d8eb3b1e617cf0002000000000000000000f1', // 50USDC-50axlUSDC
      '0x58916cf9bab42b062277910c6a51642cd60798e70002000000000000000000f0', // 50cbETH-50STG
      '0x79776bc02521019e91302d683c3227c21a406c4c0002000000000000000000f2', // 50USDbC-50axlUSDC
      '0x7564adbf90fd823a74e5b4821729b679cecae23d0002000000000000000000f4', // 50BALD-50DAI
      '0x074eb0780b768e0084cd6e0d5d8934c2365a59e10002000000000000000000f6', // 50USDbC-50axlUSDC
      '0xa943b51909943569ff85ccbbc25a4c9fb2d247aa0002000000000000000000f9', // 50LINU-50USDbC
      '0x40f105abc925428615876df16fad59b786f858700002000000000000000000fa', // 50USDbC-50axlUSDC
      '0xaac1a23e7910efa801c6f1ff94648480ab0325b90002000000000000000000fc', // 50DAI-50USDC
      '0xad6416af0a880a5592e607bd0bb7192d177445d20001000000000000000000fe', // 33BAL-33DAI-33rETH
      '0x89eab8346acee73ce626d7031aaf2b0542e0be370001000000000000000000ff', // 20cbETH-18BAL-21DAI-21USDC-20rETH
      '0x37f9402ed72cfd3298dc101e99d38e7e99aa51a1000100000000000000000100', // 5cbETH-28BAL-25DAI-25USDC-18rETH
      '0x9830ad4c8f8d325c42f4269d7639bafff3cbb747000100000000000000000102', // 33tBTC-33WETH-33USDbC
      '0x5332584890d6e415a6dc910254d6430b8aab7e69000200000000000000000103', // 50OLAS-50USDC
      '0xcb470da0902e6c548f0e8161042f624599286e9b000200000000000000000105', // 80AURA-20WETH
      '0x4c0f0bffffced707112443df1b0b8371a4a57b03000200000000000000000107', // 1USDC-99FLOW
      '0x364aab5859015182f06c81a729d8e6959b71104a000200000000000000000108', // 50BALD-50rETH
      '0xc3eed8e0fd88a11c376355740032b07b9889b0f200020000000000000000010c', // 90BAL-10USDC
      '0x19c28a10677debf5511990c217a1fbf72aaf9d0800020000000000000000010a', // 45WETH-55USDbC
      '0xa48e5e1d301b1458fe91135073e3b822e437982b000200000000000000000109', // 40WETH-60USDbC
      '0x495390c904d6d050966d940d5b2eb97df964d11f00020000000000000000010b', // 55WETH-45USDC
      '0x821afe819450a359e29a5209c48f2fa3321c8ad200020000000000000000010d', // ECLP-sDAI-USDC-rh
      '0x9b7d78a15cdc64c54c69e04cfa0a750b0de3c69b000200000000000000000112', // 50WETH-50rETH
      '0x6497a40b3b0cd3fa352e8ba78ca6c03750c74689000200000000000000000111', // 50WETH-50rETH
      '0x7285e15fe82b26548ac21feb2cddd8d060144b6700020000000000000000010f', // 50cbETH-50WETH
      '0x39f5869a21e7adb314e926e843f630c65234b520000200000000000000000110', // 50WETH-50rETH
      '0x967e2bd519f9213969d7296c9a0e83b4fff9b7a7000100000000000000000114', // 33DAI-33USDC-33USDbC
      '0x5e4c53b11237db36118e5db6e8526aae6f2c7771000200000000000000000115', // 40BAL-60USDbC
      '0x336f36e57e256793cf1fe591ce6e4e13db861ed1000200000000000000000116', // 50WETH-50
      '0xb37949431919eb5737bfdd54ef48ee0fe9a506f5000100000000000000000119', // 33WETH-33DAI-33USDbC
      '0x53ef28fd38217ea696fc9ba688f26413624af7c100020000000000000000011d', // 50BPT-stabal3-50axlUSDC
      '0x610dd445126cd66e05987bcc62beec0cea86a69f000100000000000000000121', // 33WETH-33-33DOG
      '0x51549c25b36be4d8cfc5c66fd15df85555649bba000200000000000000000122', // 50DOG-50USDbC
      '0x1628c2b8592d51b1e143d3d27010f20549b240f7000200000000000000000126', // 45WETH-55USDC
      '0xe948c9e9de65ae75bc4422125cfaf88ad8aaa090000200000000000000000125', // 45DAI-55USDC
      '0x0a9541cbc8fff42efcc4eeb8d52a2fa7da7be2b3000200000000000000000124', // 50WETH-50USDC
      '0x2cdb094493b51c849ea9b0b11c90a5df3f7cb787000200000000000000000123', // 51WETH-49USDC
      '0x38fdbbc14fac54d92881ccacd11fb4cde3b1f66e000200000000000000000127', // 43WETH-57DAI
      '0xcbceee479b9cde631f560f3c9b9ef7071d8fe59f000200000000000000000128', // 47WETH-53USDC
      '0xfffbcba9883f49948067a7e5181a208034909543000200000000000000000129', // 56WETH-44USDC
      '0x2502909098e7fc11edb36346a66fee309aeb2bf900020000000000000000012a', // 51WETH-49USDC
      '0x27b3fa0e5c0e5da66cfe8a74dae3d8d77fe53cb000020000000000000000012b', // 58WETH-42USDC
    ],
  },
  Factories: {
    '0x4c32a8a8fda4e24139b51b456b42290f51d6a1c4': 'weightedPool', // Weighted V5
    '0x8df317a729fcaa260306d7de28888932cb579b88': 'composableStablePool', // ComposableStable V5
    '0x15e86be6084c6a5a8c17732d398dfbc2ec574cec': 'gyroE', // Gyro ECLP
  },
  Stakable: {
    VotingGaugePools: [
      '0xfb4c2e6e6e27b5b4a07a36360c89ede29bb3c9b6000000000000000000000026', // cbeth/weth
      '0xb328b50f1f7d97ee8ea391ab5096dd7657555f49000100000000000000000048', // gold/bal/usdc
      '0xc771c1a5905420daec317b154eb13e4198ba97d0000000000000000000000023', // reth/weth
      '0x0c659734f1eef9c63b7ebdf78a164cdd745586db000000000000000000000046', // USDC/USDbC/axlUSDC
      '0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047', // gold/weth/usdc
      '0x30722f57d56037caa2c38abd1f5e2955814875e9000000000000000000000087',
      '0x52e281318fed4efffb8e46c0847a8f9b71a461a8000200000000000000000018',
      '0x036d68e4e0005da4ef1c9ebd53b948d2c083495e00020000000000000000001a',
      '0x990a0f03c3ee397cafda61cad277de18280751fd0002000000000000000000b6',
      '0x98bedb6a3c0b6feebbe662e6419481a6877d9681000000000000000000000104',
      '0xab99a3e856deb448ed99713dfce62f937e2d4d74000000000000000000000118',
      '0x821afe819450a359e29a5209c48f2fa3321c8ad200020000000000000000010d',
    ],
    AllowList: [
      '0x868f0efc81a6c1df16298dcc82f7926b9099946b00020000000000000000000b', // Bald/weth
      '0x2db50a0e0310723ef0c2a165cb9a9f80d772ba2f00020000000000000000000d', // WETH/stabal3
      '0x6fbfcf88db1aada31f34215b2a1df7fafb4883e900000000000000000000000c', // stabal3
      '0xe58ca65f418d4121d6c70d4c133e60cf6fda363c000000000000000000000013', // usdc/axlusd
      '0xe40cbccba664c7b1a953827c062f5070b78de86800020000000000000000001b', // WETH-GOLD
      '0xc69793563a8f0a2c5b25bcfb8661de50da8eae1000020000000000000000001c', // stg-usdc
      '0x17e7d59bb209a3215ccc25fffef7161498b7c10d000200000000000000000020', // weth-gold 99
      '0xa30ad556d10c829a67f41f60d41afdd4efa9286c000100000000000000000029', // base friend pool
      '0xe94dfd524414220b3f5d321a20b6f9dbc1d53a1f00020000000000000000002d', // sis-weth
      '0xfa4ac3ecfece20769f8b5d9b6dfa5b7ed6569de2000200000000000000000033', // weth-mz
      '0x65e8e75899f683c8e2e73c77d6c5c63075f296cd00020000000000000000002b', // sus-weth
      '0xfab10dd71e11d0ad403cc31418b45d816f2f988200020000000000000000001d', // well/weth
    ],
  },
  Metadata: {
    '0x6fbfcf88db1aada31f34215b2a1df7fafb4883e900000000000000000000000c': {
      name: 'Balancer Stable USD',
      hasIcon: false,
    },
    '0x2db50a0e0310723ef0c2a165cb9a9f80d772ba2f00020000000000000000000d': {
      name: 'WETH/Balancer Stable USD',
      hasIcon: false,
    },
  },
  Deep: [
    '0x2db50a0e0310723ef0c2a165cb9a9f80d772ba2f00020000000000000000000d', // Weth/stabal
  ],
  BrandedRedirect: {
    FX: 'xave',
    Gyro2: 'gyro',
    Gyro3: 'gyro',
    GyroE: 'gyro',
  },
  Deprecated: {},
  GaugeMigration: {},
  BoostedApr: [],
  DisabledJoins: [],
  Issues: {},
};

export default pools;
