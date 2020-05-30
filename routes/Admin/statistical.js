var express = require('express');
var router = express.Router();
var infor = require('../../Module/admin')

router.get('/statistical',async function(req,res){
    var admin = req.session.user;
    if(admin && admin.QuyenHan == 'admin'){
      res.render("Admin/statistical",{data:{sign:admin}})
    }else{
        res.redirect('/');
    }
})
module.exports = router;