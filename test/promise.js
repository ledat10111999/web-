var q = require('q');

function check ( err,data){
    var defer = q.defer();
    if(err){
        defer.reject("có lỗi rồi :" + err)
    }else{
        defer.resolve(data);
    }
   return defer.promise;
}

check(true, "aaaa").then(function(data){
    console.log(data);
    
}).catch(function(err){
    console.log(err);
    
})

