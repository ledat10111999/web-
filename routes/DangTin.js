var express = require('express');
var router = express.Router();
var test = require("../Module/Posts");
var value = require('../public/javascripts/value')
// function myFunction() {
// var x = document.getElementById("mySelect").value};

router.get('/DangTin',function(req,res){
    var takeInforCT = test.takeInforCities()
    if(takeInforCT){
        takeInforCT.then(function(results){
             res.render("DangTin",{data: {results: results}} );  
        }).catch(function(error){
            res.render("DangTin",{data:{error: "lỗi" + error}});
        })
    } 
   
})
router.post('/DangTin',function(req,res){
    var post =req.body;
    res.send(post.mySelect);
    
});

module.exports = router;