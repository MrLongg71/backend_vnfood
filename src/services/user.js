(function () {
    const mongoose = require('mongoose');
    const user = mongoose.model('User');

    exports.createUser = function (user, callback) {

        user.save(user).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };


    exports.findUser = function (query, callback) {
        user.findOne({userId: query}, callback);
    };


    exports.updateUserById = function (id, data, callback) {
        user.findByIdAndUpdate({
            _id: id
        }, data, (err, response) => {
            callback(err, response);
        });
    };

    exports.updateUser = function (query, data, options, callback) {
        user.findOneAndUpdate(query, data, options, (err, response) => {
            callback(err, response);
        });
    };

    exports.deleteUser = function (query, callback) {
        user.deleteOne(query, callback);
    }

})();
