// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Mapping {
    string constant public version = "1.0.0";
    uint immutable public challengePeriod; // 一次初始化之后不可以修改, gas 极低

    mapping(address => uint256) public balances;

    constructor(uint256 _challengePeriod) {
        challengePeriod = _challengePeriod;
    }

    function setBalance(address _address, uint _balance) public {
        balances[_address] = _balance;
    }

    function getBalance(address _address) public view returns (uint256) {
        return balances[_address];
    }
}