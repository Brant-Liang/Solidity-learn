// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "hardhat/console.sol";

/*
 *
 * 权限不足（Unauthorized）
 * 金额不够（InsufficientBalance(uint requested, uint available)）
 * 操作顺序错误（InvalidState()）
*/
contract LoopBranch {
    uint public numberVar;
    uint[] public numbers;
    error arrayIndexOutOf(uint name);
    constructor(uint _numberVar) {
        numberVar = _numberVar;
    }

    function setNumberVar(uint _numberVar) public {
        require(_numberVar > 50, "number var must be more than 50");
        numberVar = _numberVar; 
    }
    
    function getNumber(uint256 index) public view returns(uint256) {
        return numbers[index];
    }
}