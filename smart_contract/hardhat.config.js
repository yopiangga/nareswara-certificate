require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/EmfZG7PmbLSImNtJkG9szRmmDLFxtuOn',
      accounts: ['ce957933ba8de6036581ce935395b13d9337ab360c937a4a199be5b6ac4e3b7e'],
    },
  },
};
