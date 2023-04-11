var UniswapV2Factory = artifacts.require('UniswapV2Factory.sol');

module.exports = async function (deployer, network) {
  await deployer.deploy(
    UniswapV2Factory,
    '0xf1e4731C5E9493535a929F4627EE7c068E9EfE38'
  );
  const deployUniswapV2Factory = await UniswapV2Factory.deployed();
  console.log(
    'UniswapV2Factory Contract Address:',
    deployUniswapV2Factory.address
  );
};
