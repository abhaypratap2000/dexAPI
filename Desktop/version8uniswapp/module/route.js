const controller = require("./controller");
const coinController = require("./coinController")
const express = require('express');

const router = express.Router();

router.get('/testcall',controller.testcall);
router.get('/addLiquidity',controller.addLiquidity);
router.get('/addLiquidityETH',controller.addLiquidityETH);
router.get('/approveDai' , coinController.ApproveDai);
router.get('/approveUsdt',coinController.ApproveUsdt);
router.get('/inithash',coinController.InitHash);


module.exports = router;