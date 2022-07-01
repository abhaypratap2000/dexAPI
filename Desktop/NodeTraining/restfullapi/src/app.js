const express = require("express");
const Student = require("./models/student");
const path = require("path");
require("./db/dbconn");
const router =require("./routers/routes.js");

const app = express();
 
const port = process.env.PORT || 5500;
// process env port ||3000 means : whatever is in the environment variable PORT or 3000 if there's nothing there so you pass that to app. Listen , or to app.set('port'.....), and that make s your server able to accept a "What port to listen on " parameter from the environment.

const static_path = path.join(__dirname , "../public");
app.use(express.static(static_path));

// static path. join use to serve the html in express.

app.use (express.json());
app.use("/",router);


app.listen(port , ()=>{
    console.log(`Connection sucessfull on ${port}`)
})