// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


interface MyInterface {
    function getValue() external view returns (uint);
    function setValue(uint _value) external;
}