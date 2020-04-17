var express = require('express');
var router = express.Router();
var update = require('../Module/updateInforUser');
var IfUser = require('../Module/users');
router.put('/updateFirstName', function (req, res) {
    var data = req.body;
    var updateFirstName = update.upDateFirst_name(data);
    if (updateFirstName) {
        updateFirstName.then(function (result) {
            var infor = IfUser.takeInforUser(data.ID);
            if (infor) {
                infor.then(function (param) {
                    req.session.user = param[0];
                    res.json({ statusCode: 200, result: param })
                })
            }

        }).catch(function (error) {
            res.json({ statusCode: 500 })
        })
    } else {
        res.json({ statusCode: 500 })
    }
})

router.put('/updateLastName', function (req, res) {
    var data = req.body;
    var updateLastName = update.upDateLast_name(data);
    if (updateLastName) {
        updateLastName.then(function (result) {
            var infor = IfUser.takeInforUser(data.ID);
            if (infor) {
                infor.then(function (param) {
                    req.session.user = param[0];
                    res.json({ statusCode: 200, result: param })
                })
            }

        }).catch(function (error) {
            res.json({ statusCode: 500 })
        })
    } else {
        res.json({ statusCode: 500 })
    }
})

router.put('/updatePhoneNumber', function (req, res) {
    var data = req.body;
    var PhoneNumber = update.upDatePhone_number(data);
    if (PhoneNumber) {
        PhoneNumber.then(function (result) {
            var infor = IfUser.takeInforUser(data.ID);
            if (infor) {
                infor.then(function (param) {
                    req.session.user = param[0];
                    res.json({ statusCode: 200, result: param })
                })
            }

        }).catch(function (error) {
            res.json({ statusCode: 500 })
        })
    } else {
        res.json({ statusCode: 500 })
    }
})
module.exports = router;