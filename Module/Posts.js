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
// var sql    = 'SELECT * FROM users WHERE id = ' + connection.escape(userId);
// connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
//     if (error) throw error;
//     // ...
//   });
     
 module.exports = {
     infor : infor,
    Posts : Posts,
    takeInforCities : takeInforCities,
    takeInforDistric : takeInforDistric
};