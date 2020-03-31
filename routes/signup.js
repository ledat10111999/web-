var express = require('express');
var router = express.Router();
var user_md = require('../Module/users');
var hash = require('../hash_pass/hash_pass');

var mysql = require ('mysql');
var db = require('../common/data_base');
var q = require ('q');
var connection = db.getConnection();



router.get('/signup', function(req, res, next) { // khi user /signup thì dẫn đến thư mục render 
    res.render('signup', { data: {} }); // render đến thư mục /router/signup.ejs, data là 1 object gửi đến đường dẫn
  });
router.post('/signup', function(req,res){
  var user = req.body; // lấy dữ liệu từ body
  
  if(user.lastname.trim().length ==0) // username là name = "username" trong form 
  {
    res.render('signup', { data: {error :"Nhập thiếu họ "} });
  }
  if(user.firstname.trim().length ==0) // username là name = "username" trong form 
  {
    res.render('signup', { data: {error :"Nhập thiếu tên "} });
  }
   if(user.email.trim().length ==0) 
   {
     res.render('signup', { data: {error :"Nhập thiếu email "} });
   }
   if(user.password.trim().length < 4 )
   {
    res.render('signup', { data: {error :"Mật khẩu quá ngắn"} });
   }
  if(user.password != user.repassword && user.password.trim().length !=0 )
  {
    res.render('signup', { data: {error :"Nhập sai"} });
    
  }
  
  var _checkE = user_md.checkU(user.email) // check user có trong database không
  if(_checkE){ //nếu có kết quả
    _checkE.then(function(data){   // _check.then để lấy mảng đối tượng trả về là data
      var _data = data[0]; // gán _data = mảng đối tượng thứ 0 
      if(data.length ==0  || data == undefined ) // nếu mảng đối tượng có độ dài bằng 0 hoặc chưa được định nghĩa (undefined) thì tiến hành nhập user
      {
        var date = new Date();
            var _pass = hash.hash_password(user.password); // hash pass word bằng bcryp
        var iUser ={
          First_name : user.firstname,
          Last_name : user.lastname,
          Email: user.email,
          Pass : _pass,
          Update_at: date,
          Created_at: date,
        }
        var addUser = user_md.addUser(iUser); // add user vào databasr
        if(addUser){ // nếu có dữ liệu user được trả về
          addUser.then(function(data){ 

           res.render("signup",{data: {q:"đăng ký thành công" }})
          //  req.session.user=iUser;
         

          }).catch(function(error){
            res.render('signup', { data: {error :"Đăng ký không thành công " + error} });
          })
        }     
     }else if(_data.Email == user.email){ // nếu mảng đối tượng có dữ liệu và mảng đối tượng .Email == user.email thì thông báo tài khoản đã tồn tại
      res.render('signup', { data: {error :"Tài khoản đã tồn tại"} });
    }      
    }).catch(function(error){ // bắt lỗi error khi CheckE có error
      res.render('signup', { data: {error :"Đăng ký không thành công " + error} });
    })
  }
});
 
module.exports = router; 