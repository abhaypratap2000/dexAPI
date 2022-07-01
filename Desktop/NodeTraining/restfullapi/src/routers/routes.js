const experss= require('express');
const rout = experss.Router()
const control = require("../Controler/controler.js")
rout.post("/students",control.entrydata);
rout.get('/student',control.getdata);
module.exports = rout;



