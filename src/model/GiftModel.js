const mongoose = require('mongoose');
var GiftsSchema = new mongoose.Schema({
    idGift: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    codeGift: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        // required: true,
    },
    created_at: {
        type: Date
    },
    update_at: {
        type: Date
    },
    // expiration_at: {
    //     type: String
    // }
    // delete_at:{
    //     type: Date
    // },


});
var GiftsModel = mongoose.model('Gifts', GiftsSchema);
module.exports = GiftsModel;
