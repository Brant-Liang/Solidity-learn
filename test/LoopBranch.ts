import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

// loadFixture 加速测试，每个测试前自动快照 + 回滚，保持环境干净。

describe("LoopBranch", function() {
    async function deployMappingLearnFixture() {
        const [owner, otherAccount] = await ethers.getSigners();
        const LoopBranch = await ethers.getContractFactory("LoopBranch");
        const loopBranch = await LoopBranch.deploy(40);
        return { loopBranch, owner, otherAccount }
    }

    describe("BalanceSetAndGet", function() {
        it("Should set balance and get balance", async function() {
            const { loopBranch, owner, otherAccount } = await loadFixture(deployMappingLearnFixture);
            console.log("合约部署地址:", await loopBranch.getAddress());
            console.log("before value", await loopBranch.numberVar());
            await loopBranch.setNumberVar(200);
            console.log("after value", await loopBranch.numberVar())
        })
    })

})
