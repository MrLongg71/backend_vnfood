const mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true,
        unique:true,
    },
    email: {
        unique:true,

        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    avatar:{
        type: String,
    },
    role: {
        type: String,
    },
    token:{
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
