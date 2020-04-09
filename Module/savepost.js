var mysql = require('mysql');
var data_base = require ('../common/data_base');
var connection = data_base.getConnection();
 var q =require('q');

 function savePost (param ){
     if(param){
        var defer = q.defer();
        var query = connection.query('INSERT INTO savepost SET ?', param, function (error, results, fields){
            if(error)
            {
                defer.reject(error);
            }else{
                defer.resolve(results);
            }
        });
        return defer.promise;
     }
     return false;
 }