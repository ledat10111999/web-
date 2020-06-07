var express = require('express');
var router = express.Router();
var value = require('../../Module/Posts')

router.post('/laydulieufull',async(req,res,next)=>{
    try{
        var _data = await value.takeInforFullPosts();
        res.json(_data);
      }catch(err){
        console.log(err);
      }
})
router.get('/admin', async function(req,res){
    var user = req.session.user;
    if( user && user.QuyenHan === 'admin'){
        var cities = await value.takeInforCities()
        res.render("Admin/admin",{data:{sign: user,cities:cities}});
    }else{
        res.redirect('/');
    }
   
})

module.exports = router;