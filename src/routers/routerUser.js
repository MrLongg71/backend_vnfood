var express = require('express');
var routerUser = express.Router();
var user = require('../controllers/UserController');
var auth = require('../middleware/auth_middleware')

routerUser.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/**
 * To create the New user
 */
routerUser.post('/register', user.create);
routerUser.post('/login',user.login);
routerUser.use(auth.isAuth);
routerUser.get('/profile',user.profile);
routerUser.post('/change-password',user.changePassword);




module.exports = routerUser;
