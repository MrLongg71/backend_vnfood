const express = require('express');
const routerProduct = express.Router();
const product = require('../controllers/ProductController');
const AuthMiddleWare = require('../middleware/auth_middleware');


routerProduct.get('/', product.list);

routerProduct.use(AuthMiddleWare.isAuth);

routerProduct.post('/add', product.add);
routerProduct.get('/list', product.list);
routerProduct.get('/new_list', product.newList);
routerProduct.get('/list_paging', product.listPaging);
routerProduct.get('/list/:id', product.listForCate);
routerProduct.post('/add_review', product.addReview);
routerProduct.get('/list_review', product.listReview);
routerProduct.get('/images/:id', product.listImages);
routerProduct.get('/search', product.listSearch);


module.exports = {routerProduct};
