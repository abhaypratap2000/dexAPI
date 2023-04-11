const Web3 = require('web3');
const EEAClient = require('web3-eea');
const Dai = require('../build/contracts/DAI.json');
const Usdt = require('../build/contracts/USDT.json');
const factory = require('../build/contracts/UniswapV2Factory.json');
const chainId = 5777;
const DaiContractAddress = '0xBAb1231762E1b3238724b79962f601a4dBe8Aa34';
const UsdtContractAddress = '0x8375f36E6DffbB4d4C6d93D0C739fA627663Fe7c';
const FactoryContractAddress = '0xfF5efD5288E5D53e19b29dFf8DB4FA47B89C6501';
const web3 = new EEAClient(new Web3('HTTP://127.0.0.1:7545'), chainId);
const DaiAbi = Dai.abi;
const UsdtAbi = Usdt.abi;
const FactoryAbi = factory.abi;
const deployedDai = new web3.eth.Contract(DaiAbi , DaiContractAddress);
const deployedUsdt = new web3.eth.Contract(UsdtAbi , UsdtContractAddress);
const deployedFactory  = new web3.eth.Contract(FactoryAbi , FactoryContractAddress);

exports.InitHash = async(req , res)=>{
  try {
    const data = await deployedFactory.methods.InitHash().call();
    res.send(data);
    
  } catch (error) {
    console.log(error);
  }
}
exports.ApproveDai = async(req , res)=>{
    try {
        const data = await deployedDai.methods
          .approve(req.body.address, req.body.amount)
          .send({ from: '0xf1e4731C5E9493535a929F4627EE7c068E9EfE38' });
         res.status(200).send({
           message: 'Approved',
           data: data,
         });
    } catch (error) {
        console.log(error);
    }
}

exports.ApproveUsdt = async (req, res) => {
  try {
    const data = await deployedUsdt.methods
      .approve(req.body.address, req.body.amount)
      .send({ from: '0xf1e4731C5E9493535a929F4627EE7c068E9EfE38' });
    res.status(200).send({
      message: 'Approved',
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};