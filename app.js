// Import web3.js
const { Web3 } = require('web3');

// Setup web3 instance with a provider
const web3 = new Web3('http://localhost:8545');

// Contract ABI and Address (Replace with your actual ABI and Contract Address)
const productcontractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "manufacturerName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "scientificName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "barcodeId",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "manDateEpoch",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "expDateEpoch",
                "type": "uint256"
            }
        ],
        "name": "NewProduct",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "manufacturerName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "scientificName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "barcodeId",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "buyerName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "buyerEmail",
                "type": "string"
            }
        ],
        "name": "ProductOwnershipTransfer",
        "type": "event"
    }
]; // Your contract ABI

const SupplyChainABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name_",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email_",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "enum Types.UserRole",
                "name": "role",
                "type": "uint8"
            }
        ],
        "name": "LostUser",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "manufacturerName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "scientificName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "barcodeId",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "manDateEpoch",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "expDateEpoch",
                "type": "uint256"
            }
        ],
        "name": "NewProduct",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "enum Types.UserRole",
                "name": "role",
                "type": "uint8"
            }
        ],
        "name": "NewUser",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "manufacturerName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "scientificName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "barcodeId",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "buyerName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "buyerEmail",
                "type": "string"
            }
        ],
        "name": "ProductOwnershipTransfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "enum Types.UserRole",
                        "name": "role",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "id_",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "internalType": "struct Types.UserDetails",
                "name": "user_",
                "type": "tuple"
            }
        ],
        "name": "addParty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "manufacturerName",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "manufacturer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "manDateEpoch",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expDateEpoch",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isInBatch",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "batchCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "barcodeId",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "productImage",
                        "type": "string"
                    },
                    {
                        "internalType": "enum Types.ProductType",
                        "name": "productType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "scientificName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "usage",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "composition",
                        "type": "string[]"
                    },
                    {
                        "internalType": "string[]",
                        "name": "sideEffects",
                        "type": "string[]"
                    }
                ],
                "internalType": "struct Types.Product",
                "name": "product_",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "currentTime_",
                "type": "uint256"
            }
        ],
        "name": "addProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllProducts",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "manufacturerName",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "manufacturer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "manDateEpoch",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expDateEpoch",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isInBatch",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "batchCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "barcodeId",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "productImage",
                        "type": "string"
                    },
                    {
                        "internalType": "enum Types.ProductType",
                        "name": "productType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "scientificName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "usage",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "composition",
                        "type": "string[]"
                    },
                    {
                        "internalType": "string[]",
                        "name": "sideEffects",
                        "type": "string[]"
                    }
                ],
                "internalType": "struct Types.Product[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMyDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "enum Types.UserRole",
                        "name": "role",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "id_",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "internalType": "struct Types.UserDetails",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMyProducts",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "manufacturerName",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "manufacturer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "manDateEpoch",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expDateEpoch",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isInBatch",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "batchCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "barcodeId",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "productImage",
                        "type": "string"
                    },
                    {
                        "internalType": "enum Types.ProductType",
                        "name": "productType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "scientificName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "usage",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "composition",
                        "type": "string[]"
                    },
                    {
                        "internalType": "string[]",
                        "name": "sideEffects",
                        "type": "string[]"
                    }
                ],
                "internalType": "struct Types.Product[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMyUsersList",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "enum Types.UserRole",
                        "name": "role",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "id_",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "internalType": "struct Types.UserDetails[]",
                "name": "usersList_",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "barcodeId_",
                "type": "string"
            }
        ],
        "name": "getSingleProduct",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "manufacturerName",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "manufacturer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "manDateEpoch",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expDateEpoch",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isInBatch",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "batchCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "barcodeId",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "productImage",
                        "type": "string"
                    },
                    {
                        "internalType": "enum Types.ProductType",
                        "name": "productType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "scientificName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "usage",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "composition",
                        "type": "string[]"
                    },
                    {
                        "internalType": "string[]",
                        "name": "sideEffects",
                        "type": "string[]"
                    }
                ],
                "internalType": "struct Types.Product",
                "name": "",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "id_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "date",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct Types.UserHistory",
                        "name": "manufacturer",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "id_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "date",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct Types.UserHistory",
                        "name": "supplier",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "id_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "date",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct Types.UserHistory",
                        "name": "vendor",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "id_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "date",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct Types.UserHistory[]",
                        "name": "customers",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct Types.ProductHistory",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "id_",
                "type": "address"
            }
        ],
        "name": "getUserDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "enum Types.UserRole",
                        "name": "role",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "id_",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "internalType": "struct Types.UserDetails",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "partyId_",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "barcodeId_",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "currentTime_",
                "type": "uint256"
            }
        ],
        "name": "sellProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const UsersABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "enum Types.UserRole",
                "name": "role",
                "type": "uint8"
            }
        ],
        "name": "LostUser",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "enum Types.UserRole",
                "name": "role",
                "type": "uint8"
            }
        ],
        "name": "NewUser",
        "type": "event"
    }
]
const supplychainaddress= '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
const contractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
const usersAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
const productscontract = new web3.eth.Contract(productcontractABI, contractAddress);
const supplychaincontract = new web3.eth.Contract(SupplyChainABI, supplychainaddress );
const Userscontract = new web3.eth.Contract(UsersABI, usersAddress );

console.log(productscontract.methods);
console.log(supplychaincontract.methods);
console.log(Userscontract.methods);


  