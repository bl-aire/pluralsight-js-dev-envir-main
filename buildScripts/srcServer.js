import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

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
