// window.addEventListener('load', function() {

	// set provider
	var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/PCx3uNGj3ABrJ38Cdl4Q"));
	//web3 = new Web3(new Web3.providers.HttpProvider(web3.currentProvider);

	// set up all the contract interaction
	var contractABI 		= web3.eth.contract(

    [
      {
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
        "name": "Closed",
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
        "name": "close",
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
      }
    ]
		);
var contractAddress    	= ['0x792768719651e03e4db560ad02e45beaa05f1139'];
var CONTRACT 			= [];
	// get contract object for each address;
	for(i =0; i < contractAddress.length; i++){
		CONTRACT.push(contractABI.at(contractAddress[i]));
	}

	checkStatus();

	function checkStatus () {
    const owner = CONTRACT[0].owner();
    console.log(`owner: ${owner}`);

    const timeNow = Date.now();
    console.log(`time now is: ${timeNow}`);

    const endtime = (CONTRACT[0].endTimestamp()) * 1000;
    console.log(`end time is ${endtime}`);

    if (timeNow > endtime) {
      document.getElementById("boxState").innerHTML = '<i class="fas fa-check" style="color:green" />';
      console.log('available');
    } else {
      document.getElementById("boxState").innerHTML = '<i class="fas fa-times" style="color:red" />';
      console.log('in use');
    }
	}

	setInterval(checkStatus, 10000);



// });