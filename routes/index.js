var express = require('express');
var router = express.Router();
var value = require('../Module/Posts')

/* GET home page. */


router.get('/', function(req, res, next) {
 
  // general index
  var arrcities = [];
  value.takeInforCities2(function(data){
    for(var i  = 0 ; i< data.length; i++){
      arrcities.push(data[i]);
    }
  });
  var val = req.session.user;
  if(val){
    var sign ={
      ho: val.First_name,
      ten: val.Last_name,
      Email: val.Email,
      ID:val.ID
    }
    var posts = value.takeInforPosts();
    if(posts){
        posts.then(function(results){
          console.log(val);
          
            res.render('index',{data:{results:results,sign:sign,cities:arrcities}});
        }).then(function (error){
            console.log(error);
        })
    }
  }else{
    var posts = value.takeInforPosts();
    if(posts){
        posts.then(function(results){
         
          
            res.render('index',{data:{results:results,cities:arrcities }});            
        }).catch(function (error){
            console.log(error);
        })
    }
  }  
  
});
// router đăng xuất
router.delete('/',function(req,res){
  req.session.destroy(function(err){
    if(!err){
      res.json({statusCode : 200})
    }else{
      console.log(err);
    }
  });
})

router.get('/savePosts/:param',function(req,res,next){
  var val = req.session.user;
  
  if(val){
    var sign = {
      ho: val.First_name,
      ten: val.Last_name,
      Email: val.Email,
      ID: val.ID
    }
    res.render('savePosts',{data:{sign}});
    
  }else{
    res.redirect('/');
  }
})
router.get('/posted/:ID',function(req,res){
  var val = req.session.user;
  
  if(val){
    var sign = {
      ho: val.First_name,
      ten: val.Last_name,
      Email: val.Email,
      ID: val.ID
    }
    var post = value.takeInforIDPostsIDUsers(val.ID);
    if(post){
      post.then(function(results){
        res.render('posted',{data:{sign,results:results}});
      }).catch(function(err){
        res.render('posted',{data:{sign,err:err}});
      })
    }
   
  }else{
    res.redirect('/');
  }
})
module.exports = router;
