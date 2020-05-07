var express = require('express');
var router = express.Router();
var user_check = require('../Module/users');
var hash = require('../hash_pass/hash_pass');
router.get('/signin', function (req, res, next) {
    res.render('SignInPage', { data: {} });
});
router.post('/signin', function (req, res, next) {
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
})
module.exports = router;

