var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users/:id', function (req, res, next) {
  var user = req.session.user;
  if(user){
    res.render('inforUser',{data:{sign:user}});
  }else{
    res.redirect('/')
  }
 
});

module.exports = router;
