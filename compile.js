// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// read raw sourcecode
const source = fs.readFileSync(inboxPath, 'utf8');

//acess to only the contracts property we just neet bytecode and ABI
module.exports = solc.compile(source, 1).contracts[':Inbox'];