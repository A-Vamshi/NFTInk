const hre = require('hardhat');

async function main() {
    const NAME = "AI Generated NFT";
    const SYMBOL = "AI_NFT";
    const COST = hre.ethers.parseUnits("1", "ether");

    const NFT = await hre.ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(NAME, SYMBOL, COST);
    await nft.waitForDeployment();

    console.log(`NFT contract deployed at ${await nft.getAddress()}`);
}

main().catch((error) => {
    console.error("NFT deploy error in scripts: ",error);
    process.exitCode = 1;
});
