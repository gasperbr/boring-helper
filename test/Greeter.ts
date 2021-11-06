import { ethers } from "hardhat";
import { expect } from "chai";

describe("BH", function () {
  it("Should work", async function () {
    console.log((await ethers.provider.getBalance("0x829BD824B016326A401d083B33D092293333A830")).toString());
    const BH = await ethers.getContractFactory("BoringHelperV1");
    const bh = await BH.deploy(
      "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd",
      "0xe11fc0b43ab98eb91e9836129d1ee7c3bc95df50",
      "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac",
      "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
      "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
      "0xf5bce5077908a1b7370b9ae04adc565ebd643966"
    );
    console.log(bh.address);
    console.log(await bh.test());
    // console.log(await bh.getUIInfo("0x4bb4c1b0745ef7b4642feeccd0740dec417ca0a0", [], "0xdac17f958d2ee523a2206206994597c13d831ec7", ["0x2cba6ab6574646badc84f0544d05059e57a5dc42"]));
    console.log(await bh.getBalances("0x4bb4c1b0745ef7b4642feeccd0740dec417ca0a0", [bh.address, bh.address]));
  }).timeout(880000);
});
