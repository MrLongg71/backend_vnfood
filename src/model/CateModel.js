const mongoose = require('mongoose');
var CateSchema = new mongoose.Schema({
    cateId: {
        type: String,
        required: true,
        index: true,
        unique:true,
    },
    name: {

        type: String,
        required: true,
    },
    images: {
        type: String,
        required: true,

    },
    created_at:{
        type: Date
    },
    update_at:{
        type: Date
    },
    delete_at:{
        type: Date,
    },


});
var CateModel = mongoose.model('Cates', CateSchema);
module.exports = CateModel;
