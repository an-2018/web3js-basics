## Overview
Programing on ethereum basicly has 2 layers the **Smart Contracts** that interact with the ethereum blockchain on itself, and **Dapps** as alayer to interact with the smartcontract.

While Bitcoin was a protocol built for storing and transferring value, acting as a central bank of the internet, Ethereum was a protocol built for creating decentralized applications, adding logic to financial transactions, making digital currencies programmable.

This programmable layer to digital currency is the smart contract. The smart contract allows the creation of binding agreements enforced by code.

This new generation would allow users to explore both the traditional web and the decentralized web. On top of Ethereum, a new generation of applications would be created, decentralized apps (dApps), which use Ethereum as its back-end instead of placing security in servers.
[More About on this Blog Post Here](https://medium.com/fullstacked/connect-react-to-ethereum-b117986d56c1)

This projet will have two main parts the blockchain smart contract related code and the react app.

## Setup
As a framwork we will use [TruffleSuite.js](https://www.trufflesuite.com/) with its development tools.

```bash
npm install -g truffle
```

We will use the folder ```blocckchain``` for smart contracts related things, on this folder we run the comand:
```bash
truffle init
``` 

With this a set of files is created, on smartcontracts is the Migration.sol, from the solidity term, wich is basicly the programing language of smart contracts, solidty recalls a mix of js, python, c# and other languages.

For this projet we use the sample smart contract availble on the documentation [Introduction to Smart Contracts](https://solidity.readthedocs.io/en/v0.5.13/introduction-to-smart-contracts.html) an example of a storage smart contract.

```solidity
pragma solidity >=0.4.0 <0.7.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
```

The smart contract has 2 functions, **set()** to store a integer value and a **get()** to get the stored value.