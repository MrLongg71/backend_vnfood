(function () {
    const mongoose = require('mongoose');
    const gift = mongoose.model('Gifts');
    const orders = require('../model/OrderDetailsModel');


    exports.createOrderDetails = function (order, callback) {
        orders.insertMany(order).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };

    exports.createGift = function (gift, callback) {
        gift.save(gift).then((response) => {

            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };


    exports.checkGift = async function (query, callback) {
        // const nDateCurrent = new Date();
        // console.log(nDateCurrent)

        await gift.findOne({
            codeGift: query
        }, (err, data) => {
            callback(err, data);
        });
    }

})();
