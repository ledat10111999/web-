var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('config');
var io = require('socket.io');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');
var signinRouter = require('./routes/signin');
var DangTinRouter = require('./routes/DangTin');
var savePost = require('./routes/savePost');
var deletePost = require('./routes/deletePost');
var updateInforUser = require('./routes/updateInforUser');
var adminPost = require('./routes/Admin/Post');
var admin = require('./routes/admin/admin');
var testAngular = require('./routes/angular')


var app = express();

//body parser 
app.use(bodyParser.json()); //de code lại body

app.use(bodyParser.urlencoded({extended :true })); // lấy được body từ form bắn lên
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set data session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret:config.get('secret_key'),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload',express.static('upload'));

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

app.use('/',testAngular);


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
