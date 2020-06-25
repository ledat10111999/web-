var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('config');
var io = require('socket.io');

// var expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const passportfb = require('passport-facebook').Strategy;
var user_check = require('./Module/users');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');
var signinRouter = require('./routes/signin');
var DangTinRouter = require('./routes/DangTin');
var savePost = require('./routes/savePost');
var deletePost = require('./routes/deletePost');
var updateInforUser = require('./routes/updateInforUser');
// admin
var adminPost = require('./routes/Admin/Post');
var admin = require('./routes/Admin/admin');
var adminUser = require('./routes/Admin/user');
const { text } = require('body-parser');


var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload',express.static('upload'));
app.use('/Admin',express.static('Admin'));



//body parser 
app.use(bodyParser.json()); //de code lại body
app.use(bodyParser.urlencoded({extended :false })); // lấy được body từ form bắn lên


//set data session
app.set('trust proxy',1) // trust first proxy
app.use(session({
  secret:config.get('secret_key'),
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//passport
app.use(passport.initialize());
app.use(passport.session());

/*function splitString(sliptarr){
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
app.route('/auth/fb').get(passport.authenticate('facebook',{scope:['email']}),(req,res)=>{
  
})
app.route('/auth/fb/cb').get(passport.authenticate('facebook',{
  failureRedirect:'/',
  successRedirect:'/',
  session:true
}),(req,res)=>{

})
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
passport.serializeUser((user,done)=>{
  done(null,user)
})
passport.deserializeUser( async(user,done)=>{
  var data = await user_check.checkU(user.Email);
  if(data.length !=0){
      return done(null,data);
      
  }
})*/


app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/',signupRouter);
app.use('/',signinRouter);
app.use('/',DangTinRouter);
app.use('/',savePost);
app.use('/',deletePost);
app.use('/',updateInforUser);
app.use('/',admin);
app.use('/admin/',adminPost);
app.use('/admin/',adminUser);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
