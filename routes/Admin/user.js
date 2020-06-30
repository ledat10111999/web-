var express = require('express');
var router = express.Router();
var infor = require('../../Module/admin');
const { post } = require('../../app');

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
           
           
            res.render('Admin/user',{data:{sign:admin}});
        }catch(e){
            res.send(e + '');
        }
    }else{
        res.redirect('/');
    }
})
router.post('/listuser', async (req,res)=>{
  try{
    var post= await infor.takeinforuser();
    post.map((Value)=>{
        Value.Created_at = convert(Value.Created_at);
        Value.Update_at = convert(Value.Update_at);
    })
    res.json(post);
  }catch(e){
      res.json(e + " ");
  }
})

//block user
router.put('/blockuser', async (req,res)=>{
    var ID = req.body.ID;
    try{
        await infor.blockuer(ID);
        res.json({statusCode:200})
    }catch(e){
        res.json({statusCode:500})
    }
})
//unblock user
router.put('/unblockuser', async (req,res)=>{
    var ID = req.body.ID;
    try{
        await infor.unblockuser(ID);
        res.json({statusCode:200})
    }catch(e){
        res.json({statusCode:500})
    }
})
module.exports = router;