async function main() {
  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = await NFT.deploy();
  await nft.deployed();

  console.log("MyNFT deployed to:", nft.address);
}

main().catch(console.error);
