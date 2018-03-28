window.addEventListener('load', function() {

	// set provider
	  web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/PCx3uNGj3ABrJ38Cdl4Q"));
	

	console.log(web3);

	// set up all the contract interaction
	var contractABI 		= web3.eth.contract(

		[{
			"constant": true,
			"inputs": [],
			"name": "duration",
			"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "index",
			"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "renter",
			"outputs": [
			{
				"name": "",
				"type": "address"
			}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "owner",
			"outputs": [
			{
				"name": "",
				"type": "address"
			}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
			],
			"name": "authorizedUsers",
			"outputs": [
			{
				"name": "",
				"type": "bool"
			}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "endTimestamp",
			"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
			{
				"indexed": true,
				"name": "smartbox",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_index",
				"type": "uint256"
			}
			],
			"name": "Rented",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
			{
				"indexed": true,
				"name": "smartbox",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			}
			],
			"name": "Opened",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
			{
				"indexed": true,
				"name": "smartbox",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			}
			],
			"name": "Returned",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
			{
				"indexed": true,
				"name": "smartbox",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			}
			],
			"name": "Authorized",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
			{
				"indexed": true,
				"name": "smartbox",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_renter",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_rating",
				"type": "uint256"
			}
			],
			"name": "Rated",
			"type": "event"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "rent",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "open",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "withdraw",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
			{
				"name": "account",
				"type": "address"
			}
			],
			"name": "isUserAuthorized",
			"outputs": [
			{
				"name": "",
				"type": "bool"
			}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "returnBox",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
			{
				"name": "account",
				"type": "address"
			}
			],
			"name": "authorizeUser",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
			{
				"name": "_rating",
				"type": "uint16"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
			],
			"name": "rate",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}]
		);
var contractAddress    	= ['0xe2698baa693aac31ed1cc12a8c7f1234ae405a6e'];
var CONTRACT 			= [];
	// get contract object for each address

	for(i =0; i < contractAddress.length; i++){
		CONTRACT.push(contractABI.at(contractAddress[i]));
		console.log(contractAddress[i]);
		console.log(CONTRACT[i]);
	}

	console.log(web3.eth.blockNumber);
/*
	 CONTRACT[0].owner((_err,_resp) =>  {
	 	if(_err != null){
	 		console.log(_err);
	 	}else{
	 		console.log(_resp);
	 	}
	 });
*/	

});