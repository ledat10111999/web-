var mysql = require('mysql');
var data_base = require('../common/data_base');
var connection = data_base.getConnection();
var q = require('q');

function savePost(param) {
    if (param) {
        var defer = q.defer();
        var query = connection.query('INSERT INTO savepost SET ?', param, function (error, results, fields) {
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
function takeInforSavePost(IDusers,IDpost) {
        var defer = q.defer();
        var query = connection.query('SELECT IDusers,IDpost FROM savepost WHERE IDusers =' +IDusers +' and IDpost = '+ IDpost +'', function (error, results, fields) {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve(results);
            }
        });
        return defer.promise;
   
}
function deleteSavePost(IDusers,IDpost) {
    if(IDusers && IDpost){
        var defer = q.defer();
        var query = connection.query('DELETE  FROM savepost WHERE IDusers =' +IDusers +' and IDpost = '+ IDpost +'', function (error, results, fields) {
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
function saved(ID){
    if(ID){
        var defer = q.defer();
        var query = connection.query("select posts.ID , posts.IDimg, posts.tenTp,posts.tenQuan,posts.tenDuong,posts.tenPhuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.image,posts.SDT from posts,savepost where savepost.IDpost = posts.ID and savepost.IDusers =" +ID + "", function (error, results, fields) {
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
    savePost:savePost,
    takeInforSavePost:takeInforSavePost,
    deleteSavePost:deleteSavePost,
    saved: saved
}