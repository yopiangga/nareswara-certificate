// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Nareswara {

    struct Organization {
        uint id;
        string email;
    }

    struct User {
        uint id;
        string email;
        Certificate[] certificates;
    }

    struct Certificate { 
        string cid;
        uint userId;
        uint organizationId;
    }

    uint indexUser;
    uint indexOrganization;

    mapping (uint => User) public users;
    mapping (uint => Organization) public organizations;

    event OrganizationAdded(string email);
    event UserAdded(string email);

    function addUserIndex () public returns (uint result) {
        result = indexUser; 
        indexUser += 1;
    }

    function addOrganizationIndex () public returns (uint result) {
        result = indexOrganization; 
        indexOrganization += 1;
    }

    function getNowUser() public view returns (uint) {
        return indexUser;
    }

    function getNowOrganization() public view returns (uint) {
        return indexOrganization;
    }

    function addUser(string memory _email) public {
        users[indexUser].id = indexUser;
        users[indexUser].email = _email;

        addUserIndex();
        emit UserAdded(_email);
    }

    function addOrganization(string memory _email) public {
        organizations[indexOrganization].id = indexOrganization;
        organizations[indexOrganization].email = _email;

        addOrganizationIndex();

        emit OrganizationAdded(_email);
    }

    function addCertificate(Certificate[] memory _certificates) public {
        for (uint i = 0; i < _certificates.length; i++) {
            Certificate memory _certificate = Certificate(_certificates[i].cid,_certificates[i].userId, _certificates[i].organizationId);
            users[_certificates[i].userId].certificates.push(_certificate);
        }
    }

    function getAllCertificate(uint _id) public view returns (Certificate[] memory) {
        return users[_id].certificates;
    }

    function verifyCertificate(uint _id, string memory _cid) public view returns(bool) {
        Certificate[] memory _certificate = users[_id].certificates;
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