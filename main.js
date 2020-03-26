const express = require('express');
const connectDB = require("./db");
const router = require("./src/routers/router");
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const PORT = 3000;
const app = express();
//  app.get('/',(req,res) =>{
//      res.sendFile( __dirname +'/UI/login.html');
//  });
// app.get('/index',(req,res) =>{
//     res.sendFile( '/Users/pro/ProjectAndroid/android_server/webadmin/UI/index.html');
// });
connectDB();

app.use(bodyParser.json());
// app.use(expressValidator());
app.use('/',router);
 app.listen(PORT,()=>{
console.log("Start server port " +PORT);
 });
