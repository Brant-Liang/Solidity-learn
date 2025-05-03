import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

// loadFixture 加速测试，每个测试前自动快照 + 回滚，保持环境干净。

describe("Mapping", function() {
    async function deployMappingLearnFixture() {
        const [owner, otherAccount] = await ethers.getSigners();
        const Mapping = await ethers.getContractFactory("Mapping");
        const mappingLearning = await Mapping.deploy(2300);
        return { mappingLearning, owner, otherAccount }
    }

    describe("BalanceSetAndGet", function() {
        it("Should set balance and get balance", async function() {
            const { mappingLearning, owner, otherAccount } = await loadFixture(deployMappingLearnFixture);
            console.log("合约部署地址:", await mappingLearning.getAddress());
            console.log("owner address===", owner.address);
            // console.log("other address ==== ", otherAccount);
            // console.log("mapping address===", mappingLearning.address);
            const preValue = await mappingLearning.getBalance(owner.address);
            console.log("preBalance ===", preValue)

            const ETHBalance = ethers.parseUnits("1000", "ether"); 
            await mappingLearning.setBalance(owner.address, ETHBalance);

            const value = await mappingLearning.getBalance(owner.address);
            console.log("current balance ===", value)
            console.log("version", await mappingLearning.version());
            console.log("challenge", await mappingLearning.challengePeriod());
        })
    })

})
