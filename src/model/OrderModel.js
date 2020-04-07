const mongoose = require('mongoose');
var OrdersSchema = new mongoose.Schema({
    idOrder: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    totalAmount: {
        unique: true,
        type: String,
        required: true,
    },
    totalPrice: {
        type: String,
        required: true,

    },
    status:{
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
var OrderstModel = mongoose.model('Orders', OrdersSchema);
module.exports = OrderstModel;
