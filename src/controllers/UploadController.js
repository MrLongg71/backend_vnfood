const banners = require('../model/BannerModel')
const uuid = require('uuid');
const uploadPhoto = (req, res) => {
    uploadPhotos(req, res);
    const file = req.file;
    if (!file) {
        return res.json({status: false, mgs: "Không có file"});
    }
    return res.status(200).json({
        status: true,
        data: file
    });


};
const uploadPhotos = (req, res) => {
    const files = req.files;
    if (!files) {
        return res.json({status: false, mgs: "Không có file"});
    }

    for (var file of files) {
        console.log(file.filename)
        var banner = banners();
        banner.imageId = uuid.v1();
        banner.url = file.filename;
        banners.create(banner, (err, res) => {

        })

    }
    return res.status(200).json({
        status: true,
        data: files
    });

};
const uploadPhotosBanner = (req, res) => {
    const files = req.files;
    if (!files) {
        return res.json({status: false, mgs: "Không có file"});
    }

    for (var file of files) {
        console.log(file.filename)
        var banner = banners();
        banner.imageId = uuid.v1();
        banner.url = file.filename;
        banners.create(banner, (err, res) => {
            if (err) res.status(404).json({statusCode: 404, err: 'Có lỗi xảy ra!!'})
        })

    }
    res.redirect('/index');

    return res.status(200).json({
        status: true,
        msg: 'Tải ảnh banner thành công!'
    });

};

module.exports = {
    uploadPhoto,
    uploadPhotos,
    uploadPhotosBanner
};
