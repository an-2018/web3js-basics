
## Interacting with ethereum network and get acount balance with Web3js

- web3js library the main js labrary to interact with ethereum blockchain.
- Ethereum devlopment in 2 parts:
    - smart contract development;
    - client side to talk with ethereum blockchain, website or app;
- RPC - remote procedure call;
- json rpc to make a request to a node in blockchain;

<div>
<img style="max-width: 50%;" src="https://www.dappuniversity.com/web3-js-diagram.png" alt="jsjn">
</div>

### Requirements
- nodejs;
- web3js library;
- ethereum node
    - run locally - download and run locally;
    - run remote - Infura - instanciate a conection to a remote node;

### Steps
``` bash
npm install web3

node
```
We can pratice the following code on the node terminal, from now on we run js comands, variables and codes on the terminal.
Here we are using the **url** of an endpoint from a project created on Infura to get acess to a node on the ethereum network.

```js
var Web3 = require('web3')
var url = 'infuria projet endpoint'
var web3 = new Web3(url)
```

Go to **Etherscan/acounts** and get an account address.

And use we3.eth.getBalance to get the balance of the account.
```js
// random address found on etherscan
var address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' 
// getBalance get an address and a callback function as parameters
web3.eth.getBalance(adress, (error, balance) =>{acount_balance = balanace})
```
The getBalance return the aomunt of ehter on the acount in a subdivision of ether the Wei.
we can convert Wei to ether usin ''' web3.utils.fromWei(account_balance, 'ether') '''.

Having a acount on the ethereum, the address is a representative of the public adress

We can create an acount on ethereum blockchain by using:
```js
web3.eth.accounts.create()
```
It then return the address and private key.

### Running locally
Using Ganache, witch is basicly a way to run an ethereum blockchain on our personal computer for dev and testing purpuses. 
More about Ganache on [Trufflesuite Ganache One Click Blockchain](https://www.trufflesuite.com/ganache).

we can do the same steps above for the local environement by using the url of the local network, and using the address avaible on the ganache user interface to check the address's and balances of then.
## References
[Web3js Dapp University](https://www.dappuniversity.com/articles/web3-js-intro)
- blockchain tutorials and courses
[Etherscan](https://etherscan.io/)
- Etherscan - get information about acounts on ethereum net
[Ganache](https://www.trufflesuite.com/ganache)
- run a local ethereum network




