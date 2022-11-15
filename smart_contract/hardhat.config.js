require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/EmfZG7PmbLSImNtJkG9szRmmDLFxtuOn',
      accounts: ['da76f38beab9275a703c0a31faefcea9422a6013934a1714e8ee7ee099d7b69f'],
    },
  },
};
