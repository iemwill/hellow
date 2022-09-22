// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Cookies {
    struct Session {
        string shaip;
        uint timestampStart;
        uint timestampLastAction;
        uint[] actions;
    }

    address payable public owner;
    mapping(string => uint[]) private visitors;
    uint[] private actions;
    Session[] private sessions;

    modifier isOwner() { 
        require(owner == payable(address(msg.sender)), "You're not the owner.");
        _;
    }

    event Activity(string description);
    event Activity(string description, uint ID);


    constructor() {
        owner = payable(address(msg.sender));
        actions.push(0);
        emit Activity("Initialisation of this Cookiecontract.");
    }
    receive() external payable {
        require(msg.value > 0);
        emit Activity("Donation received.");
    }
    function emptyPocket() external isOwner() {
        uint _amount = address(this).balance;
        require(_amount > 0);
        require(owner.send(_amount), "Send ETH failed.");
        emit Activity("Sent Contract amount to owner.");
    }
    function initSession(string memory shaip) external isOwner() returns(uint) {
        visitors[shaip].push(sessions.length);
        uint  _timestamp = block.timestamp;
        Session memory newSession = Session(shaip, _timestamp, _timestamp, actions);
        sessions.push(newSession);
        emit Activity("Init new session, sessionID: ", sessions.length - 1);
        return sessions.length - 1;
    }
    function webAppAction(string memory shaip, uint buttonID, uint sessionID) external isOwner() returns(bool) {
        require(keccak256(bytes(sessions[sessionID].shaip)) == keccak256(bytes(shaip)), "Wrong Credentials.. ");
        sessions[sessionID].actions.push(buttonID);
        sessions[sessionID].timestampLastAction = block.timestamp;
        emit Activity("Button activated, buttonID: " , buttonID);
        return true;
    }
    function getVisitorCounter() public view returns(uint) {
        return sessions.length;
    }
    function getVisitsFrom(string calldata shaip) public view returns(uint[] memory) {
        return visitors[shaip];
    }
    function getSession (uint ID) public view returns(Session memory) {
        return sessions[ID];
    }    
}