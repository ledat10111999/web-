// // // // // // var bcrypt = require ('bcrypt');

// var q = require('q');
// // // // // // function hashpass (pass){
// // // // // //     var salt = bcrypt.genSaltSync(10);
// // // // // //     var hash = bcrypt.hashSync(pass,salt);
// // // // // //     return hash;
// // // // // // }

// // // // // // console.log(hashpass("ledat123"));
// // // // // // function compe (pass,hash)
// // // // // // {
// // // // // //     var hash =bcrypt.compareSync(pass, hash);
// // // // // //     return hash;
// // // // // // }
// // // // // // console.log(compe("ledat123",hashpass("ledat123")));


// // // var db = require('../common/data_base')
// // // var q = require ('q');
// // // var connection = db.getConnection();
// // // var hashpass = require("../hash_pass/hash_pass")
// // // var checkE = require('../Module/users');
// // // var test = require ('../Module/Posts')

// // // function Testinf(){
// // //     var matp = " 59";
// // //     var _test = test.takeInforCities()
// // //     if(_test){
// // //         _test.then((result) => {
// // //             for (var i = 0; i< result.length; i++){
// // //                 console.log(result[i]);
                
// // //             }
// // //            console.log(result.length);
           
            
// // //         }).catch((err) => {
// // //             console.log("không tìm thấy" + err);
            
// // //         });
// // //     }
// // // }

// // // console.log(Testinf());
// // var express = require('express');
// // var router = express.Router();
// var test = require("../Module/Posts");
// // var value = require('../public/javascripts/value')

// //   var test =  router.get('/DangTin',function(req,res){
   
// //    var body = req.body.DangTin;
   
// //         // _test = test.infor(body);
// //         // if(_test){
// //         //     _test.then(function(result){
// //         //         res.render("DangTin",{data: {ketqua: result}} );  
// //         //     }).catch(function(error){
// //         //         res.render("DangTin",{data:{error: "lỗi" + error}});
// //         //     })
// //         // }
    
// // }) 

// // console.log(test);
// var mysql = require ('mysql');
// var data_base = require('../common/data_base')
// var connection = data_base.getConnection();
// // var db = require('../common/data_base');

// // var conn = db.getConnection();

// // var info = require('../Module/Posts');
// // // module.exports = router;
// // var value = " Thành Phố Hồ Chí Minh";
// //  var _conn = conn.escape(value);

// //   function _test(){
// //     var info = "Thành Phố Hồ Chí Minh";
// //     // _info = mysql.escape(info);
// //     var valueposts = {
// //       IDimg : 85  ,
// //       tenTp  : "Thành Phố Hồ Chí Minh",
// //       tenQuan: "Quận 2",
// //       tenPhuong: "Phường Thủ Thiêm",
// //       tenDuong: "Điện Biên Phủ",
// //       soNha: 15,
// //       DiaChiChinhXac: "admin  ",
// //       ThongTinMoTa: 'admin test',
// //       DienTich: "50",
// //       TieuDe: "admintest",
// //       NoiDung: "admin test",
// //       DoiTuongChoThue: "nam",
// //       SDT : 0376,
// //       IDusers: 85

// //   }; 
// //     var _info = test.Posts(valueposts);
// //     if(_info){
// //       _info.then(function(data){

// //         var arr = [];
// //         console.log(data);
// //       })
// //   }
// // }
// //       console.log(_test());

//         var valueposts = {
//       IDimg : 90 ,
//       tenTp  : "Thành Phố Hồ Chí Minh",
//       tenQuan: "Quận 2",
//       tenPhuong: "Phường Thủ Thiêm",
//       tenDuong: "Điện Biên Phủ",
//       soNha: 15,
//       DiaChiChinhXac: "admin  ",
//       ThongTinMoTa: 'admin test',
//       DienTich: 50,
//       TieuDe: "admintest",
//       NoiDung: "admin test",
//       DoiTuongChoThue: "nam",
//       SDT : 0376,
//       IDusers: 90,
//       update_at: new Date(),
//       created_at:  new Date()
     

//   };
//   var hoho = require('../Module/Posts');
//   function haha(){
//     var hihi = hoho._Posts(valueposts,function(data){
//       console.log("Thêm thành công data" +data);

      
//     })
    
//   } 

//   console.log(haha());
  
  
// // function haha (){
// //   test.tablePosts().then(function(data){
// //     var x ;
// //    x = data.pop();
// //     console.log(x.ID);
    
// //   })
// // }
// // console.log(haha());
//  var value = require('../Module/Posts');
//  var arr = [];
//  function test(){
//    value.takeInforPosts().then(function(array){
//     for (let index = 0; index < array.length; index++){
//     console.log(array[index].Gia);
    

//     }

    
//    })
//  }
//  console.log(test());
 var __data =[
   {
    Tên : "Đạt",
    họ: "Lê"
   },
   {
    Tên : "Đạt2",
    họ: "Lê"
   }
 ]
//  data: {results: results} 
// var data = {data1 :{_data} }
// console.log(data.data1._data[0].Tên);
// data.err
var test = require('../Module/Posts')

// var ab =[] ;
// function haha(){
//   var _test = test.takeInforCities().then(function(data){
  
//     for(var i = 0 ; i< data.length; i++){
//       ab.push(data[i].tenTp);
//     }
  
//   console.log(ab);
  
 
// })
// }
 
// console.log(haha());

var val = require('../Module/Posts')
var q = require('q');
var data_base=  require('../common/data_base');
var mysql = require('mysql');

var connection = data_base.getConnection();
// [param.tenTp,param.tenQuan,param.tenPhuong,param.tenDuong,param.soNha,param.DiaChiChinhXac,param.ThongTinMoTa,Param.DienTich,param.TieuDe,param.NoiDung,param.DoiTuongChoThue,param.Gia,param.SDT,param.update_at,image,param.ID]
// function updatePost(param,image){
//   if(param && image){
//       var defer = q.defer();
//       console.log(param);
//       var sql ="UPDATE posts SET tenTp =" +mysql.escape(param.tenTp)+",tenQuan = "+ mysql.escape(param.tenQuan)+",tenPhuong= "+ mysql.escape(param.tenPhuong)+ ", tenDuong= " + mysql.escape(param.tenDuong) +  ",soNha= " + param.soNha + ",DiaChiChinhXac= "+ mysql.escape(param.DiaChiChinhXac) +  ",ThongTinMoTa = " + mysql.escape(param.ThongTinMoTa) + ",DienTich = "+  param.DienTich+  ",TieuDe ="+ mysql.escape(param.TieuDe) +",NoiDung = " +mysql.escape(param.NoiDung) + " ,DoiTuongChoThue = " +mysql.escape(param.DoiTuongChoThue) +",Gia = "+param.Gia+",SDT = "+param.SDT+",update_at = "+ new Date()+",image="+ image+" where ID = " + param.ID+" ";
//      var query = connection.query(sql,function(error, results, fields){
//          if(error){
//              defer.reject(error);
//          }else{
//                  defer.resolve(results);
//          } 
//          return defer.promise;  
//      });
//   }return false;
// }

// function haha(){
//   var param = {
//     ID: "69 ",
// tenTp: "Thành Phố Hồ Chí Minh",
// tenQuan: "Quận 2",
// tenPhuong: "Phường An Lợi Đông",
// tenDuong: "Xa lộ Hà Nội",
// soNha: "56 ",
// DiaChiChinhXac: "Thanh Đa ",
// ThongTinMoTa: "Phòng trọ",
// DienTich: "100",
// TieuDe: "Cho thuê nhà ",
// NoiDung: "Nhà cho thuê",
// DoiTuongChoThue: "Nam",
// Gia: "10000000 ",
// SDT: "0376467658 ",
    
//   }
//   var image = 'upload/1585407846394-villa.jpg';
//      var value = val.updatePost(param,image);
//      if(value){
//        value.then(function(data){
//          console.log('Cập nhật thành công');
         
//        }).catch(function(err){
//          console.log(err);
         
//        });
//      }else{
//        console.log("lỗi");
       
//      }
// }

// haha();


// var param = {
//   ID: 69, 
//   tenTp: "Thành Phố Hồ Chí Minh",
//   tenQuan: "Quận 2",
//   tenPhuong: "Phường An Lợi Đông",
//   tenDuong: "Xa lộ Hà Nội",
//   soNha: 56, 
//   DiaChiChinhXac: "Thanh Đa    ",
//   ThongTinMoTa: "Phòng trọ",
//   DienTich: 100,
//   TieuDe: "Cho thuê nhà    ",
//   NoiDung: "Nhà cho thuê",
//   DoiTuongChoThue: "Nam",
//   Gia: 10000000 ,
//   SDT: 376467658 ,
// update_at: new Date()
// }
// var val = require('../Module/updatePost')
// function haha (param){
//   var image = 'upload/1585407846394-villa.jpg';
//         var value = val.updatePost(param,image);
//         if(value){
//           value.then(function(data){

//             console.log("Thành công "+data.ID);
            
//           }).catch(function(err){
//             console.log("có lối " + err);
            
//           })
//         }
// }

console.log('đây là đường dẫn' +__dirname);
