const Web3 = require("web3");
const Tran = require('ethereumjs-tx');
const EEAClient = require('web3-eea');
const uniswapv2Router = require("../build/contracts/UniswapV2Router.json");
const chainId = 5777;

const uniswapV2Routeraddress = '0x41CBE0218801Ea4ed05174510A27889e8bD8E0Af';
const web3 = new EEAClient(new Web3('HTTP://127.0.0.1:7545'), chainId);
const Tx = Tran.Transaction;
const uniswapV2Router_Abi = uniswapv2Router.abi;
const deployedUniswapv2router = new web3.eth.Contract(uniswapV2Router_Abi , uniswapV2Routeraddress)


exports.addLiquidity = async(req , res)=>{
    try {
        const privatekey = req.body.privatekey;
        let account = web3.eth.accounts.privateKeyToAccount(`0x${privatekey}`);
        const nonce = await web3.eth.getTransactionCount(account.address,'pending');
        const gasprice = await web3.eth.getGasPrice();
        const buffer1 = Buffer.from(privatekey , "hex");
        const data = await deployedUniswapv2router.methods.addLiquidity(
          req.body.tokenA,
          req.body.tokenB,
          req.body.amountADesired,
          req.body.amountBDesired,
          req.body.amountAMin,
          req.body.amountBmin,
          req.body.to,
          req.body.deadline
        ).encodeABI();
        const transaction = {
          to: uniswapV2Routeraddress,
          gas: web3.utils.toHex(1000000),
          gasPrice: web3.utils.toHex(gasprice),
          data: data,
          nonce: web3.utils.toHex(nonce),
        };
        const signedtx = await web3.eth.accounts.signTransaction(transaction,privatekey);
        const reciept = await web3.eth.sendSignedTransaction(signedtx.rawTransaction);
        console.log(reciept);
        res.status(200).send({ message: 'Liquidity Added successfully', reciept: reciept });
       } catch (error) {
        console.log(error)
         res
           .status(500)
           .send({ message: 'Something went wrong', error: error });
    }
}

exports.addLiquidityETH = async(req , res)=>{
  try {
    const privatekey = req.body.privatekey;
    const account = web3.eth.accounts.privateKeyToAccount(`0x${privatekey}`);
    const nonce = await web3.eth.getTransactionCount( account.address, 'pending' );
    const gasprice = await web3.eth.getGasPrice();
    const buffer1 = Buffer.from(privatekey, 'hex');
    const data = await deployedUniswapv2router.methods
      .addLiquidityETH(
        req.body.token,
        req.body.amountTokenDesired,
        req.body.amountTokenMin,
        req.body.to,
        req.body.deadline,
        req.body.value
      )
      .encodeABI();
    const transaction = {
      to: uniswapV2Routeraddress,
      gas: web3.utils.toHex(1000000),
      gasPrice: web3.utils.toHex(gasprice),
      data: data,
      nonce: web3.utils.toHex(nonce),
      value : parseInt(req.body.value)
    };
      const signedtx = await web3.eth.accounts.signTransaction(
        transaction,
        buffer1
      );
      const reciept = await web3.eth.sendSignedTransaction(
        signedtx.rawTransaction
      );
      console.log(reciept);
      res
        .status(200)
        .send({ message: 'AddLiquidityETH Added successfully', receipt: receipt });
} catch (error) {
    console.log(error);
  }
}

exports.removeLiquidity = async(req , res)=>{
  try {
    const privatekey = req.body.privatekey;
    const address = web3.eth.accounts.privateKeyToAccount(`0x${privatekey}`);
    const nonce = await web3.eth.get.getTransactionCount(account.address,'pending');
    const gasprice = await web3.eth.getGasprice();
    const buffer1 = Buffer.from(privatekey, 'hex');
    const data = await deployedUniswapv2router.method.removeLiquidity(
      req.body.tokenA,
      req.body.tokenB,
      req.body.amountBDesired,
      req.body.amountAMin,
      req.body.amountBmin,
      req.body.to,
      req.body.deadline
      ).encodeABI();
      const transaction = {
        to: uniswapV2Routeraddress,
        gas: web3.utils.toHex(1000000),
        gasPrice: web3.utils.toHex(gasprice),
        data: data,
        nonce: web3.utils.toHex(nonce),
      };
       const signedtx = await web3.eth.accounts.signTransaction(
         transaction,
         buffer1
       );
       const reciept = await web3.eth.sendSignedTransaction(
         signedtx.rawTransaction
       );
       console.log(reciept);
       res
         .status(200)
         .send({
           message: 'removeLiquidity successfully',
           receipt: receipt,
         });
    

    
  } catch (error) {
    console.log(error);
  }
}


exports.testcall = async(req , res)=>{
    try {
       res.send("hello"); 
    } catch (error) {
        console.log(error);
    }
}