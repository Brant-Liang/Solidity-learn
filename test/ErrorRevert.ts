import { expect } from "chai";
import { ethers } from "hardhat";

describe("ErrorRevert", function () {
    it("should revert with require on invalid input", async function () {
        const [owner] = await ethers.getSigners();
        const Demo = await ethers.getContractFactory("ErrorRevert");
        const demo = await Demo.deploy();

        await expect(demo.withdraw(0)).to.be.revertedWith("Amount must be > 0");
    });

    it("should revert with custom error on unauthorized access", async function () {
        const [owner, user] = await ethers.getSigners();
        const Demo = await ethers.getContractFactory("ErrorRevert");
        const demo = await Demo.deploy();

        await expect(demo.connect(user).onlyOwnerCanCall())
            .to.be.revertedWithCustomError(demo, "NotOwner")
            .withArgs(user.address);
    });

    it("should fail assert if balance invariant breaks", async function () {
        const Demo = await ethers.getContractFactory("ErrorRevert");
        const demo = await Demo.deploy();

        // 手动修改 balance 来模拟不变量失效（这里只是展示）
        // await ethers.provider.send("hardhat_setStorageAt", [
        //     demo.address,
        //     // balance 变量所在的槽位是 slot 1
        //     "0x1",
        //     ethers.utils.hexZeroPad("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 32)
        // ]);

        // 调用 assert 触发 panic
        await expect(demo.testInvariant()).to.be.reverted;
    });
});