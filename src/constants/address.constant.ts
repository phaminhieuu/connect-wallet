export const NULL_ADDRESS: string = '0x0000000000000000000000000000000000000000';

export const CONTRACT: { [key: string]: any } = {
	//ETHEREUM
	1: {
		EXCHANGE: '0x6D7702810b3A15F86244486598f64F4a5Ba648c6',
		REGISTRY: '0xd64ccc880dE5b93e98e46a5893A7bf99C461bEf3',
		COLLECTION: '0x3974426e99E07533E721bdE05a8AAC12Caae0623',
		TOKEN_TRANSFER_PROXY: '0x72D7bb477C8BA116Ace631a9e030DbecfE072fF6',
		EXCHANGE_TOKEN: '0x5B93f7D63Ce480013272B0a0090aB9Ff3614C455', // PLATFORM COIN
		AUCTION: '0xB12A4EF18577a52FFa0a6CFa7Bf57562A896917F',
	},
	// ETHEREUM
	4: {
		// NEW CONTRACT
		REGISTRY: '0xDD8453e8768D14567D55E2c5024e2c33eF788534',
		COLLECTION: '0x613d7d011b75A75f5ac1276A23687eCd1E7e1ff7',
		TOKEN_TRANSFER_PROXY: '0x265fca9ef655b9438F8FC613B41413EFF39B96fc',
		EXCHANGE: '0xC0D74822bf5463CeF2BF8449501c7de52Dd8Ad23',
		EXCHANGE_TOKEN: '0x996AfE323CD425f3ABa1D1C1c72dDfed7840275D', // PLATFORM COIN
		AUCTION: '0x56a85c9e778ED11e4917E8856eABe2a1CF66CEc4',

		// OLD CONTRACT
		// REGISTRY: '0xee01Fd2aAb7da51bf016D3Ca2415Ed0ea3c5f6D1',
		// COLLECTION: '0xa2bD244ab7c163413db9De4db38165C08D4Ea16D',
		// TOKEN_TRANSFER_PROXY: '0x1c6612dCbb58aFb5FAD1f50eC5D87932ec398DA7',
		// EXCHANGE: '0xA748d47291f309707Ec3E7bb9CE76Ff436Cc38C9',
		// EXCHANGE_TOKEN: '0x996AfE323CD425f3ABa1D1C1c72dDfed7840275D', // PLATFORM COIN
		// AUCTION: '0xd984370214Be39290C25318b7fF7fAeb87F18D82',
	},

	//BINANCE
	56: {
		EXCHANGE: '0x6D7702810b3A15F86244486598f64F4a5Ba648c6',
		REGISTRY: '0xd64ccc880dE5b93e98e46a5893A7bf99C461bEf3',
		COLLECTION: '0x3974426e99E07533E721bdE05a8AAC12Caae0623',
		TOKEN_TRANSFER_PROXY: '0x72D7bb477C8BA116Ace631a9e030DbecfE072fF6',
		EXCHANGE_TOKEN: '0x5B93f7D63Ce480013272B0a0090aB9Ff3614C455', // PLATFORM COIN
		AUCTION: '0xB12A4EF18577a52FFa0a6CFa7Bf57562A896917F',
	},
	97: {
		REGISTRY: '0xd616c68f38d58Fb80acc9E8bD4742D083D83413c',
		COLLECTION: '0xefF0d92dD67A648Dc70d70150fb74896984425dE',
		TOKEN_TRANSFER_PROXY: '0x1a9ED73c55B9aD443c5Ae5839fCF9Ed1Ab2965cd',
		EXCHANGE: '0xCA8B599E7f82F668e53a93d297b401CD553A93EA',
		EXCHANGE_TOKEN: '0xB8f48CBb98A6E76e05716095Ea3bFC3891397e21', // PLATFORM COIN
		AUCTION: '0x0ffd26D35A403B57e80e06BAD22273310763E161',
	},
	//POLYGON
	137: {
		EXCHANGE: '0x385348AAd98B7459C1EBb6D4536Ce50Ad3a64ed0',
		REGISTRY: '0xd64ccc880dE5b93e98e46a5893A7bf99C461bEf3',
		COLLECTION: '0x3974426e99E07533E721bdE05a8AAC12Caae0623',
		TOKEN_TRANSFER_PROXY: '0x72D7bb477C8BA116Ace631a9e030DbecfE072fF6',
		EXCHANGE_TOKEN: '0x5B93f7D63Ce480013272B0a0090aB9Ff3614C455', // PLATFORM COIN
	},

	80001: {
		REGISTRY: '0x63831029279825a682eF7b573CFa8b5FC6AFb2fD',
		COLLECTION: '0xE845f2BF4429169D9b11Df46A95283A996e0bFA2',
		TOKEN_TRANSFER_PROXY: '0x59455C85f6f5fd683bA0d8E85432741d3a1e78cD',
		EXCHANGE: '0x150b747B7f811962E564A3242229b0f99Fd6D9fE',
		EXCHANGE_TOKEN: '0x14efeA12451cE6C69132Cc0d69Ef733649DB40C3', // PLATFORM COIN
		AUCTION: '0x83A2c1D0b01b94b9579B83b6F6fBA7fe696A0437',
	},
	//AVALANCE
	43114: {
		EXCHANGE: '0x6D7702810b3A15F86244486598f64F4a5Ba648c6',
		REGISTRY: '0xd64ccc880dE5b93e98e46a5893A7bf99C461bEf3',
		COLLECTION: '0x3974426e99E07533E721bdE05a8AAC12Caae0623',
		TOKEN_TRANSFER_PROXY: '0x72D7bb477C8BA116Ace631a9e030DbecfE072fF6',
		EXCHANGE_TOKEN: '0x5B93f7D63Ce480013272B0a0090aB9Ff3614C455', // PLATFORM COIN
		AUCTION: '0xB12A4EF18577a52FFa0a6CFa7Bf57562A896917F',
	},
	43113: {
		REGISTRY: '0x2918fe6A491ed29bC1e61d92F78cefe7bde81910',
		COLLECTION: '0x5230c6417dee2a6DE748F7146dEd71Ecb9942CD8',
		TOKEN_TRANSFER_PROXY: '0x57DF5a7a6aaD50B91310aB761462Ce160012DE47',
		EXCHANGE: '0x890aaA4a227bCA31caA83A0505513799e493a448',
		EXCHANGE_TOKEN: '0x8F8dbD1159A9664F861d9179889a98D65f5D0235', // PLATFORM COIN
		AUCTION: '0x3B6360dCb7343659890EC6614E995b367311710F',
	},
};