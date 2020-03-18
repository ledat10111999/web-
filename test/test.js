// // // // // var bcrypt = require ('bcrypt');


// // // // // function hashpass (pass){
// // // // //     var salt = bcrypt.genSaltSync(10);
// // // // //     var hash = bcrypt.hashSync(pass,salt);
// // // // //     return hash;
// // // // // }

// // // // // console.log(hashpass("ledat123"));
// // // // // function compe (pass,hash)
// // // // // {
// // // // //     var hash =bcrypt.compareSync(pass, hash);
// // // // //     return hash;
// // // // // }
// // // // // console.log(compe("ledat123",hashpass("ledat123")));


// // var db = require('../common/data_base')
// // var q = require ('q');
// // var connection = db.getConnection();
// // var hashpass = require("../hash_pass/hash_pass")
// // var checkE = require('../Module/users');
// // var test = require ('../Module/Posts')

// // function Testinf(){
// //     var matp = " 59";
// //     var _test = test.takeInforCities()
// //     if(_test){
// //         _test.then((result) => {
// //             for (var i = 0; i< result.length; i++){
// //                 console.log(result[i]);
                
// //             }
// //            console.log(result.length);
           
            
// //         }).catch((err) => {
// //             console.log("không tìm thấy" + err);
            
// //         });
// //     }
// // }

// // console.log(Testinf());
// var express = require('express');
// var router = express.Router();
var test = require("../Module/Posts");
// var value = require('../public/javascripts/value')

//   var test =  router.get('/DangTin',function(req,res){
   
//    var body = req.body.DangTin;
   
//         // _test = test.infor(body);
//         // if(_test){
//         //     _test.then(function(result){
//         //         res.render("DangTin",{data: {ketqua: result}} );  
//         //     }).catch(function(error){
//         //         res.render("DangTin",{data:{error: "lỗi" + error}});
//         //     })
//         // }
    
// }) 

// console.log(test);
var mysql = require ('mysql');

// var db = require('../common/data_base');

// var conn = db.getConnection();

// var info = require('../Module/Posts');
// // module.exports = router;
// var value = " Thành Phố Hồ Chí Minh";
//  var _conn = conn.escape(value);
// function test()
// {
//   console.log("Hello");
  function _test(){
    var info = "Thành Phố Hồ Chí Minh";
    // _info = mysql.escape(info);
    var _info = test.takeInforDistric(info);
    if(_info){
      _info.then(function(data){
        console.log(data);
        
        
      })
  }
}
      console.log(_test());
