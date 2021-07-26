pragma solidity ^0.8.0;

/**
 * The Cookies contract saves some minimal usage data from the website https://laubenheimer.eu
 */

contract Cookies {
	struct Action {
		string actor;
		uint buttonID;
        uint timestamp;
	}
	struct Session {
        string ip;
        uint timestampStart;
        uint timestampLastAction;
        Action[] actions;
    }
    
    address payable private owner;
    string[] private visitors;
    mapping (string => Session[]) private sessions;

    event Activity(string description);
    
    //@notice Contract-initiation, setting the owner//
    constructor(address deployAddress) public {
        require (msg.sender == address(deployAddress),
         "Someone may have tried to cheat somehow to become owner, or check the Address again.");
    	owner = msg.sender;
        emit Activity("Initialisation of this Cookiecontract by: " + string(owner));
    }

    //@notice Here the contract owner can add actions, registered made on the web-Application.
    function action(string ip, uint buttonID) public returns(bool){
        require(msg.sender == owner,
            "Not transacted via the website.");
        bool success = _action(ip, buttonID);
        return success;
    }
    function _action (string ip, uint buttonID) returns(bool) internal {
        _timestamp = time.now;
        Action actionToAdd = Action(ip, buttonID, _timestamp);
        if(buttonID == 0){
            Action[] toAdd;
            toAdd.push(actionToAdd);
            Session stoAdd = Session(ip, _timestamp, _timestamp, toAdd);
            sessions[ip].push(stoAdd);
            emit Activity("New session intialized.");
        } else {
            sessions[ip].actions.push(Action(ip, buttonID, _timestamp));
            sessions[ip].timestampLastAction = _timestamp;
            emit Activity("Button pushed.");
        }
        return true;
    }
    
    //@notice These calls can be used to read the collected data in this contract.
    function getOwner() public view returns(address) {
        return _getOwner();
    }
    function _getOwner() private internal returns(address) {
        return owner;
    }    
    function getVisitor(uint visitorNumber) public view returns(string ip) {
        return _getVisitor();
    }
    function _getVisitor(uint visitorNumber) private internal returns(string ip) {
        return visitors[visitorNumber];
    }
    function getSession (uint number) public view returns(Session) {
        return _getSession(number);
    }
    function _getSession (uint number) private internal returns(Session) {
        return sessions[number];
    }    
}
