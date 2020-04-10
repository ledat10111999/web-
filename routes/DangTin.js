var express = require('express');
var router = express.Router();
var test = require("../Module/Posts");
const path = require('path');
var multer = require('multer');
var updatePost = require('../Module/updatePost');
var savePost = require('../Module/savepost')


var _img = [];
var ID_img;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
function checkFileUpload(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|JPEG|gif|HEIC|PNG|JPG|GIF)$/)) {
        cb(new Error("Bạn chỉ được upload file ảnh (png,jpg,JPEG,gif)"))
    } else {
        cb(null, true);
    }
}
var upload = multer(
    { storage: storage, fileFilter: checkFileUpload })
router.get('/DangTin', function (req, res) {
    var val = req.session.user;
    if (val) {
        var takeInforCT = test.takeInforCities()
        if (takeInforCT) {
            takeInforCT.then(function (results) {
                res.render("DangTin", { data: { results: results, sign: val } });
            }).catch(function (error) {
                res.render("DangTin", { data: { error: "lỗi" + error } });
            })
        }
    } else {
        res.redirect('/');
    }
})
// router up load file
router.post('/uploadfile', upload.any(), function (req, res) {
    for (var i = 0; i < req.files.length; i++) {
        _img.push(req.files[i].path)
    }
});

// router thêm bài đăng
router.post('/DangTin', function (req, res) {
    var date = new Date();
    var post = req.body;
    var user = req.session.user;
    var valueposts = {
        IDimg: user.ID,
        tenTp: post.mySelect,
        tenQuan: post.selectDis,
        tenPhuong: post.selectWard,
        tenDuong: post.selectStreet,
        soNha: post.numberaddress,
        DiaChiChinhXac: post.excelentAddress,
        ThongTinMoTa: post.ThongTinMoTa,
        DienTich: post.acreage,
        TieuDe: post.title,
        NoiDung: post.content,
        DoiTuongChoThue: post.doituong,
        Gia: post.gia,
        SDT: post.phoneNumber,
        IDusers: user.ID,
        image: _img[0],
        created_at: date,
        update_at: date
    };
    var add = test._Posts(valueposts, function (param) {
        if (param) {
            for (var i = 0; i < _img.length; i++) {
                var valueimg =
                {
                    IDimg: user.ID,
                    IDpost: param,
                    image: _img[i]
                }
                test.img(valueimg);
            }
            res.redirect('/')
        } else {
            res.send("thêm thất bại")
        }
    })
});

// router bài đã đăng
router.get('/DangTin/post/:id', function (req, res) {
    var user = req.session.user;
    var IDpost = req.params.id;
    if (user) {
        var value = test.takeInforIDPosts(IDpost);

        if (value) {
            value.then(function (results) {
                var _savePost = savePost.takeInforSavePost(user.ID, IDpost);
                if (_savePost) {
                    _savePost.then(function (data) {
                        console.log(data);

                        res.render("post", { data: { results: results, user: user, sign: user, savePost: data } })
                    })
                }

            }).catch(function (err) {
                console.log("Không có bài viết");
            })
        }
    } else {
        var value = test.takeInforIDPosts(IDpost);
        if (value) {
            value.then(function (results) {
                res.render("post", { data: { results: results } })
            }).catch(function (err) {
                console.log("Không có bài viết");
            })
        }
    }

});
// router update
var updateImg = [];
router.post('/updateImg', upload.any(), function (req, res) {
    for (var i = 0; i < req.files.length; i++) {
        updateImg.push(req.files[i].path)
    }
});
router.get('/updatePost/:id', function (req, res) {
    var id = req.params.id;
    var val = req.session.user;
    if (val) {
        var post = test.takeInforIDPosts(id);
        if (post) {

            post.then(function (post) {
                test.takeInforCities2(function (data) {
                    res.render('updatePost', { data: { results: data, post: post, sign: val } })
                })
            }).catch(function (err) {
                res.send(err);
            })
        }
    } else {
        res.redirect('/')
    }
})
router.put('/updatePost', function (req, res) {
    var param = req.body;
    var user = req.session.user;
    var _update = updatePost.updatePost(param, updateImg[0])
    if (_update) {
        _update.then(function (data) {
            res.json({ statusCode: 200 });
        }).catch(function (err) {
            res.json({ err: err });
        })
    }
    else {
        res.json({ err: err })
    }
})
module.exports = router;