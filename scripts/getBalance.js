const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/StreetNft.sol/StreetNft.json");

const tokenAddress = "0xd9E64195a992c20f34543705DcD74cb460Be552F"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xa399e6D0cA23c122c943C2AbD656218AcF25e860";


async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  }
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });