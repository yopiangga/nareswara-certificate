require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/EmfZG7PmbLSImNtJkG9szRmmDLFxtuOn',
      accounts: ['c4e8fdc9157d6d8b33c8380eeaf72899265266e40ed79683d0628290156487e9'],
    },
  },
};
