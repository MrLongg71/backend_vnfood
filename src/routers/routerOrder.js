const express = require('express');
const routerOrders = express.Router();
const orders = require('../controllers/OrderController');
const AuthMiddleWare = require('../middleware/auth_middleware');


routerOrders.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

routerOrders.use(AuthMiddleWare.isAuth);

routerOrders.post('/add',orders.addOrder);


module.exports = routerOrders;
