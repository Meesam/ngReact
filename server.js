
'use strict';
let express=require('express');
let bodyParser=require('body-parser');
let path=require('path');
let cookieparser=require('cookie-parser');

// app configuration
let app=express();
let apiRoutes = express.Router();

// use middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieparser());

app.route('/*').get(function(req, res) {
  if(req.path==='/swagger'){
    return res.sendFile(path.join(__dirname +'/index.html'));
  } else {
    return res.sendFile(path.join(__dirname+'/index.html'));
  }
});



// this is for run  server on localhost
app.listen(7000, function () {
  console.log('Server runing at ' + 7000);
});

