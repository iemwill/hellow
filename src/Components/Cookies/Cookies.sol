// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Cookies {
    /**
     * The Cookies contract is a small piece of codelines to
     * register actions through machines calling a servers hosted code of so called websites.. .or
     * any other fitting need.
     * 
     * Contact the dev of this Contract and it's using code on https://laubenheimer.eu via that site.
     */
    struct Session {
        string ip;
        uint timestampStart;
        uint timestampLastAction;
        uint[21] actions;
    }
    
    address payable public owner;
    mapping(string => uint[]) public visitors;
    Session[] public sessions;

    modifier isOwner() { 
        require(owner == address(msg.sender));
        _;
    }

    event Activity(string description);
    event Activity(string description, uint buttonID);
    
    //@notice Contract-initialization, setting the owner//
    constructor() {
        require(owner == address(msg.sender));
        emit Activity("Initialisation of this Cookiecontract.");
    }
    
    receive () external payable {
        require(msg.value > 0);
        emit Activity("ETH-Donation received.");
    }

    function emptyTocket () external isOwner() {
        uint _amount = address(this).balance;
        require(_amount > 0);
        require(owner.send(_amount));
        emit Activity("Cleared ETH-Amount to owner.");
    }
    
    function initSession (string calldata ip) external isOwner() returns(uint) {
        visitors[ip][visitors[ip].length] = sessions.length;
        uint  _timestamp = block.timestamp;
        uint[21] memory _actions;
        _actions[0] = 0;
        sessions.push(Session(ip, _timestamp, _timestamp, _actions));
        emit Activity("Init new session.");
        return sessions.length - 1;
    }
    

    //@notice Here the contract contract-owner can add actions made on the web-Application.
    function webAppAction (string memory ip, uint buttonID, uint sessionID) external isOwner() returns(bool) {
        require(keccak256(bytes(sessions[sessionID].ip)) == keccak256(bytes(ip)));
        sessions[sessionID].actions[sessions[sessionID].actions.length] = buttonID;
        sessions[sessionID].timestampLastAction = block.timestamp;
        emit Activity("Button activated, ID: " , buttonID);
        return true;
    }
    
    //@notice These calls can be used to read the collected data in this contract.
    function getOwner() public view returns(address) {
        return owner;
    }
    function getVisitorCounter() public view returns(uint) {
        return sessions.length;
    }
    function getRegisteredVisitsFrom(string calldata ip) public view returns(uint[] memory) {
        return visitors[ip];
    }
    function getSession (uint ID) public view returns(Session memory) {
        return sessions[ID];
    }    
}
