var info = require('../Module/Posts')
var mysql = require('mysql');

module.exports = function(io){
    
    io.on('connection',function(socket){
         console.log("server is running");
         
          socket.on("takeSelect",function(x){
            
                
                
                var result = info.takeInforDistric(x);
                result.then(function(data){
                    
                    socket.emit('result',data)
                   console.log(data);
                   
                    
                }).catch(function (err){
                    console.log(err);
                    
                })
               
        })
    });     
}

                 

