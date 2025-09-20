import hre from "hardhat";

async function main() {
  const judgeAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Using the first account from the local Hardhat node
  const PrizeEscrow = await hre.ethers.getContractFactory("PrizeEscrow");
  const prizeEscrow = await PrizeEscrow.deploy(judgeAddress);

  // await prizeEscrow.deployed(); // This is deprecated

  console.log("PrizeEscrow deployed to:", prizeEscrow.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});