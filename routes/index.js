var express = require('express');
var router = express.Router();
var value = require('../Module/Posts')

/* GET home page. */

router.post('/laydulieu', async function (req, res,next) {
  try{
    var _data = await value.takeInforPosts();
    res.json(_data);
  }catch(err){
    console.log(err);
  }
 
})

router.get('/', function (req, res, next) {

  // general index
  var arrcities = [];
  value.takeInforCities2(function (data) {
    for (var i = 0; i < data.length; i++) {
      arrcities.push(data[i]);
    }
  });


  var val = req.session.user;
  if (val) {
    var posts = value.takeInforPosts();
    if (posts) {
      posts.then(function (results) {
        
        
        res.render('index', { data: { results: results, sign: val, cities: arrcities } });
      }).then(function (error) {
        console.log(error);
      })
    }
  } else {
    var posts = value.takeInforPosts();
    if (posts) {
      posts.then(function (results) {
    
        res.render('index', { data: { results: results, cities: arrcities } });
      }).catch(function (error) {
        console.log(error);
      })
    }
  }
});

// test

router.get('/index2', function (req, res, next) {
  res.render('index2');

})

router.get('/index3', function (req, res, next) {
  var val = value.takeInforCities();
  if (val) {
    val.then(function (data) {
      res.json({ statusCode: 200, cities: data })
    }).catch(function (err) {
      res.json({ statusCode: 500 })
    })
  } else {
    res.json({ statusCode: 500 })
  }
})
// end test


// router đăng xuất
router.delete('/', function (req, res) {
  req.session.destroy(function (err) {
    if (!err) {
      res.json({ statusCode: 200 })
    } else {
      console.log(err);
    }
  });
})
router.get('/posted/:ID', function (req, res) {
  var val = req.session.user;

  if (val) {

    var post = value.takeInforIDPostsIDUsers(val.ID);
    if (post) {
      post.then(function (results) {
        res.render('posted', { data: { sign: val, results: results } });
      }).catch(function (err) {
        res.render('posted', { data: { sign: val, err: err } });
      })
    }

  } else {
    res.redirect('/');
  }
})

// search bar
router.post('/Distric', function (req, res) {
  var Distric = req.body;
  var arr = ['<option value=" ">Quận huyện</option>'];
  var val = value.takeInforDistric(Distric.tenTp);
  if (val) {
    val.then(function (data) {
      for (var i = 0; i < data.length; i++) {
        arr.push(`<option value="${data[i]._name}">${data[i]._prefix} ${data[i]._name}</option>`)
      }
      res.json({ statusCode: 200, distric: arr })
    }).catch(function (err) {
      console.log(err);

    })
  }
})
router.post('/Ward', function (req, res) {
  var param = req.body;
  var arr = ['<option value=" ">Phường xã</option>'];

  var val = value.takeInforWard(param.tenQuan, param.tenTp);
  if (val) {
    val.then(function (data) {
      for (var i = 0; i < data.length; i++) {
        arr.push(`<option value="${data[i]._prefix} ${data[i]._name}">${data[i]._prefix} ${data[i]._name}</option>'`)
      }
      res.json({ statusCode: 200, ward: arr })
    })
  }
})
router.post('/street', function (req, res) {
  var param = req.body;
  var arr = ['<option value=" ">Đường Phố</option>'];
  var val = value.takeInforStreet(param.tenQuan, param.tenTp);
  if (val) {
    val.then(function (data) {
      for (var i = 0; i < data.length; i++) {
        arr.push(`<option value="${data[i]._prefix} ${data[i]._name}">${data[i]._prefix} ${data[i]._name}</option>'`)
      }
      res.json({ statusCode: 200, ward: arr })
    })
  }
})

module.exports = router;
