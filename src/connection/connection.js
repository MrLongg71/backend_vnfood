var mongoose = require('mongoose');

// We need to difine the URL
var URL = 'mongodb+srv://vnfood:vnfood@cluster0-amioj.mongodb.net/vnfood?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);

//Connection establishment
mongoose.connect(process.env.MONGODB_URI || URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});
//Modelsfalse
var db = mongoose.connection;

db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log('DB Connection established successfully');
});
