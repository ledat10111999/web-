var express = require('express');
var router = express.Router();
var infor = require('../../Module/admin')

router.get('/post',async function(req,res){
    var admin = req.session.user;
    if(admin && admin.QuyenHan == 'admin'){
        var posts= await infor.takeInforPost();
        res.render('Admin/Post',{data:{sign:admin,post:posts}});

    }else{
        res.redirect('/');
    }
})
module.exports = router;