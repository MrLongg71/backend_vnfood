const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var OrderDetailsSchema = new mongoose.Schema({
    idOrderDetails: {
        type: String,
    },
    productId: {
        type: String,
    },
    amount: {
        type: String,
    },
    price: {
        type: String,
    },
    idOrder: {
        type: String,

    },
    created_at: {
        type: Date
    },
    update_at: {
        type: Date
    },
    // delete_at:{
    //     type: Date
    // },


});
var OrderDetailstModel = mongoose.model('OrderDetails', OrderDetailsSchema);
module.exports = OrderDetailstModel;

