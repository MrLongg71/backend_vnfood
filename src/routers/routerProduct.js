const express = require('express');
const routerProduct = express.Router();
const product = require('../controllers/ProductController');
const AuthMiddleWare = require('../middleware/auth_middleware');


routerProduct.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

routerProduct.use(AuthMiddleWare.isAuth);

routerProduct.post('/add',product.add);
routerProduct.get('/list',product.list);
routerProduct.post('/add_review',product.addReview);
routerProduct.get('/list_review',product.listReview);


module.exports = routerProduct;
