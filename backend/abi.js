const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "productHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "artisanName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productInfo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timeCreated",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "artisanAddress",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "shopID",
				"type": "string"
			}
		],
		"name": "ProductRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "productHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "shopID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "verifier",
				"type": "address"
			}
		],
		"name": "ProductVerified",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "productID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "artisanName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productInfo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "artisanAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "shopID",
				"type": "string"
			}
		],
		"name": "registerProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "productID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "shopID",
				"type": "string"
			}
		],
		"name": "verifyProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "productID",
				"type": "string"
			}
		],
		"name": "getProductDetails",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "productHash",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "artisanName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productInfo",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timeCreated",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "artisanAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "shopID",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isRegistered",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = contractABI