const express = require('express');
const routerMain = express();
const AuthMiddleWare = require('../middleware/auth_middleware');
path = require('path');
var app = express();
const userController = require('../controllers/UserController');
var fs = require('fs');
const exphbs = require('express-handlebars');


//handlebars



// routerMain.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });
//

// routerMain.get('/abc',(req,res) =>{
//     let reqPath = path.join(__dirname, '../../UI/login.html');
//     res.sendFile( reqPath);
//     if(req.url === '/abc'){
//         console.log("sbc")
//         res.writeHead(301,{"Location": "http://" + req.headers['host']+'/index'});
//         return res.end();
//     }else {
//         console.log("xee")
//
//         let reqPath = path.join(__dirname, '../../UI/login.html');
//
//         fs.readFile(reqPath,
//             function(err,data){
//                 res.write(data);
//                 return res.end();
//             })
//     }
//
// });
//
// routerMain.post('/api/users/login',(req,res) =>{
//     userController.login(req,res,null);
//     console.log(res.statusCode);
//     if(res.statusCode === 200){
//         console.log('thanh comg')
//     }else if(res.statusCode === 404){
//         console.log('that bai');
//     }
//
// });
// routerMain.use(AuthMiddleWare.isAuth);


routerMain.get('/', function (req, res, next) {
    console.log("dsds")
    // let reqPath = path.join('/login');

    res.render('login');

});

routerMain.get('/index',(req,res) =>{
    let reqPath = path.join(__dirname, '../../UI/index.html');

    res.sendFile( reqPath);
});
// var http = require('http');
// var fs = require('fs');
// var autoMovePage = function(res){
//     if(res.statusCode === 200){
//         res.redirect('/index');
//     }
// }()
module.exports =routerMain;
