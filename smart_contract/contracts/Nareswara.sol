// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Nareswara {

    struct Certificate { 
        string cid;
        address userAddress; 
        address issuerAddress;
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

    struct User {
        address id;
        string name;
        string email;
        Certificate[] certificates;
    }

    mapping (address => User) public users;
    mapping (address => Organization) public organizations;

    event EventAdded(address id, string eventName);
    event OrganizationAdded(address id, string name, string email);
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

    function addEvent(address _organizationAddress, string memory _eventName, string[] memory _participants) public {
        Event memory _event = Event(_eventName, _participants);
        organizations[_organizationAddress].events.push(_event);

        emit EventAdded(_organizationAddress, _eventName);
    }

    function getAllEvent(address _organizationAddress) public view returns(Event[] memory) {
        return organizations[_organizationAddress].events;
    }

    function addCertificate(Certificate[] memory _certificates) public {
        for (uint i = 0; i < _certificates.length; i++) {
            Certificate memory _certificate = Certificate(_certificates[i].cid,_certificates[i].userAddress, _certificates[i].issuerAddress);
            users[_certificates[i].userAddress].certificates.push(_certificate);
        }
    }

    function getAllCertificate(address _userAddress) public view returns (Certificate[] memory) {
        return users[_userAddress].certificates;
    }

    function verifyCertificate(address _userAddress, string memory _cid) public view returns(bool) {
        Certificate[] memory _certificate = users[_userAddress].certificates;
        for (uint i = 0; i < _certificate.length; i++) {
            if (stringsEquals(_certificate[i].cid, _cid)) {
                return true;
            }
         }
        return false;
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
}