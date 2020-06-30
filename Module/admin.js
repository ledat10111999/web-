var data_base = require('../common/data_base');
var q = require('q');
var connection = data_base.getConnection();

function takeInforPosts() {
    return new Promise((resolve, reject) => {
        var query = connection.query("SELECT * FROM posts WHERE display = false", function (error, results, fields) {
            if(error){
                return reject(new Error(error));
            }
            resolve(results);
        });
    })
      
   
      
}
function deletePost(ID){
    if(ID){
        return new Promise((resolve,reject)=>{
            var query = connection.query("DELETE FROM posts WHERE ID = ?",[ID],function(error, results, fields){
                if(error){
                    return reject(new error(error));
                }
                resolve(results);
            })
        })
    }
    return false;
}
function postUp(ID){
    if(ID){
        return new Promise((resolve,reject)=>{
            var query = connection.query("UPDATE posts SET display = 1 WHERE ID = ? ",[ID],function(error, results, fields){
                if(error){
                    return reject(new error(error));
                }
                resolve(results);
            })
        })
    }
    return false;
}
function money(ID){
    if(ID){
        return new Promise((resolve,reject)=>{
            var query = connection.query("UPDATE users SET money =(money -10000) WHERE ID = ? ",[ID],function(error, results, fields){
                if(error){
                    return reject(new error(error));
                }
                resolve(results);
            })
        })
    }
    return false;
}

function takeinforuser(){
    return new Promise((resolve,reject)=>{
        var query = connection.query("SELECT * FROM users WHERE QuyenHan !='admin' ",function(error, results, fields){
            if(error){
                return reject(new error(error));
            }
            resolve(results);
        })
    })
}
function blockuser(id){
    if(id){
        return new Promise((resolve,reject)=>{
            var query = connection.query("UPDATE users SET block = 1 WHERE ID = ? ",[id],function(error, results, fields){
                if(error){
                    return reject(new error(error));
                }
                resolve(results);
            })
        })
    }else{
        return false;
    }
}
function unblockuser(id){
    if(id){
        return new Promise((resolve,reject)=>{
            var query = connection.query("UPDATE users SET block = 0 WHERE ID = ? ",[id],function(error, results, fields){
                if(error){
                    return reject(new error(error));
                }
                resolve(results);
            })
        })
    }else{
        return false;
    }
}
module.exports = {
    takeInforPosts:takeInforPosts,
    deletePost:deletePost,
    postUp : postUp,
    money:money,
    takeinforuser: takeinforuser,
    blockuer:blockuser,
    unblockuser:unblockuser
}