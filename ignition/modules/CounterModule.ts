import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// buildModule 定义部署计划

const CounterModule = buildModule("CounterModule", (m) => {
    const counter = m.contract("Counter");
    return { counter };
})

// counter 会根据 Counter.sol 自动找到 ABI 和 Bytecode。

export default CounterModule;
