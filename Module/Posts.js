var mysql = require('mysql');
var data_base = require('../common/data_base');
var connection = data_base.getConnection();
var q = require('q');

function Posts(post) {
    if (post) {
        var defer = q.defer();
        var query = connection.query("INSERT INTO posts SET ? ", post, function (error, results, fields) {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve(results);
            }
            ;
        });
        return defer.promise
    }
    return false;
}
function _Posts(post, param) {
    if (post) {
        var defer = q.defer();
        var query = connection.query("INSERT INTO posts SET ? ", post, function (error, results, fields) {
            if (error) throw error;
            param(results.insertId);
        });
    } return false;
}

function img(post) {
    if (post) {
        var defer = q.defer();
        var query = connection.query("INSERT INTO img SET ? ", post, function (error, results, fields) {
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
function infor() {


    var sql = "SELECT districts.tenQuan , cities.tenTp , wards.tenPhuong  FROM cities, districts ,wards WHERE districts.maTP = cities.maTP and districts.maQuan = wards.maQuan;"
    var defer = q.defer(); //cities.maTP = " +maTP+ "
    var query = connection.query(sql, function (error, results, fields) {
        if (error) {
            defer.reject(error); // nếu cố error trả về error
        } else {
            defer.resolve(results); // trả về result
        }
    });
    return defer.promise; // trả về mảng đối tượng nhận được từ result query


}
function takeInforCities() {
    var sql = "select * from province";
    var defer = q.defer();
    var query = connection.query(sql, function (error, results, fields) {
        if (error) {
            defer.reject(error); // nếu cố error trả về error
        } else {
            defer.resolve(results); // trả về result
        }

    });
    return defer.promise; // trả về mảng đối tượng nhận được từ result query
}

function takeInforCities2(data) {
    var sql = "select * from province";
    var query = connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        data(results);
    });
    return false // trả về mảng đối tượng nhận được từ result query
}

function takeInforDistric(x) {

    //    var  _data =String(data);
    //     var __data = connection.escape(_data);    
    if (x) {
        var sql = "select  district.id, district._prefix, district._name from province,district where province.id = district._province_id and province._name =" + mysql.escape(x);
        var defer = q.defer();
        var query = connection.query(sql, function (error, results, fields) {
            if (error) {
                defer.reject(error); // nếu cố error trả về error
            } else {
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ result query   
    }
    return false;
}
function takeInforWard(district, province) {

    //    var  _data =String(data);
    //     var __data = connection.escape(_data);    
    if (district && province) {
        var sql = " select  ward.id,ward._prefix,ward._name,ward._province_id from  province,district,ward where district.id = ward._district_id and ward._province_id = province.id  and district._name =" + mysql.escape(district) + " and province._name = " + mysql.escape(province);
        var defer = q.defer();
        var query = connection.query(sql, function (error, results, fields) {
            if (error) {
                defer.reject(error); // nếu cố error trả về error
            } else {
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ result query
    }
    return false;
}
// var sql    = 'SELECT * FROM users WHERE id = ' + connection.escape(userId);
// connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
//     if (error) throw error;
//     // ...
//   });

function takeInforStreet(district, province) {
    if (district && province) {
        var sql = " select district._name ,street._prefix,street._name  from province,district,street where street._province_id = province.id and street._district_id = district.id and province._name = " + mysql.escape(province) + " and district._name =" + mysql.escape(district) + "";
        var defer = q.defer();
        var query = connection.query(sql, function (error, results, fields) {
            if (error) {
                defer.reject(error); // nếu cố error trả về error
            } else {
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ result query
    }
    return false;
}
function tablePosts() {
    var sql = "SELECT ID FROM posts";
    var defer = q.defer();
    var query = connection.query(sql, function (error, results, fields) {
        if (error) {
            defer.reject(error); // nếu cố error trả về error
        } else {
            defer.resolve(results); // trả về result
        }
    });
    return defer.promise; // trả về mảng đối tượng nhận được từ result query
}
function takeInforPosts() {
    // var sql = "select * from img,posts where img.IDimg = posts.IDimg and img.IDpost = posts.ID";
     var sql = 'select * from posts where display = true'
    var defer = q.defer();
    var query = connection.query(sql, function (error, results, fields) {
        if (error) {
            defer.reject(error); // nếu cố error trả về error
        } else {
            defer.resolve(results); // trả về result
        }
    });
    return defer.promise; // trả về mảng đối tượng nhận được từ res

}
function takeInforIDPosts(IDpost) {
    if (IDpost) {
        var defer = q.defer();
        var query = connection.query("select users.First_name , users.Last_name,posts.ID, posts.tenTp,posts.tenQuan,posts.tenPhuong,posts.tenDuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.IDusers, posts.image,posts.SDT,posts.created_at,posts.update_at from users,posts where users.ID = posts.IDusers AND posts.ID =?", [IDpost], function (error, results, fields) {
            if (error) {
                defer.reject(error); // nếu cố error trả về error
            } else {
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ res
    }
    // var sql ="select users.First_name,users.ID , users.Last_name,posts.ID, posts.tenTp,posts.tenQuan,posts.tenPhuong,posts.tenDuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.IDusers, posts.image,posts.SDT,posts.created_at,posts.update_at from users,posts where users.ID = posts.IDusers and posts.ID =" +IDpost;

    return false;
}
function takeInforIDPostsIDUsers(IDusers) {
    if (IDusers) {
        var defer = q.defer();
        var query = connection.query("select users.First_name , users.Last_name,posts.ID, posts.tenTp,posts.tenQuan,posts.tenPhuong,posts.tenDuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.IDusers, posts.image,posts.SDT,posts.created_at,posts.update_at from users,posts where users.ID = posts.IDusers AND  users.ID =?", [IDusers], function (error, results, fields) {
            if (error) {
                defer.reject(error); // nếu cố error trả về error
            } else {
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ res
    }
    // var sql ="select users.First_name , users.Last_name,posts.ID, posts.tenTp,posts.tenQuan,posts.tenPhuong,posts.tenDuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.IDusers, posts.image,posts.SDT,posts.created_at,posts.update_at from users,posts where users.ID = posts.IDusers and posts.ID =" +IDpost;

    return false;
}
function takeInforImg(ID) {
    if (ID) {
        var defer = q.defer();
        var query = connection.query('select image from img where IDimg =? and IDpost = ?', [ID[0].IDimg, ID[0].IDpost], function (error, results, fields) {
            if (error) {
                defer.reject(error); // nếu cố error trả về error
            } else {
                defer.resolve(results); // trả về result
            }
        }); return defer.promise; // trả về mảng đối tượng nhận được từ res
    } return false;
}
function updatePost(param, image) {
    if (param && image) {
        var defer = q.defer();
        var sql = "UPDATE posts SET tenTp = " + mysql.escape(param.tenTp) + ",tenQuan = " + mysql.escape(param.tenQuan) + " ,tenDuong = " + mysql.escape(param.tenDuong) + ", tenPhuong = " + mysql.escape(param.tenPhuong) + ", soNha = " + param.soNha + ",DiaChiChinhXac = " + mysql.escape(param.DiaChiChinhXac) + ",ThongTinMoTa = " + mysql.escape(param.ThongTinMoTa) + ", DienTich = " + mysql.escape(param.DienTich) + " ,TieuDe = " + mysql.escape(param.TieuDe) + ", NoiDung =" + mysql.escape(param.NoiDung) + ",DoiTuongChoThue =" + mysql.escape(param.DoiTuongChoThue) + " , Gia = " + param.Gia + ", image = " + mysql.escape(image) + " where ID = " + param.ID + "";
        var query = connection.query(sql, function (error, results, fields) {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve(results);
            }
        }); return defer.promise;
    } return false;
}
// "UPDATE posts SET tenTp = ?,tenQuan =?,tenPhuong=? , tenDuong=?,soNha=?,DiaChiChinhXac=?,ThongTinMoTa = ?,DienTich = ?,TieuDe =?,NoiDung = ? ,DoiTuongChoThue = ?,Gia = ?,SDT = ?,update_at = ?,image=? where ID = ? "[param.tenTp,param.tenQuan,param.tenPhuong,param.tenDuong,param.soNha,param.DiaChiChinhXac,param.ThongTinMoTa,Param.DienTich,param.TieuDe,param.NoiDung,param.DoiTuongChoThue,param.Gia,param.SDT,param.update_at,image,param.ID]

module.exports = {
    infor: infor,
    Posts: Posts,
    takeInforCities: takeInforCities,
    takeInforDistric: takeInforDistric,
    takeInforWard: takeInforWard,
    img: img,
    _Posts: _Posts,
    tablePosts: tablePosts,
    takeInforPosts: takeInforPosts,
    takeInforImg: takeInforImg,
    takeInforIDPosts: takeInforIDPosts,
    takeInforCities2: takeInforCities2,
    takeInforIDPostsIDUsers: takeInforIDPostsIDUsers,
    updatePost: updatePost,
    takeInforStreet: takeInforStreet
};