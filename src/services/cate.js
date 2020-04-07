(function () {
    const mongoose = require('mongoose');
    const cate = mongoose.model('Cates');

    exports.createCate = function (cate, callback) {
        cate.save(cate).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };

     exports.updateCate = async function  (cateId, cate, callback)  {
         await  cate.findOneAndUpdate({
            cateId: cateId
        }, {cate:cate}, (err, response) => {
            console.log(err);
            callback(err, response);
        });
    };

    exports.deleteCate = async function (query, callback) {
        const nDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Ho_Chi_Minh'
        });

        await cate.findOneAndUpdate({cateId: query},{delete_at : nDate},(err,response)=>{

            callback(err, response);

        });
    };
    exports.selectAll = async function (callback) {
        await  cate.find({
            delete_at : null
        },(err,data)=>{
            callback(err, data);
});
    }

})();
