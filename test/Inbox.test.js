// ABI -> to web3 libary as a "portal" into what is going on in the testnetwork
const assert = require('assert'); // libary assert some val is equal to other
// local network in the browser to test
// deploy Bytecode to test local etherium network in the browser: ganache = TestRPC
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor -> we need to create an instance web3

// provider helps web3 and network (f.e testnetwork ganache) to communicate.
const web3 = new Web3(ganache.provider());

// testing framework mocha
class Car {
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

// first is just for me to know what im doing
describe('Car', () => {
    it('can park', () => {
        //actual test setup

        // instance
        const car = new Car();
        // assert one value equal to other
        assert.equal(car.park(), 'stopped');

    });
    it('can drive', () => {
        const car = new Car();
        assert.equal(car.drive(), 'vroom');
    })
})