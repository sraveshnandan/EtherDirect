//Contact Deploy main function
async function main() {
  // Get the contract factory
  const Transactions = await hre.ethers.getContractFactory("Transactions");

  // Deploy the contract
  const transactions = await Transactions.deploy();

  // Wait for the contract to be mined
  await transactions.deployed();

  // Log the deployed contract address
  console.log("Contract deployed to:", transactions.address);
}

const runMainFunction = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Initiating Deployment
runMainFunction();
