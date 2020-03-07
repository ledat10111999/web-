var express = require('express');
var router = express.Router();
var user_md = require('../Module/users');

router.get('/signup', function(req, res, next) { // khi user /signup thì dẫn đến thư mục render 
    res.render('signup', { data: {} }); // render đến thư mục /router/signup.ejs, data là 1 object gửi đến đường dẫn
  });
router.post('/signup', function(req,res){
  var user = req.body; // lấy dữ liệu từ body
  

   if(user.email.trim().length ==0) // username là name = "username" trong form 
   {
     res.render('signup', { data: {error :"Nhập thiếu email "} });
   }
   if(user.firstname.trim().length ==0) // username là name = "username" trong form 
   {
     res.render('signup', { data: {error :"Nhập thiếu tên "} });
   }
   if(user.lastname.trim().length ==0) // username là name = "username" trong form 
   {
     res.render('signup', { data: {error :"Nhập thiếu họ "} });
   }
   if(user.password.trim().length < 4 )
   {
    res.render('signup', { data: {error :"Mật khẩu quá ngắn"} });
   }
  if(user.password != user.repassword && user.password !=0 )
  {
    res.render('signup', { data: {error :"Nhập sai"} });
  }

  user = {
    First_name : user.firstname,
    Last_name : user.lastname,
    Email: user.email,
    Pass : user.password
  };
  var results = user_md.addUser(user);
 if(!results )
 {
  res.render('signup', { data: {error :"không thêm được "} });
 }
 else
 {
  res.render('signup', { data: {q :"Đăng ký thành công"} });
 }
})
 
module.exports = router;