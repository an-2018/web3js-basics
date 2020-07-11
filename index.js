const Web3 = require('web3');


var url = 'https://mainnet.infura.io/v3/b9b04fd4fc84458283feb1a5326bc04e';

var web3 = new web3(url);

var address = '';

web3.eth.getBalance(address, (error, (wei) => { 
    acount_balance = web3.utils.fromWei(wei,'ether')
}));


console.log()