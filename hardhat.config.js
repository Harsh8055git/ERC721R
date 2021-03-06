require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/T7zl8dVCWk_5oSZuFpmz9TrZ3BGViK69",
      } 
    }, 
   
  },
  // etherscan: {
  //   // Your API key for Etherscan - rinkeby
  //   // Obtain one at https://etherscan.io/
  //   apiKey: ""
  // }
  etherscan: {
    // Your API key for Etherscan - matic
    // Obtain one at https://etherscan.io/
    apiKey: ""
  }
  

};
