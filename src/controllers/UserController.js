const User = require('../model/UserModel');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

exports.register = function(req, res, next){

    console.log("register user");
    // User.findOne({email: req.body.email}, (err, user) => {
        console.log("register user");
        // if(user == null){

            bcrypt.hash(req.body.password, 10, function(err, hash){
                if (err) {return next(err);}
                const user = new User();
                console.log("register user" + req.body.email);

                user.userId = uuid.v1();
                user.email = req.body.email;
                user.name = req.body.name;
                user.phone = req.body.phone;
                user.address = req.body.address;
                user.created_at = Date.now();
                user.update_at = Date.now();

                user.role = 'user';
                user.password = hash;
                user.save((err, result) => {
                    if(err) {return res.json({err})}
                    res.json({user: result})
                })
            })
        // }else{
        //     res.json({err: 'Email has been used'})
        // }
    // })
}
