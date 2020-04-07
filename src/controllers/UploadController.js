
const uploadPhoto = (req, res) => {
    uploadPhotos(req,res);
    const file = req.file;
    if (!file) {
        return res.json({ status: false, mgs: "Không có file" });
    }
    return res.status(200).json({
        status: true,
        data: file
    });
};
const uploadPhotos = (req, res) => {
    const files = req.files;
    if (!files) {
        return res.json({ status: false, mgs: "Không có file" });
    }
    return res.status(200).json({
        status: true,
        data: files
    });
};

module.exports = {
    uploadPhoto,
    uploadPhotos
};
