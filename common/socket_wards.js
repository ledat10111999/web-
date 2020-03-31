var info = require('../Module/Posts')

module.exports = function(io){
    
    io.on('connection',function(socket){
          socket.on("takeSelect",function(x){
                var results = info.takeInforWard(x.y);
                results.then(function(datas){
                    socket.emit('results',datas);
                    console.log(datas);
                    
                }).catch(function (err){
                    console.log(err);
                })

        })
    });     
}
