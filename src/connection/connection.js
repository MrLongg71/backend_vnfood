var mongoose = require('mongoose');

// We need to difine the URL
var URL = process.env.URL || 'mongodb+srv://vnfood:vnfood@cluster0-amioj.mongodb.net/test?retryWrites=true&w=majority';

mongoose.set('useCreateIndex', true);

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

//Connection establishment
mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});
//Models
// require('../model/user');
var db = mongoose.connection;

//We enebled the Listener
db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log('DB Connection established successfully');
});
