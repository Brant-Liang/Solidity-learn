import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// buildModule 定义部署计划

const LoopBranchModule = buildModule("LoopBranchModule", (m) => {
    const loopBranch = m.contract("LoopBranch", [50]);
    return { loopBranch };
})

// LoopBranch 会根据 LoopBranch.sol 自动找到 ABI 和 Bytecode。

export default LoopBranchModule;
