var Windra = artifacts.require('Windra.sol');

module.exports = async function (deployer, network) {
  await deployer.deploy(Windra, 'Windra', 'WIND');
  const deployWindra = await Windra.deployed();
  console.log('Windra Contract Address:', deployWindra.address);
};

