const Cate = require('../model/CateModel');
const cateService = require('../services/cate');
const uuid = require('uuid');


exports.add = function (req, res, next) {
    const cate = new Cate(req.body);
    cate.cateId = uuid.v1();
    cate.name = req.body.name;
    cate.images = req.body.images;
    const nDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh'
    });
    cate.created_at = nDate;
    cate.update_at = nDate;
    cate.delete_at = null;


    cateService.createCate(cate, function (error, response) {
        if (response) {
            res.status(201).send({statusCode: res.statusCode, data: response});
        } else if (error) {
            res.status(400).send({statusCode: res.statusCode, err: 'Thêm thất bại! ' + error});
        }
    });
};
exports.delete = function (req, res) {
    cateService.deleteCate(req.body.cateId, function (err, response) {
        if (response) {
            res.status(201).json({statusCode: res.statusCode, msg: 'Delete thành công!'});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, err: "Delete thất bại! " + err});
        }
    })
};
exports.update = function (req, res) {
    const cate = new Cate(req.body);
    cateService.updateCate(req.body.cateId, cate, function (err, response) {
        if (response) {
            res.status(200).send({statusCode: res.statusCode, msg: "Cập nhật thành công!"});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, err: "Cập nhật thất bại! " + err});
        }
    })
};
exports.list = function (req, res) {
    cateService.selectAll(function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};
exports.listBanner = function (req, res) {
    cateService.selectAllBanner(function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};
