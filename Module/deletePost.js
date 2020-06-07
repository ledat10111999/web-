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
function updatestatus(ID){
    if(ID){
        return new Promise((resolve,reject)=>{
            var query = connection.query('UPDATE posts set status = 0 WHERE ID = ?',[ID],(err,results)=>{
                if(err){
                    return reject(new Error(err));
                } resolve(results);
            })
        })
    }return false;
}
function status(ID){
    if(ID){
        return new Promise((resolve,reject)=>{
            var query = connection.query('UPDATE posts set status = 1 WHERE ID = ?',[ID],(err,results)=>{
                if(err){
                    return reject(new Error(err));
                } resolve(results);
            })
        })
    }return false;
}
module.exports = {
    deletePost: deletePost,
    updatestatus:updatestatus,
    status:status
}