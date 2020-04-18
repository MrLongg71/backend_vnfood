const mongoose = require('mongoose');
const User = require('../model/UserModel');
var ReviewSchema = new mongoose.Schema({
    reviewId: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    comment: {
        unique: true,
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    productId: {
        required: true,
        type: String,
    },
    userId:{
        required: true,
        type: String, ref: "User"
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
var ReviewtModel = mongoose.model('Reviews', ReviewSchema);
module.exports = ReviewtModel;
