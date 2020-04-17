var mysql = require('mysql');
var data_base = require('../common/data_base');
var connection = data_base.getConnection();
var q = require('q');


function deletePost(ID) {
    if (ID) {
        var defer = q.defer();
        var query = connection.query("DELETE FROM posts WHERE ID = ? ", [ID], function (error, results, fields) {
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
    deletePost: deletePost
}