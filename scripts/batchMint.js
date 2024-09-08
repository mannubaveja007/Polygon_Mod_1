const tokenContractJSON = require("../artifacts/contracts/StreetNft.sol/StreetNft.json");
require('dotenv').config();

const tokenAddress = "0x90BF9C7759776F38F55824f33A8d2e8bb83388bb"; // deployed address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xa399e6D0cA23c122c943C2AbD656218AcF25e860";

async function main() {
  const nft = await ethers.getContractAt("StreetNft", tokenAddress);
  const tokenURIs = [
    "ipfs://QmQ7uCsgKQJMJQcoCpUgh2LovhKSDKneEJUnvNPq1B2gvm",
    "ipfs://QmVwqG9FGZYu84SeAGHj4vf8ZBErMZFmNTbJ6ULqRFsAvv",
    "ipfs://QmPLjEb492LSUFtDw2ivipFpYp9nh4kwiBRsJdPrx6chZ6",
    "ipfs://QmUinmshL2tEoKQiZg7i6Kq5o7wRQXt2nzKUrMGnQ2XVkB",
    "ipfs://QmSG3cPk3Wxv7eoWX6ms9UJJ1xUq9Lg4xyhxYDQE3kE9Xe"
  ];

  const prompts = [
    "Create a futuristic NFT of a bustling spaceport with neon lights and flying cars. A young alien child with a digital injury is seated on a sleek, reflective platform. A futuristic robot assistant is offering a glowing repair tool. Add holographic ads and shimmering space foliage.",

    "Design a neon-drenched cyber cityscape at twilight. A 10-year-old with a holographic injury sits on a high-tech, transparent sidewalk. A 15-year-old girl in a glowing jumpsuit helps with a virtual first aid kit. Include animated digital billboards and radiant urban greenery.",

    "Generate a high-tech underwater city with glowing coral and floating vehicles. A young marine creature with a digital leg injury is seated on a translucent walkway. A futuristic aquatic assistant is helping with a luminescent repair device. Add holographic sea plants and reflections.",

    "Visualize a sleek, futuristic desert colony with floating domes and neon sands. A 10-year-old explorer with a digital knee injury sits on a glowing dune. A 15-year-old in a high-tech suit provides assistance using a holographic medical kit. Include illuminated alien flora and shimmering sand.",

    "Craft a futuristic, neon-lit jungle with hovering trees and digital wildlife. A young adventurer with a holographic injury sits on a reflective, glowing path. A 15-year-old companion in advanced gear helps with a virtual first aid kit. Add dynamic digital foliage and vibrant light effects."
  ];

  await nft.batchMintNFT(tokenURIs, prompts);
  console.log(`Minted ${tokenURIs.length} NFTs to ${walletAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
