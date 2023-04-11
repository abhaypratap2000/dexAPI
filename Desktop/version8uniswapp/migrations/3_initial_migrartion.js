var UniswapV2Router = artifacts.require('UniswapV2Router.sol');

module.exports = async function (deployer, network) {
  await deployer.deploy(
    UniswapV2Router,
    '0x17FC99c3D84678FBc82d62AE353322f93E549FdC',
    '0xa19bcAC50D0F27a741A0919deD2ca10be0545522'
  );
  const deployUniswapV2Router = await UniswapV2Router.deployed();
  console.log(
    'UniswapV2Factory Contract Address:',
    deployUniswapV2Router.address
  );
};
