import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// buildModule 定义部署计划

const MappingModule = buildModule("MappingModule", (m) => {
    const Mapping = m.contract("Mapping", [100]);
    return { Mapping };
})

// counter 会根据 Counter.sol 自动找到 ABI 和 Bytecode。

export default MappingModule;
