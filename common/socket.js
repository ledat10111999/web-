var info = require('../Module/Posts')
var mysql = require('mysql');

module.exports = function(io){
    
    io.on('connection',function(socket){
          socket.on("takeSelect",function(x){
                var result = info.takeInforDistric(x);
                result.then(function(data){
                    socket.emit('result',data);
                }).catch(function (err){
                    console.log(err);
                });
               

        })
        socket.on('selectDis',function(y){
            var results = info.takeInforWard(y);
            results.then(function(datas){
                socket.emit('updatewards',datas);
                
               
                
            }).catch(function(err){
                console.log("có lỗi : " +err);
                
            })
        })
    });  
     
}


                 

