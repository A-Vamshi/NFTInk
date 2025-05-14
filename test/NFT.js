const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.parseUnits(n.toString(), 'ether');
}

describe("NFT", () => {
    let deployer, minter;
    let nft;

    const NAME = "AI Generated NFT";
    const SYMBOL = "AI_NFT";
    const URL = "https://ipfs.io/ipfs/bafyreid4an6ng6e6hok56l565eivozra3373bo6funw3p5mhq5oonew6u4/metadata.json";
    const COST = tokens(1);

    beforeEach(async () => {
        // Setup accounts
        [deployer, minter] = await ethers.getSigners();

        // Deploy NFT
        const NFT = await ethers.getContractFactory("NFT");
        nft = await NFT.deploy(NAME, SYMBOL, COST);

        const transaction  = await nft.connect(minter).mint(URL, {value: COST});
        await transaction.wait();
    })

    describe("Deployment", () => {
        // Checks if owner is correct
        it("Returns owner", async () => {
            const result = await nft.owner();
            expect(result).to.be.equal(deployer.address);
        })

        // Checks if cost is correct
        it("Returns cost", async () => {
            const result = await nft.cost();
            expect(result).to.be.equal(COST);
        })
    })

    describe('Minting', () => {
        // Returns owner of minter
        it('Returns owner of mint', async () => {
        const result = await nft.ownerOf("0");
        expect(result).to.be.equal(minter.address);
        })

        it('Returns URI', async () => {
        const result = await nft.tokenURI("0");
        expect(result).to.be.equal(URL);
        })

        it('Updates total supply', async () => {
        const result = await nft.totalSupply();
        expect(result).to.be.equal("1");
        })
    })

    describe('Withdrawing', () => {
        let balanceBefore

        beforeEach(async () => {
            balanceBefore = await ethers.provider.getBalance(deployer.address)

            const transaction = await nft.connect(deployer).withdraw()
            await transaction.wait()
        })

        it('Updates the owner balance', async () => {
        const result = await ethers.provider.getBalance(deployer.address)
        expect(result).to.be.greaterThan(balanceBefore)
        })
    })
})