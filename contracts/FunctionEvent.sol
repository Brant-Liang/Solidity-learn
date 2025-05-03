// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

/*
 * function 声明一个函数
 * function 函数名字(函数参数) 修饰符 { 函数体 }
 * function 函数名字(函数参数) 修饰符 view returns(返回值类型) { 函数体 }
 * 在智能合约里面，函数的修饰符有 public, private, internal, external
 * - public: 修饰状态变量和函数时，可以被合约内部的其他合约和外部账户访问
 * - private: 修饰状态变量和函数时，只能被当前合约访问，在派生合约里面也是无法访问 private
 * - internal: 修饰状态变量和函数时，可以在当前合约访问和其派生合约里面访问，其他无法访问
 * - external: 修饰状态变量和函数时，可以被外部账户或者合约进行调用，仅仅只能从合约外部访问，合约内部是不能访问该函数和状态变量。
 * pure 和 view 修饰符的作用
 * - pure: 修饰函数是不读取合约状态，也不修改合约状态，即完全不访问状态变量
 * - view: 不修改合约状态, 但是可以读取合约状态
 * payable: 修饰函数可以接收 Ether
 * virtaul: 修饰的函数可以被派生合约重写覆盖
 * solidity 的函数是支持多返回值的
 *
 * 合约事件
 * - 定义 event EventName(address indexed addressxxx, uint256 uint256xxx)
 * - 抛出事件 emit EventName(msg.vgfsender, 1000)
 * - 实际工作中：当你修改合约状态的时候，都建议抛一个合约事件
 * - 合约事件消耗 Gas: 合约事件是消耗 gas 的, 数据的存储
*/
contract FunctionEvent {
    uint256 public data;

    constructor(){
    }

    function setData(uint256 _data) internal {
        data = _data;
    }

    function getData() internal view returns (uint256) {
        return data;
    }

    function add(uint256 a, uint256 b) external pure returns (uint256) {
        return a + b;
    }

    function getValue() public virtual returns (uint256) {
        return 10;
    }
}


contract FunctionEventInherit is FunctionEvent {
    constructor(){
    }

    event SetData(uint256 data);

    function getDataInherit() internal view returns (uint256) {
        return getData();
    }

    function getDataInheritAAA() external view returns (uint256) {
        return getDataInherit();
    }

    function setDataXXX(uint256 _data) external {
        setData(_data);
        emit SetData(_data);
    }

    function getValue() public pure override returns (uint256) {
        return 100;
    }

    function foo(uint256 _value) public pure returns (uint256) {
        return _value;
    }

    function foo(string memory _text) public  pure returns (string memory) {
        return _text;
    }

    function foo(uint256 _value, uint256 _value2) public pure returns (uint256) {
        return _value + _value2;
    }
}