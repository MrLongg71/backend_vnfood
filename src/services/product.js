(function () {
    const mongoose = require('mongoose');
    const product = mongoose.model('Products');
    const cate = mongoose.model('Cates');
    const review = mongoose.model('Reviews');
    const images = require('../model/ImagesModel')
    const ProductSchema = require("../model/ProductModel");

    exports.createProduct = function (product, callback) {
        cate.findOne({cateId: product.cateId}, (err, cateId) => {
            if (cateId != null) {
                product.save(product).then((response) => {
                    callback(null, response);
                }, (error) => {
                    callback(error, null);
                });
            } else {
                callback("{err: Cate không tồn tại}", null);
            }
            if (err) {
                callback(err, null);
            }
        });
    };
    exports.createReview = function (review, callback) {
        review.save(review).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };
    exports.deleteProduct = async function (query, callback) {
        const nDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Ho_Chi_Minh'
        });

        // cate.deleteOne(query,callback);
        await product.findOneAndUpdate({productId: query}, {delete_at: nDate}, (err, response) => {

            callback(err, response);

        });
    };
    exports.selectAll = async function (callback) {
        const dataProduct = product.find({
            delete_at: null
        }, (err, data) => {
            product.aggregate([
                {
                    $lookup: {
                        from: 'cates',
                        localField: 'cateId',
                        foreignField: 'cateId',
                        as: 'cate'
                    }
                }
            ], (err, res) => {
                if (err) throw err;
                callback(err, res);
            });
        })
    }
    exports.selectAllForCate = async function (query, callback) {
        product.find({
            delete_at: null, cateId: query
        }, (err, data) => {
            console.log(data)
            if (err) callback(err, null)
            if (data) {
                callback(err, data)
            }
        })
    }
    exports.selectSearch = async function (query, callback) {

        product.find({'name': {'$regex': query}}, (err, res) => {
            if(err){
                callback(err, null);
            }
            callback(null,res);
        })

    };

    exports.selectImageForProduct = async function (query, callback) {
        images.find({productId: query}, (err, data) => {
            if (err) callback(err, null);
            if (data) {
                callback(err, data)
            }
        })
    }
    exports.selectAllReview = async function (query, callback) {


        /**/
        let resultData = await ProductSchema.aggregate([
            {
                $match: {productId: {$eq: query}},
            },
            {
                $graphLookup: {
                    from: "reviews",
                    startWith: "$productId",
                    connectFromField: "productId",
                    connectToField: "productId",
                    as: "reviews",
                },
            },
            {
                $project: {
                    // _id: 1,
                    // name: 1,
                    // description: 1,
                    // price: 1,
                    // image: 1,
                    // cateId: 1,
                    // productId: 1,
                    // created_at: 1,
                    // update_at: 1,
                    "reviews.comment": 1,
                    "reviews.userId": 1,
                    "reviews.rate": 1,
                    "reviews.reviewId": 1,
                },
            },
            {
                $unwind: "$reviews",
            },
            {
                $graphLookup: {
                    from: "users",
                    startWith: "$reviews.userId",
                    connectFromField: "userId",
                    connectToField: "userId",
                    as: "reviews.userId",
                },
            },
            // {
            //     $group: {
            //         _id: "$_id",
            //         // name: {$first: "$name"},
            //         // description: {$first: "$description"},
            //         // price: {$first: "$price"},
            //         // image: {$first: "$image"},
            //         // cateId: {$first: "$cateId"},
            //         // productId: {$first: "$productId"},
            //         // created_at: {$first: "$created_at"},
            //         // update_at: {$first: "$update_at"},
            //         reviews: {$push: "$reviews"},
            //     },
            // },
        ]);
        callback(null, resultData)
    };


})();
