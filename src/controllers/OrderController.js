const User = require('../model/UserModel');
const userService = require('../services/user');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('../helpers/jwt');


exports.addOrder =  function (req, res, next) {
    // console.log(JSON.parse(req.body));
    var json = '{"amount":1,"price":100.0,"productIdl":"ee1ab1b0-774f-11ea-8d5e-ed60b9275ea8"},{"amount":1,"price":500.0,"productIdl":"3175bc70-7750-11ea-8d5e-ed60b9275ea8"}'
    const obj = JSON.parse(json);
    console.log(obj[0].productIdl)


};
