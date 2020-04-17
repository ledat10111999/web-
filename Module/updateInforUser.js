var data_base = require('../common/data_base');

var connection = data_base.getConnection();

var q = require('q');

function upDateFirst_name(param){
    if (param) {
        var defer = q.defer();
        var query = connection.query("UPDATE users set First_name = ?,Update_at = ? WHERE ID = ? ", [param.First_name,new Date(),param.ID], function (error, results, fields) {
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
function upDateLast_name(param){
    if (param) {
        var defer = q.defer();
        var query = connection.query("UPDATE users set Last_name = ?,Update_at = ? WHERE ID = ? ", [param.Last_name,new Date(),param.ID], function (error, results, fields) {
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
function upDatePhone_number(param){
    if (param) {
        var defer = q.defer();
        var query = connection.query("UPDATE users set SDT = ?,Update_at = ? WHERE ID = ? ", [param.SDT,new Date(),param.ID], function (error, results, fields) {
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
module.exports ={
    upDateFirst_name:upDateFirst_name,
    upDateLast_name:upDateLast_name,
    upDatePhone_number:upDatePhone_number
}