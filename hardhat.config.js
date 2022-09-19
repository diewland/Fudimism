/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
   //solidity: "0.8.1",
   solidity: "0.8.4",
   defaultNetwork: "kovan",
   networks: {
      hardhat: {},
      kovan: {
         url: "https://kovan.optimism.io/",
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
      op: {
         url: "https://opt-mainnet.g.alchemy.com/v2/MnmlgcGeD8FPWiy_0SHlubv1htTHIB1g",
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
      arbi: {
         url: "https://arb-mainnet.g.alchemy.com/v2/9yf9ZWGfxFQVo9f9amqwD36nH1b8-7VW",
         accounts: [`0x${process.env.PRIVATE_JNS}`]
      },
      nova: {
         url: "https://winter-intensive-county.nova-mainnet.discover.quiknode.pro/5ce4863d29c07cdd0112d2a15992cf3f4b420615/",
         accounts: [`0x${process.env.PRIVATE_JNS}`]
      }
   },
}

