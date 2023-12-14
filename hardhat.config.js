
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "Sepolia",
  networks: {
    Sepolia: {
      url: "Your network url",
      accounts: [
        "Your Account private key.",
      ],
    },
  },
};
