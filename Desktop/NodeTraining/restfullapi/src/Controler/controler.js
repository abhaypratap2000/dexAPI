const data = require("../models/student.js");

const entrydata = (req,res)=>{
    console.log(req.body);
    const user = new data(req.body);
    user.save().then(()=>{
        res.status(201).send(user);

    }).catch((e)=>{
        res.status(400).send(e);
    })
    

}


const getdata = (req ,res)=>{
    res.send("Hello from the post sid dfefde");
}
module.exports= {entrydata,getdata};