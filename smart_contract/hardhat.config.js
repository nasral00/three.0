// https://eth-ropsten.alchemyapi.io/v2/KfPtWeX9Oau3CnJeHx83g6x40HUtrYMv
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.12",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/KfPtWeX9Oau3CnJeHx83g6x40HUtrYMv",
      accounts: [
        "69734453db670f1d83290947809c9def1cdb90305e81163da3f2b892b7c45259",
      ],
    },
  },
};
