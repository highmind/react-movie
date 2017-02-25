var express = require('express');
var port = require('./config').port;
var uri = require('./config').uri;
var User = require('./models/user');
var mongoose = require('mongoose');
var routes = require('./routes');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//调用 urlencoded 接口，抽取 HTTP 请求正文中的类似这样的 cat='doudou'&color='gray' 字符串（例如普通的 form 提交，就属于这种情况），以 key: value 数据对的形式存放到 req.body 对象中供程序使用
app.use(bodyParser.json());//调用 json 接口，抽取 HTTP 请求正文中的 JSON 数据，存放到 req.body 对象中供程序使用

mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', function(err){
  console.log('db connection failed!', err);
});
db.once('open', function() {
  console.log('db connection success!');
  var user = new User({
    username : '李白',  //设置了字段唯一，多次刷新不会增加数据库记录
    password : '123456'
  })

  user.save();

});

// 路由调用
routes(app);


app.listen(port, function(){
  console.log('express is  listening on port 3000');
})
