const mongoose = require('mongoose');
var BannersSchema = new mongoose.Schema({
    imageId: {
        type: String,
        index: true,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});
var BannersModel = mongoose.model('Banners', BannersSchema);
module.exports = BannersModel;
