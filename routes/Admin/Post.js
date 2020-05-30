var express = require('express');
var router = express.Router();
var infor = require('../../Module/admin')
var delPost = require('../../Module/deletePost');
var PostByID = require("../../Module/Posts");

function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [ day,mnth,date.getFullYear()].join("-");
  }
router.get('/post',async function(req,res){
    var admin = req.session.user;

    if(admin && admin.QuyenHan == 'admin'){
        try{
            var post= await infor.takeInforPosts();
            
            // for(var i = 0; i< post.length; i++){
            //     post[i].created_at = convert(post[i].created_at);
            //     post[i].update_at = convert(post[i].update_at);
            // }
           post.map((Value)=>{
               Value.created_at = convert(Value.created_at);
               Value.update_at = convert(Value.update_at);
           })
            res.render('Admin/Post',{data:{sign:admin,post:post}});
        }catch(e){
            res.send(e + '');
        }
       

    }else{
        res.redirect('/');
    }
})
// delete

router.delete('/deletePost',async (req,res,next)=>{
    var ID = req.body.ID;
    try{
        var del = await delPost.deletePost(ID)
        res.json({statusCode:200})
    }catch(e){
        res.json({statusCode:500,err: e})
    }
    
})
router.put('/PostUp',async (req,res)=>{
    var ID = req.body.ID;
    try{
        var post = await infor.postUp(ID);
        var money = await infor.money(ID);
        res.json({statusCode:200})
    }catch(e){
        res.send(e + "");
    }
   
})
router.get('/post/:id',async(req,res,next)=>{
    var IDpost = req.params.id;
    var admin = req.session.user;
    if(admin && admin.QuyenHan == 'admin'){
        if(IDpost){
            try{
                var post = await PostByID.takeInforIDPosts(IDpost);
                post.map((Value)=>{
                    Value.created_at = convert(Value.created_at);
                    Value.update_at = convert(Value.update_at);
                })
                res.render("Admin/DetailPost",{data:{results:post}})
            }catch(e){
                res.send(e + "");
            }
           

        }
        else{
            res.redirect("/admin");
        }
    }else{
        res.redirect('/');
    }
   
})
module.exports = router;