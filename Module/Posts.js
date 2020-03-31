var mysql = require('mysql');
var data_base = require ('../common/data_base');
var connection = data_base.getConnection();
 var q =require('q');

 function Posts (post){
     if(post){
         var defer = q.defer();
        var query = connection.query("INSERT INTO posts SET ? ",post,function(error, results, fields){
            if(error){
                defer.reject(error);
            }else{
                    defer.resolve(results);
            } 
            return defer.promise;  
        });
     }return false;
 }
 function _Posts (post,param){
    if(post){
        var defer = q.defer();
       var query = connection.query("INSERT INTO posts SET ? ",post,function(error, results, fields){
        if (error) throw error;
            param(results.insertId); 
       });
    }return false;
}
 function img (post){
    if(post){
        var defer = q.defer();
       var query = connection.query("INSERT INTO img SET ? ",post,function(error, results, fields){
           if(error){
               defer.reject(error);
           }else{
                   defer.resolve(results);
           } 
           return defer.promise;  
       });
    }return false;
}
 function infor( ){
    
    
        var sql = "SELECT districts.tenQuan , cities.tenTp , wards.tenPhuong  FROM cities, districts ,wards WHERE districts.maTP = cities.maTP and districts.maQuan = wards.maQuan;"
        var defer = q.defer(); //cities.maTP = " +maTP+ "
        var query = connection.query(sql, function(error,results,fields){
            if(error)
            {
                defer.reject(error); // nếu cố error trả về error
            }else{
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ result query
    
    
}
function takeInforCities(){
    var sql = "select * from cities";
    var defer = q.defer();
    var query = connection.query(sql, function(error,results,fields){
        if(error)
        {
            defer.reject(error); // nếu cố error trả về error
        }else{
            defer.resolve(results); // trả về result
        }
        
    });
    return defer.promise; // trả về mảng đối tượng nhận được từ result query
}

function takeInforCities2(data){
    var sql = "select * from cities";
    var query = connection.query(sql, function(error,results,fields){
       if(error) throw error;
        data(results);
    });
    return false // trả về mảng đối tượng nhận được từ result query
}

function takeInforDistric(x){
    
//    var  _data =String(data);
//     var __data = connection.escape(_data);    
 
   var sql ="select districts.tenQuan,districts.maQuan from cities, districts where cities.maTP = districts.maTP and cities.tenTp ="+ mysql.escape(x);
    var defer = q.defer();
    var query = connection.query( sql, function(error,results,fields){
        if(error)
        {
            defer.reject(error); // nếu cố error trả về error
        }else{
            defer.resolve(results); // trả về result
        }
    });
    return defer.promise; // trả về mảng đối tượng nhận được từ result query
}
function takeInforWard(y){
    
    //    var  _data =String(data);
    //     var __data = connection.escape(_data);    
     
       var sql ="select wards.tenPhuong,wards.maPhuong from  districts,wards where districts.maQuan = wards.maQuan and districts.tenQuan ="+ mysql.escape(y);
        var defer = q.defer();
        var query = connection.query( sql, function(error,results,fields){
            if(error)
            {
                defer.reject(error); // nếu cố error trả về error
            }else{
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ result query
    }
// var sql    = 'SELECT * FROM users WHERE id = ' + connection.escape(userId);
// connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
//     if (error) throw error;
//     // ...
//   });
     function tablePosts(){
        var sql ="SELECT ID FROM posts";
        var defer = q.defer();
        var query = connection.query( sql, function(error,results,fields){
            if(error)
            {
                defer.reject(error); // nếu cố error trả về error
            }else{
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ result query
     }
     function takeInforPosts(){
        var sql ="select * from img,posts where img.IDimg = posts.IDimg and img.IDpost = posts.ID";
        var defer = q.defer();
        var query = connection.query( sql, function(error,results,fields){
            if(error)
            {
                defer.reject(error); // nếu cố error trả về error
            }else{
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ res

     }
     function takeInforIDPosts(IDpost){
        // var sql ="select users.First_name , users.Last_name,posts.ID, posts.tenTp,posts.tenQuan,posts.tenPhuong,posts.tenDuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.IDusers, posts.image,posts.SDT,posts.created_at,posts.update_at from users,posts where users.ID = posts.IDusers and posts.ID =" +IDpost;
        var defer = q.defer();
        var query = connection.query( "select users.First_name , users.Last_name,posts.ID, posts.tenTp,posts.tenQuan,posts.tenPhuong,posts.tenDuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.IDusers, posts.image,posts.SDT,posts.created_at,posts.update_at from users,posts where users.ID = posts.IDusers AND posts.ID =?",[IDpost], function(error,results,fields){
            if(error)
            {
                defer.reject(error); // nếu cố error trả về error
            }else{
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ res

     }
     function takeInforIDPostsIDUsers(IDusers){
        // var sql ="select users.First_name , users.Last_name,posts.ID, posts.tenTp,posts.tenQuan,posts.tenPhuong,posts.tenDuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.IDusers, posts.image,posts.SDT,posts.created_at,posts.update_at from users,posts where users.ID = posts.IDusers and posts.ID =" +IDpost;
        var defer = q.defer();
        var query = connection.query( "select users.First_name , users.Last_name,posts.ID, posts.tenTp,posts.tenQuan,posts.tenPhuong,posts.tenDuong,posts.soNha,posts.DiaChiChinhXac,posts.ThongTinMoTa,posts.DienTich,posts.TieuDe,posts.NoiDung,posts.DoiTuongChoThue,posts.Gia,posts.IDusers, posts.image,posts.SDT,posts.created_at,posts.update_at from users,posts where users.ID = posts.IDusers AND  users.ID =?",[IDusers], function(error,results,fields){
            if(error)
            {
                defer.reject(error); // nếu cố error trả về error
            }else{
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ res

     }
     function takeInforImg(ID){
     
        var defer = q.defer();
        var query = connection.query( 'select image from img where IDimg =? and IDpost = ?',[ID[0].IDimg,ID[0].IDpost], function(error,results,fields){
            if(error)
            {
                defer.reject(error); // nếu cố error trả về error
            }else{
                defer.resolve(results); // trả về result
            }
        });
        return defer.promise; // trả về mảng đối tượng nhận được từ res
     }
 module.exports = {
     infor : infor,
    Posts : Posts,
    takeInforCities : takeInforCities,
    takeInforDistric : takeInforDistric,
    takeInforWard : takeInforWard,
    img: img,
    _Posts:_Posts,
    tablePosts: tablePosts,
    takeInforPosts:takeInforPosts,
    takeInforImg:takeInforImg,
    takeInforIDPosts:takeInforIDPosts,
    takeInforCities2:takeInforCities2,
    takeInforIDPostsIDUsers:takeInforIDPostsIDUsers
};