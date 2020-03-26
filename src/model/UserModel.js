const mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
        trim: true

    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    address: {
        type: String,
        unique: true,
        trim: true
    },
    role: {
        type: String,
    },
    created_at:{
        type: Date
    },
    update_at:{
        type: Date
    },
    delete_at:{
        type: Date
    },


});
var UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
