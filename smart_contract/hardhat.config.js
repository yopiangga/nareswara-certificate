require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/EmfZG7PmbLSImNtJkG9szRmmDLFxtuOn',
      accounts: ['ccb3e439fef177d7ad5eb494e7ad605af3b5bcda0a2d4d2720e488a8e642e5bc'],
    },
  },
};
