# 🎉 Welcome to NFT Bridge from Sepolia to Amoy Using FX Portal! 🎉

Hello there, welcome to my project! In this project, we will batch mint NFTs on the Sepolia network and bridge them to the Amoy network using the FX Portal. This project demonstrates the bridging functionality with ERC721A NFTs.

## Description 📚

This project shows how to bridge NFTs between different networks. With the deprecation of the Goerli and Mumbai testnets, we are using Sepolia and Amoy networks. The `StreetNft.sol` contract is ideal for batch minting multiple NFTs in one go.

### Smart Contract Example

The `StreetNft.sol` contract includes the following function for batch minting NFTs:

```solidity
function batchMintNFT(string[] memory nftURLs, string[] memory prompts) public onlyOwner {
    require(nftURLs.length == prompts.length, "Mismatched arrays length");
    uint256 startTokenId = counter;
    uint256 numberOfTokens = nftURLs.length;

    _safeMint(owner(), numberOfTokens);

    for (uint256 i = 0; i < numberOfTokens; i++) {
        _tokenURIs[startTokenId + i] = nftURLs[i];
        _prompts[startTokenId + i] = prompts[i];
    }

    counter += numberOfTokens;
}

```

#### Batch Minting NFTs 🪙
Users can batch mint NFTs on the Sepolia network using the batchMintNFT() function. This function allows the minting of multiple NFTs in one transaction.

#### Bridging NFTs 🔄
Once the NFTs are minted on Sepolia, they need to be bridged to Amoy using FX Portal. This involves approving the deposit and waiting for the bridge process to complete.

#### Checking NFT Balances
Verify the successful bridging by checking the balance of NFTs on the Amoy network after the bridge operation.

#### 😊😊 Installing
Clone the Repository: Fork or clone this repository to your local system.

#### Install Dependencies: 
Ensure you have Node.js installed. Install the project dependencies by running:

npm install
Set Up Environment Variables: Create a .env file and configure it with your RPC URLs and wallet private key.

#### Execution Steps
Compile the Contract:

npx hardhat compile
Deploy the Contract on Sepolia Network:

npx hardhat run scripts/deploy.js --network sepolia
Batch Mint NFTs on Sepolia Network:



npx hardhat run scripts/batchMint.js --network sepolia
Approve NFT Deposit for Bridging:



npx hardhat run scripts/approveDeposit.js --network sepolia
Wait for the Bridging Process: Wait for 20-30 minutes for the NFTs to be bridged to the Amoy network. Once completed, copy the contract address on the Amoy network.

#### Check NFT Balance on Amoy Network: 
Deploy and run getBalance.js on the Amoy network to check the total number of NFTs received:



npx hardhat run scripts/getBalance.js --network amoy
#### 👋👋 Join in!
Got a great idea? We'd love to see your contribution! Feel free to submit an issue or open a pull request. 😁😁

#### ⚠️⚠️ Help
Ensure that you have some faucet tokens on both networks:

Sepolia Faucet: Sepolia Faucet
Amoy Faucet: Amoy Faucet (Joining Polygon Discord required)
If you encounter issues with the Solidity compiler version, please check the version compatibility. 😁

👤👤 Authors
Hey there! I'm Mannu Baveja, the creator of this project.

Metacrafter ID: bavejamannu (bavejamannu@gmail.com)
