const User = require('../model/UserModel');
const userService = require('../services/user');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('../helpers/jwt');


exports.create = function (req, res, next) {

    //check email exits
    User.findOne({email: req.body.email}).exec(async (err, user) => {
        if (err) return res.status(401).json(err);
        if (user) return res.status(404).json({statusCode: res.statusCode, err: 'Email đã tồn tại!'});
        if (!user) {
            const user = new User(req.body);
            user.userId = uuid.v1();
            user.email = req.body.email;
            user.name = req.body.name;
            user.phone = req.body.phone;
            user.address = req.body.address;
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Ho_Chi_Minh'
            });
            user.created_at = nDate;
            user.update_at = nDate;
            user.avatar = "";
            user.role = 'user';
            await bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    res.status(401).send({statusCode: res.statusCode, err: 'Mã hoá mật khẩu thất bại!'})
                } else {
                    user.password = hash;
                    userService.createUser(user, function (error, response) {
                        if (response) {
                            res.status(201).send(response);
                        } else if (error) {
                            res.status(400).send(error);
                        }
                    });
                }
            });


        }
    });

};
exports.login = (req, res, next) => {
    console.log("user login " + req.body.email);
    User.findOne({email: req.body.email}).exec(function (err, user) {
        if (err) return res.json(err);

        if (!user) return res.status(404).json({statusCode: res.statusCode, err: 'Tài khoản không tồn tại!'});

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) return res.json(err);
            if (result) {
                jwt.generateToken(user).then((token) => {
                    user.token = token;
                    res.status(200).json({statusCode: res.statusCode, data: user});
                }).catch((err) => {
                    console.log("tokennn" + err);
                    res.status(401).json({statusCode: res.statusCode, err: 'Cấp token thất bại! ' + err})

                })
            } else {
                res.status(404).send({statusCode: res.statusCode, err: 'Tài khoản hoặc mật khẩu không đúng! ' + err})

            }
        });
    });

};
exports.profile = (req, res, next) => {
    userService.findUser(req.userId, (err, response) => {
        if (err) return res.status(401).json(err);
        return res.status(200).json({statusCode: res.statusCode, data: response});
    })
};
exports.changePassword = (req, res, next) => {
    console.log(req.body.newPassword)
    console.log(req.body.oldPassword)
    userService.findUser(req.userId, async (err, user) => {
        if (err) return res.status(401).json(err);
        await bcrypt.compare(req.body.oldPassword, user.password, (err, result) => {
            if (err) return res.json(err);
            if (result) {
                bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                    if (err) {
                        res.status(401).send({statusCode: res.statusCode, err: 'Mã hoá mật khẩu thất bại!'})
                    } else {
                        userService.updatePassword(user.userId, hash, (err, result) => {
                            if (err) {
                                res.status(404).send({statusCode: res.statusCode, err: 'Có lỗi xảy ra ! ' + err})
                            } else {
                                res.status(200).send({statusCode: res.statusCode, data: 'Đổi mật khẩu thành công ! '})

                            }

                        })
                    }
                });

            } else {
                res.status(404).send({statusCode: res.statusCode, err: 'Mật khẩu không đúng! ' + err})

            }
        });

    })
};
