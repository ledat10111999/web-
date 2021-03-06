var express = require('express');
var router = express.Router();
var value = require('../Module/Posts');

//-----------------
function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [ day,mnth,date.getFullYear()].join("-");
}
/* GET home page. */

router.post('/laydulieu', async function (req, res,next) {
  try{
    var _data = await value.takeInforPosts();
    res.json(_data);
  }catch(err){
    console.log(err);
  }
 
})

router.get('/' ,function (req, res, next) {
  // general index

  
  var arrcities = [];
  value.takeInforCities2(function (data) {
    for (var i = 0; i < data.length; i++) {
      arrcities.push(data[i]);
    }
  });
  req.session.user = req.session.user|| req.user || undefined;
  var val =req.session.user ;
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


// end test


// router đăng xuất
router.delete('/logout', function (req, res) {
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
        results.map((value)=>{
          value.created_at = convert(value.created_at);
          value.update_at = convert(value.update_at);
          
          
        })
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
// Bai viet da xem 
router.get('/postW',(req,res)=>{
  var val =req.session.user ;
  if(val){
    res.render('postW',{data:{results :req.session.baivietdaxem,sign: val}})
  }
  res.render('postW',{data:{results :req.session.baivietdaxem,}})
})
//block user 
router.get('/blockuser',(req,res)=>{
  var val =req.session.user ;
  if(val){
    res.render('blockuser',{data:{sign: val}})
  }
  res.redirect('/')
})
module.exports = router;
