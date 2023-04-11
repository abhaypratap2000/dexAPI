const Usdt = artifacts.require('Usdt.sol');

module.exports = async function (deployer, network) {
  await deployer.deploy(Usdt);
  const deployUsdt = await Usdt.deployed();
  Console.log('Deployed Usdt address', deployUsdt.address);
};
