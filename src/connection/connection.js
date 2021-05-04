var mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

// We need to difine the URL
var URL = 'mongodb+srv://vnfood:vnfood@cluster0-amioj.mongodb.net/vnfood?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);

//Connection establishment
mongoose.connect(process.env.MONGODB_URI || URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

cloudinary.config({ 
    cloud_name: 'mrlongg71', 
    api_key: '826998533629868', 
    api_secret: 'ih7W0HTOzhj9eTQQSSusiMIA7IQ' 
  });
//Modelsfalse
var db = mongoose.connection;

db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log('DB Connection established successfully');
});
