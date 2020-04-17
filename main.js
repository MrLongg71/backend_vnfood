
var createError = require('http-errors');
var express = require('express');
const exphbs = require('express-handlebars');
var path = require('path');
const http = require('http');
const AuthMiddleWare = require('./src/middleware/auth_middleware');
const routerMain = express.Router();
const abc = require('./src/controllers/abc')



//Routes
var usersRouter = require('./src/routers/routerUser');
var catesRouter = require('./src/routers/routerCate');
var productsRouter = require('./src/routers/routerProduct');
var webRouter = require('./src/routers/routerWeb');
var uploadRouter = require('./src/routers/routerUpload');
var ordersRouter = require('./src/routers/routerOrder');

//Configs
require('./src/connection/connection');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public/photo", express.static(path.join('/Users/pro/ProjectAndroid/android_server/webadmin/public/uploads')));


var hbs = exphbs.create({defaultLayout: "" ,extname: '.handlebars'});
app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');
// app.get('/', function (req, res) {
//  res.render('signin',{layout:false});
// });
// app.get('/index',abc.getAllProduct);
// app.get('/list_cate',abc.getAllCate);
// app.get('/edit_product/:id', abc.getProduct);
// app.post('/edit_product', abc.editProduct);


app.use('/',webRouter);
app.use('/api/users', usersRouter);
app.use('/api/cates', catesRouter);
app.use('/api/products', productsRouter.routerProduct);
app.use('/api/orders',ordersRouter);
//upload
app.use('/api/upload', uploadRouter);
//upload
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//  next(createError(404));
// });
//

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(4000, () => console.log(`API running on localhost:${port}`));

module.exports = app;
