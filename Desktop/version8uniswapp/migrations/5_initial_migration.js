const Dai = artifacts.require('Dai.sol');

module.exports = async function (deployer , network) {
  await deployer.deploy(Dai);
  const deployDai = await Dai.deployed();
  Console.log("Deployed Dai address" , deployDai.address);
};
