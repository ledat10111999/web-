var express = require('express');
var router = express.Router();
function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [ day,mnth,date.getFullYear()].join("-");
}
/* GET users listing. */
router.get('/users/:id', function (req, res, next) {
  var user = req.session.user;
  if(user){
    user.Created_at = convert(user.Created_at);
    res.render('inforUser',{data:{sign:user}});
  }else{
    res.redirect('/')
  }
 
});

module.exports = router;
