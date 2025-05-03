import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

// loadFixture 加速测试，每个测试前自动快照 + 回滚，保持环境干净。

describe("FunctionEvent", function() {
    async function deployFuntionEventFixture() {
        const [owner, otherAccount] = await ethers.getSigners();
        const FunctionEvent = await ethers.getContractFactory("FunctionEvent");
        const functionEvent = await FunctionEvent.deploy();
        return { functionEvent, owner, otherAccount }
    }

    describe("FunctionEvent", function() {
        it("test function", async function() {
            const { functionEvent, owner, otherAccount } = await loadFixture(deployFuntionEventFixture);
            // await functionEvent.getValue();
            console.log(await functionEvent.data());

            console.log(await functionEvent.getValue());
        })
    })

})

describe("FunctionEventInherit", function() {
    async function deployFunctionEventInheritFixture() {
        const [owner, otherAccount] = await ethers.getSigners();
        const FunctionEventInherit = await ethers.getContractFactory("FunctionEventInherit");
        const functionEventInherit = await FunctionEventInherit.deploy();
        return { functionEventInherit, owner, otherAccount }
    }
    it("test function", async function() {
        const { functionEventInherit, owner, otherAccount } = await loadFixture(deployFunctionEventInheritFixture);
        // await functionEvent.getValue();
        console.log(await functionEventInherit.data());

        console.log(await functionEventInherit.getValue());
    })
})