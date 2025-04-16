import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter Contract", function () {
  it("should start from 0 and increment correctly", async function () {
      const Counter = await ethers.getContractFactory("Counter");
      const counter = await Counter.deploy(); //向本地链发送部署交易，返回合约实例。
      await counter.waitForDeployment();
       // 初始值应为 0
      expect(await counter.getCount()).to.equal(0);

      // 调用 increment()
      const tx = await counter.increment();
      await tx.wait();

      // 增加后应该为 1
      expect(await counter.getCount()).to.equal(1);
    });
});
