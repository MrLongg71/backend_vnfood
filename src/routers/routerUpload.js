var express = require('express');
var routerUser = express.Router();
var auth = require('../middleware/auth_middleware');
var upload = require('../controllers/UploadController');
const multer = require("multer");

routerUser.use("/photos", express.static("public/uploads"));


const multerStorage = multer.diskStorage({
    destination: (res, file, cb) => {
    cb(null, "./public/uploads");
},
    filename: (req, file, cb) => {
    let ext = file.originalname.split(".").pop();
    cb(
        null,
        `photo-${Math.random()
            .toString(16)
            .substring(2)}.${ext}`
    );
}
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const uploadDefault = multer({
    storage: multerStorage,
    fileFilter: fileFilter
});
routerUser.get('/', async  function (req, res, next) {
    let reqPath = path.join(__dirname, '../../UI/upload.html');

    await res.sendFile(reqPath);
});
routerUser.post('/photo',uploadDefault.single("file"), upload.uploadPhoto);
routerUser.post('/photos', uploadDefault.array("files", 10), upload.uploadPhotos);

module.exports = routerUser;
