var express = require('express');
var router = express.Router();
var infor = require('../../Module/admin')
function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [ day,mnth,date.getFullYear()].join("-");
  }

router.get('/user',async function(req,res){
    var admin = req.session.user;
    if(admin && admin.QuyenHan == 'admin'){
        try{
            var post= await infor.takeinforuser();
           post.map((Value)=>{
               Value.Created_at = convert(Value.Created_at);
               Value.Update_at = convert(Value.Update_at);
           })
           
           
            res.render('Admin/user',{data:{sign:admin,user:post}});
        }catch(e){
            res.send(e + '');
        }
    }else{
        res.redirect('/');
    }
})
module.exports = router;