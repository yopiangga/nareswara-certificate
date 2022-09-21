// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Nareswara {

    struct Certificate { 
        string cid;
        address userAddress; 
        address issuerAddress;
    }

    struct User {
        address id;
        string name;
        string email;
        Certificate[] certificates;
    }

    mapping (address => User) public users;

    event UserAdded(address userAddress, string name, string email);
    
    function addUser(address _userAddress, string memory _name, string memory _email) public {
        require(users[_userAddress].id != _userAddress, "This user already exists.");
        users[_userAddress].id = _userAddress;
        users[_userAddress].name = _name;
        users[_userAddress].email = _email;

        emit UserAdded(_userAddress, _name, _email);
    }

    function getUserExists(address _userAddress) public view returns (bool) {
        return users[_userAddress].id == _userAddress;
    }

    function getAllCertificate(address _userAddress) public view returns(Certificate[] memory) {
        return users[_userAddress].certificates;
    }

    function stringsEquals(string memory s1, string memory s2) private pure returns (bool) {
        bytes memory b1 = bytes(s1);
        bytes memory b2 = bytes(s2);
        uint256 l1 = b1.length;
        if (l1 != b2.length) return false;
        for (uint256 i=0; i<l1; i++) {
            if (b1[i] != b2[i]) return false;
        }
        return true;
    }
    
    struct Event {
        string name;
        string[] participants;
    }

    struct Organization {
        address id;
        string name;
        string email;
        Event[] events;
    }

    mapping (address => Organization) public organizations;

    event OrganizationAdded(address id, string name, string email);
    event EventAdded(address id, string eventName);
    event ParticipantAdded(string[] participants);

    function addOrganization(address _organizationAddress, string memory _name, string memory _email) public {
        require(organizations[_organizationAddress].id != _organizationAddress, "This user already exists.");
        organizations[_organizationAddress].id = _organizationAddress;
        organizations[_organizationAddress].name = _name;
        organizations[_organizationAddress].email = _email;

        emit OrganizationAdded(_organizationAddress, _name, _email);
    }

    function getOrganizationExists(address _organizationAddress) public view returns (bool) {
        return organizations[_organizationAddress].id == _organizationAddress;
    }

    function addEvent(address _organizationAddress, string memory _eventName) public {
        Event memory _event = Event(_eventName, new string[](0));
        organizations[_organizationAddress].events.push(_event);

        emit EventAdded(_organizationAddress, _eventName);
    }

    function addParticipant(address _organizationAddress, uint _index, string[] memory _participants) public {
        organizations[_organizationAddress].events[_index].participants = _participants;

        emit ParticipantAdded(_participants);
    }

    function getAllEvent(address _organizationAddress) public view returns(Event[] memory) {
        return organizations[_organizationAddress].events;
    }

    function getAllParticipant(address _organizationAddress, uint _index) public view returns(string[] memory) {
        return organizations[_organizationAddress].events[_index].participants;
    }

    function isParticipantReady(address _organizationAddress, string memory _email, uint _index) public view returns(bool) {
        string[] memory _participants = organizations[_organizationAddress].events[_index].participants;
        for (uint i = 0; i < _participants.length; i++) {
            if (stringsEquals(_participants[i], _email)) {
                return true;
            }
        }
        return false;
    }

    function redeemCertificate(string memory _email, uint _index,address _userAddress, address _organizationAddress, string memory _cid) public {
        if (isParticipantReady(_organizationAddress, _email, _index)) {
            Certificate memory _certificate = Certificate(_cid, _userAddress, _organizationAddress);
            users[_userAddress].certificates.push(_certificate);
        }
    }
}