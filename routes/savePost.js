var express = require('express');
var router = express.Router();
var SQl = require('../Module/savepost');

router.post('/savePost', function (req, res) {
    var value = req.body;
    var get = SQl.savePost(value);
    if (get) {
        get.then(function (data) {
            res.json({ statusCode: 200 });
        }).catch(function (error) {
            console.log(error);
        })
    }
})
router.delete('/deleteSavePost', function (req, res) {
    var param = req.body;
    var del = SQl.deleteSavePost(param.IDusers, param.IDpost);
    if (del) {
        del.then(function (data) {
            res.json({ statusCode: 200 })
        })
    }
})
router.get('/savePosts/:param', function (req, res, next) {
    var val = req.session.user;
    if (val) {
        var saved = SQl.saved(val.ID);
        if (saved) {
            saved.then(function (data) {
                res.render('savePosts', { data: { sign: val, saved: data } });
            }).catch(function (error) {
                console.log(error);

            })
        }

    } else {
        res.redirect('/');
    }
})

module.exports = router;