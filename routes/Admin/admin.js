var express = require('express');
var router = express.Router();

router.get('/admin',function(req,res){
    var user = req.session.user;
    if( user && user.QuyenHan === 'admin'){
        res.render("Admin/admin",{data:{sign: user}});
    }else{
        res.redirect('/');
    }
   
})

module.exports = router;