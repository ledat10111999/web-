var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/signIn.html', function(req, res, next) {
  res.render('SignInPage', { title: 'Đăng nhập' });
});

module.exports = router;
