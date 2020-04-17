const express = require('express');
const routerCate = express.Router();
const AuthMiddleWare = require('../middleware/auth_middleware');
const cate = require('../controllers/CateController');

routerCate.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// routerCate.use(AuthMiddleWare.isAuth);
routerCate.post('/add',cate.add);
routerCate.delete('/delete',cate.delete);
routerCate.put('/update',cate.update);
routerCate.get('/list',cate.list);
routerCate.get('/list_banner',cate.listBanner);

module.exports = routerCate;
