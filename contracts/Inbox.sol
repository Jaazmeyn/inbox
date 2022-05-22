pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
pragma solidity ^0.4.17; // compiler will look

contract Inbox { // keyword for class and deployed are instances
    string public message; // variable storage on the blockchain, instance variable

    // constructor function automtical evoked when firs deployed
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    // argument type string 
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}