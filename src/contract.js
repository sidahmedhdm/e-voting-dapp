		function getContract() {
	let address = "0x45eF4D0573A34B691d1D24cB7460ac369F9Af51a"; // TODO: replace with your contract's address
	let abi = [
  {
      "constant": true,
      "inputs": [],
      "name": "datef2",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x07d26f06"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalVotes",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x0d15fd77"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "datef",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1f612473"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "voteCount",
          "type": "uint256"
        },
        {
          "name": "first_name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3477ee2e"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "datef3",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3a135c7b"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "voters",
      "outputs": [
        {
          "name": "voted",
          "type": "bool"
        },
        {
          "name": "vote",
          "type": "uint256"
        },
        {
          "name": "ins",
          "type": "bool"
        },
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xa3ec138d"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "candidateName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "voteCount",
          "type": "uint256"
        }
      ],
      "name": "Vote",
      "type": "event",
      "signature": "0x9c63d42e663889896c733776136625b0a7ed750b3da25058c975c4b572510d9b"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "candidateName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "voteCount",
          "type": "uint256"
        }
      ],
      "name": "res",
      "type": "event",
      "signature": "0x86e649a9323298e1b4985fb3acb97d399dd43a3036629a5bea4d93f1cf5ae9de"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "candidateName",
          "type": "string"
        }
      ],
      "name": "NewCandidate",
      "type": "event",
      "signature": "0x896847989b21b81e24c9eee2d32332cbef5090379a811d37690d053bebac7292"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "voterName",
          "type": "string"
        }
      ],
      "name": "Newvoter",
      "type": "event",
      "signature": "0x9bb0e0b164ee0d9a9414a0d90c84dc671ea7df3f7266b496534338d5da6a32b2"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getNumCandidate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd02cf3cf"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_first_name",
          "type": "string"
        },
        {
          "name": "_wilaya",
          "type": "string"
        },
        {
          "name": "_code",
          "type": "uint256"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x42b4a8b0"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_first_name",
          "type": "string"
        },
        {
          "name": "_wilaya",
          "type": "string"
        }
      ],
      "name": "addVoter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x2c9cc82b"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_candidate",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0121b93f"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "result",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x65372147"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "timeSub1",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2b72f481"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "timeSub2",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x28b46d83"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "timeVote",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xbd319101"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "timeResult",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6196738d"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_str",
          "type": "uint256"
        },
        {
          "name": "_str1",
          "type": "string"
        },
        {
          "name": "_str2",
          "type": "string"
        },
        {
          "name": "_str3",
          "type": "string"
        },
        {
          "name": "_c",
          "type": "uint256"
        }
      ],
      "name": "testStr",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0xabb4dc8c"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_str",
          "type": "uint256"
        },
        {
          "name": "_str1",
          "type": "string"
        },
        {
          "name": "_str2",
          "type": "string"
        },
        {
          "name": "_str3",
          "type": "string"
        }
      ],
      "name": "testStr2",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0xba079c29"
    }
  ]  // TODO: copy and paste the ABI from remix
	validateMetaMask();
  //document.location.reload();
	//
	//web3.currentProvider.publicConfigStore.on('update', ()=>{console.log('ok');});


	window.ethereum.enable();


	this.provider = new ethers.providers.Web3Provider(web3.currentProvider); // connect to Metamask
	
	let contract = new ethers.Contract(address, abi, provider.getSigner());
	console.log(provider.getSigner().getAddress());
	
	console.log("Contract Initialization Successful");
	return contract;
  }
  let contract;
  ethereum.on('accountsChanged', async function (accounts) {
	contract = getContract();

	})
 


//var contract = getContract();


function validateMetaMask() {
	if (typeof web3 !== 'undefined') {
		console.log('MetaMask is installed')
		web3.eth.getAccounts(function (err, accounts) {
			if (err != null) {
				console.log(err)
			}
			else if (accounts.length === 0) {
				console.log('MetaMask is locked')
			}
			else {
				console.log('MetaMask is unlocked')

			}
		});
	}
	else {
		console.log('MetaMask is not installed')
	}
}
