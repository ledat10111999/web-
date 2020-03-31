var express = require('express');
var router = express.Router();
var test = require("../Module/Posts");
const path = require('path');
var multer = require('multer')


var _img = [];
var ID_img ;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now()+ '-' +file.originalname );
    }
  })
 
 function checkFileUpload(req, file, cb){
     if(!file.originalname.match(/\.(jpg|png|JPEG|gif|HEIC|PNG|JPG|GIF)$/)){
         cb(new Error("Bạn chỉ được upload file ảnh (png,jpg,JPEG,gif)"))
     }else{
         cb(null,true);
     }
 }
 var upload = multer(
    
    { storage: storage, fileFilter: checkFileUpload }) 

router.get('/DangTin',function(req,res){
    var val = req.session.user;
    if(val){
       var sign = {
           ho: val.First_name,
           ten:val.Last_name,
           Email: val.Email,
           ID: val.ID
       }
        var takeInforCT = test.takeInforCities()
        if(takeInforCT){
            takeInforCT.then(function(results){
                 res.render("DangTin",{data: {results: results,sign:sign}} );  
            }).catch(function(error){
                res.render("DangTin",{data:{error: "lỗi" + error}});
            })
        } 
    }   else{
        res.redirect('/');
    }
   
   
})
// router up load file
router.post('/uploadfile',upload.any(),function(req,res){
    for(var i = 0; i< req.files.length;i++){
        _img.push(req.files[i].path)
    }
  
});

// router đăng tin
router.post('/DangTin',function(req,res){
    var date = new Date() ;
   var post = req.body;
    var user =req.session.user;
    var valueposts = {
        IDimg : user.ID,
        tenTp  : post.mySelect,
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
        SDT : post.phoneNumber,
        IDusers: user.ID,
        image:_img[0],
        created_at: date,
        update_at: date
    }; 
      var add = test._Posts(valueposts,function(param){
          if(param){
            for(var i = 0; i<_img.length;i++){
                var valueimg =
                {
                    IDimg : user.ID,
                    IDpost: param,
                    image : _img[i]
                }
                test.img(valueimg);        
        }
        res.redirect('/')
          }else{
              res.send("thêm thất bại")
          }
      })
});

// router bài đăng
router.get('/DangTin/post/:id',function(req,res){
   var IDpost = req.params.id;
   var value = test.takeInforIDPosts(IDpost);
   if(value){
       value.then(function(results){
          console.log(IDpost);
           res.render("post",{data:{results:results}})
       }).catch(function(err){
           console.log("Không có bài viết");
           
       })
   }
    
});

module.exports = router;