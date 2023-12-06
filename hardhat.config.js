// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "Sepolia",
  networks: {
    Sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/32CXOsz87A94SgOhloTJMEJKAlw49xcV",
      accounts: [
        "2356dac5654d4a308d8dc1e354e97811ea1f9510fbe5298f72e9575bc5a2a91b",
      ],
    },
  },
};
