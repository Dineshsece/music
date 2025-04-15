

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account : ", deployer.address);

  const NFTMarketPlaceFactory = await ethers.getContractFactory("NFTMarketPlace");
  const NFTMarketPlace = await NFTMarketPlaceFactory.deploy();

  await NFTMarketPlace.deployed();

  console.log("Contract Address :", NFTMarketPlace.address);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
