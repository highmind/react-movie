var express = require('express');
var port = require('./config.js').port;
var uri = require('./config.js').uri;
var mongoose = require('mongoose');
var app = express();

mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', function(err){
  console.log('db connection failed!', err);
});
db.once('open', function() {
  console.log('db connection success!')
});

app.get('/api', function(req, res){
  res.send('success');
})

app.listen(port, function(){
  console.log('express is  listening on port 3000');
})
