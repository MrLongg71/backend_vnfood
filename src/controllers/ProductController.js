const Product = require('../model/ProductModel');
const Review = require('../model/ReviewModel');
const productService = require('../services/product');
const uuid = require('uuid');


exports.add = function (req, res, next) {
    const nDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh'
    });
    const product = new Product(req.body);
    product.productId = uuid.v1();
    product.name = req.body.name;
    product.description = req.body.description;
    product.image = req.body.image;
    product.cateId = req.body.cateId;

    product.created_at = nDate;
    product.update_at = nDate;



    productService.createProduct(product, function (error, response) {
        if (response) {
            res.status(201).send(response);
        } else if (error) {
            res.status(400).send(error);
        }
    });
};

exports.addReview = function (req, res, next) {
    const nDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh'
    });
    const review = new Review(req.body);
    review.reviewId = uuid.v1();
    review.userId = req.userId;

    review.created_at = nDate;
    review.update_at = nDate;




    productService.createReview(review, function (error, response) {
        if (response) {
            res.status(201).send({statusCode: res.statusCode, mess: 'Thanh cong! '});
        } else if (error) {
            res.status(400).send({statusCode: res.statusCode, err:   error});
        }
    });
};
exports.list = function (req, res) {
    productService.selectAll(function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};
exports.listReview = function (req, res) {
    productService.selectAllReview(req.body.productId,function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};
