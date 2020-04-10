var mysql = require('mysql');
var data_base = require('../common/data_base');
var connection = data_base.getConnection();
var q = require('q');


function updatePost(param, image) {
    if (param && image) {
        var defer = q.defer();
        var query = connection.query("UPDATE posts set tenTp = ? , tenQuan = ? , tenDuong = ? , tenPhuong = ? , soNha = ? , DiaChiChinhXac = ? , ThongTinMoTa = ? ,DienTich = ? , TieuDe =  ? ,NoiDung = ? ,DoiTuongChoThue = ?, Gia = ? , image = ?, update_at = ? WHERE ID = ?", [param.tenTp, param.tenQuan, param.tenDuong, param.tenPhuong, param.soNha, param.DiaChiChinhXac, param.ThongTinMoTa, param.DienTich, param.TieuDe, param.NoiDung, param.DoiTuongChoThue, param.Gia, image, new Date(), param.ID], function (error, results, fields) {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve(results);
            }

        });
        return defer.promise;
    }

    return false;
}

function updateImg(img) {
    if (param && image) {
        var defer = q.defer();
        var query = connection.query('UPDATE img set image = ? WHERE IDimg = ? and IDpost = ? and image = ? ', [img.image, img.IDimg, img.IDpost, img.image], function (error, results, fields) {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve(results);
            }

        });
        return defer.promise;
    }

    return false;
}

module.exports = {
    updateImg: updateImg,
    updatePost: updatePost
}