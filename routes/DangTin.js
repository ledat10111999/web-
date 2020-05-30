var express = require('express');
var router = express.Router();
var test = require("../Module/Posts");
const path = require('path');
var multer = require('multer');
var updatePost = require('../Module/updatePost');
var savePost = require('../Module/savepost')
//-----------------
function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [ day,mnth,date.getFullYear()].join("-");
  }
// ---------------
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

router.get('/DangTin', upload.any('upload', 12), function (req, res) {
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
// router.post('/uploadfile', upload.any(), function (req, res) {
//     for (var i = 0; i < req.files.length; i++) {
//         _img.push(req.files[i].path)
//     }
// });

// router thêm bài đăng
router.post('/DangTin', upload.any('upload', 12), async function (req, res) {


    var val = req.session.user;
    if(val){
        var date = new Date();
        var post = req.body;
        var takeInforCT = await test.takeInforCities()
        if(post.mySelect.trim().length == 0){
            res.render("DangTin", { data: { error: "Chưa chọn thành phố",results: takeInforCT, sign: val} });
        }
        if(post.selectDis.trim().length == 0){
            res.render("DangTin", { data: { error: "Chưa chọn Quận huyện",results: takeInforCT, sign: val} });
        }
        if(post.selectWard.trim().length == 0){
            res.render("DangTin", { data: { error: "Chưa chọn phường xã",results: takeInforCT, sign: val} });
        }
        if(post.selectStreet.trim().length == 0){
            res.render("DangTin", { data: { error: "Chưa chọn Đường",results: takeInforCT, sign: val} });
        }
        if(post.numberaddress.trim().length == 0){
            res.render("DangTin", { data: { error: "Chưa nhập số nhà",results: takeInforCT, sign: val} });
        }
        if(post.excelentAddress.trim().length == 0){
            res.render("DangTin", { data: { error: "Chưa nhập địa chỉ chính xác",results: takeInforCT, sign: val} });
        }
        if(post.ThongTinMoTa.trim().length == 0){
            res.render("DangTin", { data: { error: "Chưa nhập thông tin mô tả",results: takeInforCT, sign: val} });
        }
        if(post.title.trim().length == 0){
            res.render("DangTin", { data: { error: "chưa nhập tiêu để",results: takeInforCT, sign: val} });
        }
        if(post.content.trim().length == 0){
            res.render("DangTin", { data: { error: "chưa nhập nội dung",results: takeInforCT, sign: val} });
        }
        if(post.content.trim().length == 0){
            res.render("DangTin", { data: { error: "chưa nhập nội dung",results: takeInforCT, sign: val} });
        }
        if(post.phoneNumber.trim().length == 0){
            res.render("DangTin", { data: { error: "chưa nhập số diện thoại",results: takeInforCT, sign: val} });
        }
        if(post.gia.trim().length == 0){
            res.render("DangTin", { data: { error: "chưa nhập giá cho thuê",results: takeInforCT, sign: val} });
        }
        if(post.acreage.trim().length == 0){
            res.render("DangTin", { data: { error: "chưa nhập diện tích",results: takeInforCT, sign: val} });
        }
        if(post.doituong.trim().length == 0){
            res.render("DangTin", { data: { error: "Chọn đối tượng cho thuê",results: takeInforCT, sign: val} });
        }
        if(req.files[0].path.trim().length == 0){
            res.render("DangTin", { data: { error: "Chọn ảnh",results: takeInforCT, sign: val} });
        }
    
    
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
            image: req.files[0].path,
            created_at: date,
            update_at: date,
            display:0
        };
        var add = test._Posts(valueposts, function (param) {
            if (param) {
                for (var i = 0; i < req.files.length; i++) {
                    var valueimg =
                    {
                        IDimg: user.ID,
                        IDpost: param,
                        image: req.files[i].path
                    }
                    test.img(valueimg);
                }
                res.redirect('/')
            } else {
                res.send("thêm thất bại")
            }
        })
    }else{
        res.redirect('/');
    }
   
});

router.get('/DangTin/post/:id', async function (req, res) {
    var user = req.session.user;
    var IDpost = req.params.id;
    if (user ) {
        try {
            var value = await test.takeInforIDPosts(IDpost);
            for(var i = 0 ; i< value.length; i++){
                value[i].created_at = convert(value[i].created_at);
                value[i].update_at = convert(value[i].update_at);
            }
            if (value) {
                var _savePost = await savePost.takeInforSavePost(user.ID, IDpost);
                if (_savePost) {
                    res.render("post", { data: { results: value, user: user, sign: user, savePost: _savePost } })
                }
            }
        } catch (err) {
            console.log(err +'');   
        }
    } else {
       try{
        var value = await test.takeInforIDPosts(IDpost);
            if(value.length !=0){
                // for(var i = 0 ; i< value.length; i++){
                //     value[i].created_at = convert(value[i].created_at);
                //     value[i].update_at = convert(value[i].update_at);
                // }
                value.map((val)=>{
                    val.created_at = convert(val.created_at);
                    val.update_at = convert(val.update_at);
                })
                res.render("post", { data: { results: value } })
            }else{
                res.redirect('/')
            }
       }catch (err){
           res.redirect('/')
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