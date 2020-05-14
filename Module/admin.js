var data_base = require('../common/data_base');

var connection = data_base.getConnection();

var takeInforPost = () =>{
    var sql = "SELECT * FROM posts where display = false ";
    var query = connection.query(sql,function(error, result,fields){
        return new Promise((resolve,reject) => {
            if(error){
                return reject(error);
            }else{
                return resolve(result);
            }
        })
    })
    return false;
}
module.exports = {
    takeInforPost:takeInforPost
}