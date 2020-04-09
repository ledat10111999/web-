var express = require('express');

var router = express.Router();
var data = require('../Module/Posts')

router.get('/angular',function(req,res){
    res.render('test/angular')
    console.log(__dirname);  
})

module.exports = router;