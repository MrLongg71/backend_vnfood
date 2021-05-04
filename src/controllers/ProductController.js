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
            res.status(400).send({statusCode: res.statusCode, err: error});
        }
    });
};
exports.list = function (req, res) {
    productService.selectAll(function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});// cai nay la tra ra json
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});//cung vay, ma ra json loi
        }
    })

};
exports.newList = function (req, res) {
    productService.selectAll(function (err, data) {
        if (data) {
            var newList = data.reverse().slice(0, 5);

            res.status(200).json({statusCode: res.statusCode, data: newList});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};

exports.listPaging = function (req, res) {
    productService.selectAll(function (err, data) {
        if (data) {
            console.log(req.query.page);
            var page = parseInt(req.query.page) || 1;
            var perPage = 4;
            var start = (page - 1) * perPage;
            var end = page * perPage;
            var paging = data.slice(start, end);
            res.status(200).json({statusCode: res.statusCode, data: paging});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};
exports.listForCate = function (req, res) {
    productService.selectAllForCate(req.params.id, function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});
        } else if (data.isEmpty()) {
            res.status(401).send({statusCode: res.statusCode, err: 'Không có sản phẩm ở Loại này'});

        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};
exports.listImages = function (req, res) {
    productService.selectImageForProduct(req.params.id, function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});
        }  else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};
exports.listReview = function (req, res) {
    console.log(req.query.productId)
    productService.selectAllReview(req.query.productId, function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};

exports.listSearch = function (req, res) {
    productService.selectSearch(req.query.search, function (err, data) {
        if (data) {
            res.status(200).json({statusCode: res.statusCode, data: data});
        } else if (err) {
            res.status(400).send({statusCode: res.statusCode, data: err});
        }
    })

};
