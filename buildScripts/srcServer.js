var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(3000, ()=>{
  require('child_process').exec('start http://localhost:3000/');
});

/*app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);..this wasn't opening the page automatically on my browser so i used the node in-built child process
  }
});*/
