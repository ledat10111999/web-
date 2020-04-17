var express = require('express');
var router = express.Router();
var MTdelete = require('../Module/deletePost');

router.delete('/deletePost',function(req,res){
    var ID = req.body.ID;
    var del = MTdelete.deletePost(ID);
    if(del){
        del.then(function(){
            res.json({statusCode : 200});
        }).catch(function(err){
            res.json({statusCode:err})
        })
    }else{
        console.log("Không thể xóa");
        
    }
})

module.exports = router;