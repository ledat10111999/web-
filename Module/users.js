var mysql = require('mysql');
var db = require('../common/data_base');
var q = require('q');
var connection = db.getConnection();

function addUser(user) {
    if (user) {
        var defer = q.defer();
        var query = connection.query('INSERT INTO users SET ?', user, function (error, results, fields) {
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

function checkUser(email) {
    if (email) {
        var defer = q.defer();
        var query = connection.query('SELECT * FROM users WHERE ? ', { Email: email }, function (error, results, fields) {
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
function addTest(user) {
    if (user) {
        var defer = q.defer();
        var query = connection.query('INSERT INTO test SET ?', user, function (error, results, fields) {
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
    addUser: addUser,
    checkU: checkUser,
    addTest: addTest
};
