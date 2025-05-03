// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interface/MyInterface.sol";

contract InterfaceLearn is MyInterface {
    uint256 public value;
    constructor() {
    }
    function getValue() external view returns (uint) {
        return value;
    }

    function setValue(uint _value) external {
        value = _value;
    }
}