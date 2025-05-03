// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/* 
 *   require: 用于输入验证和状态检查，失败时会返回剩余 gas 并恢复状态
 *   revert: 用于自定义显示抛出错误，携带错误信息，失败时返回所有剩余 gas 并恢复状态
 *   assert: 用于不变量内部和测试断言，失败时消耗所有剩余 gas
*/
error InsufficientBalance(uint requested, uint available);
error NotOwner(address caller);

contract ErrorRevert {
    address public owner;
    uint256 public balance;

    constructor() {
        owner = msg.sender;
        balance = 100;
    }

    /// 示例 1: 使用 require 验证用户输入
    function withdraw(uint amount) public {
        require(amount > 0, "Amount must be > 0");
        require(amount <= balance, "Insufficient balance");
        balance -= amount;
    }

    /// 示例 2: 使用 revert + 自定义错误处理权限
    function onlyOwnerCanCall() public view {
        if (msg.sender != owner) {
            revert NotOwner(msg.sender);
        }
        // 如果是 owner，会继续执行
    }

     /// 示例 3: 使用 assert 检查内部不变量
    function testInvariant() public view {
        // 假设 balance 永远不应该大于 100（写死的业务逻辑）
        assert(balance <= 100); // 如果不满足，将消耗所有 gas
    }
}