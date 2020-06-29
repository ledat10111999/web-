var express = require('express');
var router = express.Router();
var user_check = require('../Module/users');
var hash = require('../hash_pass/hash_pass');
const passport = require('passport');
const passportfb = require('passport-facebook').Strategy;
const passportgg = require('passport-google-oauth').OAuthStrategy;

router.get('/signin', function (req, res, next) {
    
    
    res.render('SignInPage', { data: {} });
});


router.post('/signin', function (req, res, next) {
    if(!req.session.user){
        var param = req.body;

        if (param.username.trim().length == 0) {
            res.render('SignInPage', { data: { error: "Bạn chưa nhập tài khoản" } });
        }
        if (param.password.trim().length == 0) {
            res.render('SignInPage', { data: { error: "Bạn chưa nhập Mật khẩu" } });
        } else {
            var data = user_check.checkU(param.username);
            if (data) {   //nếu có data thì tiến hành
                data.then(function (users) {  // lấy dữ liệu trong data
                    var user = users[0]; // lấy mảng dữ liệu user thứ 0
                    var status = hash.check_password(param.password, user.Pass); // hàm này trả về true hoặc false, true khi param.password == user.Pass, false thì ngược lại
                    if (status == false) { // nếu status trả về false tức param.password !=user.Pass
                        res.render('SignInPage', { data: { error: "Tài khoản hoặc mật khẩu sai" } });// gửi lên SignInPage object data
                    } else { // nếu không == true thì thông báo đăng nhập thành công 
                        req.session.user = user; // lưu thông tin biến user vào session
                        res.redirect('/');
                    }
                }).catch(function (err) {
                    res.render('SignInPage', { data: { error: "Tài khoản hoặc mật khẩu sai " } });
                })
            } else {
                res.render('SignInPage', { data: { error: "Tài khoản hoặc mật khẩu sai" } });
            }
        }
    }else{
        res.redirect(req.originalUrl);
    }
   
})
function splitString(sliptarr){
    var Last_name ="";
    for(let i = 1 ; i<sliptarr.length;i++){
        if(Last_name.length == 0){
         Last_name = sliptarr[i]
        }else{
         Last_name = Last_name+  ' ' + sliptarr[i];
        }
        
    }
    return Last_name;
  }
  //passport
  router.get('/auth/fb',passport.authenticate('facebook',{scope:['email']}))
  router.get('/auth/fb/cb',passport.authenticate('facebook',{
    failureRedirect:'/',
    successRedirect:'/',
  }))
  passport.use(new  passportfb (
    {
        clientID:"275650027183751",
        clientSecret:"7976d4aff6e90376a62a29d174bb7e67",
        callbackURL:'http://localhost:3000/auth/fb/cb',
        profileFields:['email','gender','displayName']
        
    },
   async (accessToken,refreshToken,profile,done)=>{
      
        var data = await user_check.checkU(profile._json.email);
        if(data.length !=0){
            return done(null,data);
        }
        let FullName = profile._json.name.split(" ");
        let First_name = FullName[0];
        var Last_name =splitString(FullName);
        var date = new Date();
        var iUser = {
            First_name: First_name,
            Last_name: Last_name,
            Email:profile._json.email ,
            Pass: profile._json.id,
            SDT:0,
            QuyenHan: 'user',
            Update_at: date,
            Created_at: date,
            money:100000
          }
          user_check.addUser(iUser);
          
          return done(null,iUser);   
    }
    
  ))
    //Google passport 
 /* router.get('/auth/gg',passport.authenticate('google',{scope:['email']}))
  router.get('/auth/gg/cb',passport.authenticate('google',{
    failureRedirect:'/',
    successRedirect:'/',
  }))
  passport.use(new  passportgg (
    {
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
        
    },
   async (accessToken,refreshToken,profile,done)=>{
      
        var data = await user_check.checkU(profile._json.email);
        if(data.length !=0){
            return done(null,data);
        }
        let FullName = profile._json.name.split(" ");
        let First_name = FullName[0];
        var Last_name =splitString(FullName);
        var date = new Date();
        var iUser = {
            First_name: First_name,
            Last_name: Last_name,
            Email:profile._json.email ,
            Pass: profile._json.id,
            SDT:0,
            QuyenHan: 'user',
            Update_at: date,
            Created_at: date,
            money:100000
          }
          user_check.addUser(iUser);
          
          return done(null,iUser);   
    }
    
  ))*/
  passport.serializeUser((user,done)=>{
        done(null,user)
  });
  passport.deserializeUser( async (user,done)=>{
    var data = await user_check.checkU(user[0].Email);
    if(data.length !=0){
        done(null,data[0]);
    }
  });



module.exports = router;


