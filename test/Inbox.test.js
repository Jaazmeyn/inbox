// ABI -> to web3 libary as a "portal" into what is going on in the testnetwork
const assert = require('assert'); // libary assert some val is equal to other
// local network in the browser to test
// deploy Bytecode to test local etherium network in the browser: ganache = TestRPC
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor -> we need to create an instance web3

// provider helps web3 and network (f.e testnetwork ganache) to communicate.
const web3 = new Web3(ganache.provider());

let accounts;

// testing framework mocha
beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // use one of that accounts to deploy
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts)
    })
})