const mongoose = require('mongoose');
var OrderDetailsSchema = new mongoose.Schema({
    idOrderDetails: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    idOrder: {
        unique: true,
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,

    },
    amount: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
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
