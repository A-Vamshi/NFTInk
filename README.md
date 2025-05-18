# 🖋️ NFTInk

**NFTInk** is a blockchain-based DApp that allows users to generate custom tattoo designs using AI and mint them as NFTs. By connecting your MetaMask wallet, you can submit a prompt, receive a unique AI-generated tattoo image, and claim ownership by minting it on-chain for **1 ETH**.

---

## 🚀 Features

- 🔐 Connect your MetaMask wallet
- ✍️ Submit a creative prompt for a tattoo
- 🎨 AI generates a unique tattoo image based on the prompt
- 🧬 Image is automatically converted into a unique NFT
- 💸 Mint the NFT to your wallet by paying **1 Ether**

---

## 🛠️ Tech Stack

- **Frontend:** Next.js
- **Wallet Integration:** MetaMask + Ethers.js 
- **AI Image Generation:** Google Gemini
- **Blockchain:** Solidity + Ethereum Smart Contracts
- **NFT Standard:** ERC-721 by openzeppelin
- **Backend:** Node.js / Express / IPFS for image storage

---

## 🔗 How It Works

1. Connect your MetaMask wallet to the DApp.
2. Enter a prompt describing your tattoo idea.
3. The AI generates a custom image based on your input.
4. The image is uploaded and converted into an NFT.
5. Pay **1 ETH** to mint and claim ownership of your tattoo NFT.

---

## 💡 Use Cases

- Tattoo inspiration and personalization
- Collectible and tradable digital tattoo art
- Artist-client collaboration for unique designs

---

## 📄 Smart Contract

- Standard: ERC-721
- Network: Ethereum (can be changed to Polygon/Testnet for dev)
- Contract handles:
    - Minting new NFTs
    - Ownership verification
    - Payment of 1 ETH to mint

## 📷 Demo
<img src="/images/1.png" alt="screenshot" width="200"/> <img src="/images/2.png" alt="screenshot" width="200"/>
<img src="/images/3.png" alt="screenshot" width="200"/>
<img src="/images/4.png" alt="screenshot" width="200"/>
<img src="/images/5.png" alt="screenshot" width="200"/>
<img src="/images/6.png" alt="screenshot" width="200"/>
<img src="/images/7.png" alt="screenshot" width="200"/>
<img src="/images/8.png" alt="screenshot" width="200"/>
<img src="/images/9.png" alt="screenshot" width="200"/>


---

## 📦 Installation & Running Locally

```bash
git clone https://github.com/your-username/NFTInk.git
cd NFTInk
npm install
npx hardhat test
npx hardhat node
/* Add your harhat accounts to your metamask */
npx hardhat run ./scripts/deploy.js --network localhost
npm run dev

```

## 🛡️ License

MIT License