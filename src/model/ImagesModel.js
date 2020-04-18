const mongoose = require('mongoose');
var ImagesSchema = new mongoose.Schema({
    imageId: {
        type: String,
        required: true,
        index: true,
    },
    url: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
});
var ImagesModel = mongoose.model('Images', ImagesSchema);
module.exports = ImagesModel;
