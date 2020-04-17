const mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    name: {
        unique: true,
        type: {},
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,

    },
    price: {
        type: String,
        required: true

    },
    rate: {
        type: Number,
    },
    cateId: {
        required: true,
        type: String,
    },
    created_at: {
        type: Date
    },
    update_at: {
        type: Date
    },
    delete_at:{
        type: Date
    },


});
var ProductModel = mongoose.model('Products', ProductSchema);
module.exports = ProductModel;
