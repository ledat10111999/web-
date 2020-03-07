var mysql = require ('mysql');
var db = require('../common/data_base');
var q = require ('q');
var connection = db.getConnection();

function addUser( user){
    if(user)
    {
        var defer = q.defer();
        var query = connection.query('INSERT INTO users SET ?', user, function (error, results, fields){
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

module.exports = {
    addUser : addUser
};