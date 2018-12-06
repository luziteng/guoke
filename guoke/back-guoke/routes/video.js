var express = require('express');
var router = express.Router();
var db =require('../lib/addRegister.js');//引入操作数据库的文件，自定义模块使用相对路径（addRget即拿到的是addRegister.js文件下的query方法）
/* GET users listing. */

/* GET users listing. */
//通过skip()与limit()方法实现分页。skip()从第几条获取，limit()获取到第几条
//当数据量很小时，这样做分页完全没有问题。但是当数据量很大时，skip操作会变的很慢，应该避免使用。　　
router.post('/guoran', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");//跨域问题
console.log(req.body);
var a = Number(req.body.pageNumber);
var b = Number(req.body.pageSize);
    db.query(function(db){
      //find为空时查找整个数据库数据
        db.collection('guoran').find({}).skip(a).limit(b).toArray(function (err, docs){
            console.log(docs);
            res.send(docs);//给前端返回结果
        });
    })
});

module.exports = router;
