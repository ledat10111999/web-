var express = require('express');
var router = express.Router();
var update = require('../Module/updateInforUser');
var IfUser = require('../Module/users');
var hash = require('../hash_pass/hash_pass')
// router.put('/updateFirstName', function (req, res) {
//     var data = req.body;
//     var updateFirstName = update.upDateFirst_name(data);
//     if (updateFirstName) {
//         updateFirstName.then(function (result) {
//             var infor = IfUser.takeInforUser(data.ID);
//             if (infor) {
//                 infor.then(function (param) {
//                     req.session.user = param[0];
//                     res.json({ statusCode: 200, result: param })
//                 })
//             }

//         }).catch(function (error) {
//             res.json({ statusCode: 500 })
//         })
//     } else {
//         res.json({ statusCode: 500 })
//     }
// })
// await
router.put('/updateFirstName', async function (req, res) {
    var data = req.body;
    try {
        var firstname = await update.upDateFirst_namePromise(data);
        IfUser.takeInforUser(data.ID).then((param) => {
            req.session.user = param[0];
            res.json({ statusCode: 200, result: param })
        })
    } catch (error) {
        res.json({ statusCode: 500 });
    }

})
router.put('/updateLastName', async function (req, res) {
    var data = req.body;
    try {
        var updateLastName = await update.upDateLast_name(data);
        IfUser.takeInforUser(data.ID).then((param) => {
            req.session.user = param[0];
            res.json({ statusCode: 200, result: param })
        })
    } catch (err) {
        res.json({ statusCode: 500 });
    }
})
router.put('/updatePhoneNumber', async function (req, res) {
    var data = req.body;
    try {
        var PhoneNumber = await update.upDatePhone_number(data);
        IfUser.takeInforUser(data.ID).then((param) => {
            req.session.user = param[0];
            res.json({ statusCode: 200, result: param })
        })
    } catch (error) {
        res.json({ statusCode: 500 });
    }
})

// Change Pass
router.put('/ChangePass',async function(req,res){
    var param = req.body;
    try{
        var info = await IfUser.takeInforUser(param.ID);
        var hash_pass = hash.check_password(param.oldpassword,info[0].Pass);
        if(hash_pass == true){
            var passW = hash.hash_password(param.renewpassword);
            var value ={
                Pass: passW,
                ID:param.ID
            }
            var ChangePass= await update.upDatePass_Word(value);
                res.json({statusCode:200})
        }else{
            res.json({err:'Mật khẩu cũ không chính xác'})
        }
    }catch(err){
        res.json({err:err})
        
    }
   
})
module.exports = router;