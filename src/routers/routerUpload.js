var express = require('express');
var routerUser = express.Router();
var path = require('path');

var auth = require('../middleware/auth_middleware');
var upload = require('../controllers/UploadController');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const multer = require("multer");

routerUser.use("/photos", express.static("public/uploads"));

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'vnfood',
      allowedFormats: ['jpg', 'png'],
      filename: function (req, file, cb) {
      },
      public_id: (req, file) => {
        return `photo-${Math.random()
            .toString(16)
            .substring(2)}`;
      },
    },
  });


const uploadDefault = multer({ storage: storage });

routerUser.get('/', async  function (req, res, next) {
    let reqPath = path.join(__dirname, '../../UI/upload.html');

    await res.sendFile(reqPath);
});


routerUser.post('/photo',uploadDefault.single("file"), upload.uploadPhoto);
routerUser.post('/photos', uploadDefault.array("files", 10), upload.uploadPhotos);
routerUser.post('/photos-banner', uploadDefault.array("files", 10), upload.uploadPhotosBanner);

module.exports = routerUser;
