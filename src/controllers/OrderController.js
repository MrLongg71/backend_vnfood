const Gifts = require('../model/GiftModel');
const Orders = require('../model/OrderModel');
const OrdersDetails = require('../model/OrderDetailsModel');
const orderService = require('../services/order');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('../helpers/jwt');


exports.addOrder = function (req, response, next) {
    const nDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh'
    });

    var orderReq = JSON.parse(req.body.order);
    var orderDetailsReq = JSON.parse(req.body.order_details);

    var order = Orders();
    order.idOrder = orderReq.orderId;
    order.totalAmount = orderReq.totalAmount;
    order.totalPrice = orderReq.totalPrice;
    order.status = "Waiting";
    order.userId = req.userId;
    order.created_at = nDate;
    order.update_at = nDate;
    Orders.create(order, (err, res) => {
        if(err){
            response.status(401).json({statusCode: 401, data: "Có lỗi xảy ra !!!"})
        }else{
            orderService.createOrderDetails(orderDetailsReq, (err, res1) => {
                if(err){
                    response.status(401).json({statusCode: 401, data: "Có lỗi xảy ra !!!"})
                }else{
                    response.status(200).json({statusCode: 200, data: "Đặt hàng thành công !!!"})
                }
            })
        }

    });


};
exports.addGift = (req, res, next) => {


    orderService.createGift(gift, (err, data) => {
        if (err) {
            res.status(401).send({statusCode: res.statusCode, err: 'Có lỗi xảy ra! ' + err})
        }
        res.status(200).send({statusCode: res.statusCode, data: data})

    })
}
exports.checkGift = (req, res, next) => {

    orderService.checkGift(req.params.id, (err, data) => {
        if (err) {
            res.status(401).send({statusCode: res.statusCode, err: 'Có lỗi xảy ra! ' + err})
        }
        if (!data) {
            res.status(404).send({statusCode: res.statusCode, err: 'Mã khuyến mãi không tồn tại!'})
            return;
        }
        res.status(200).send({statusCode: res.statusCode, data: data})

    })
}
