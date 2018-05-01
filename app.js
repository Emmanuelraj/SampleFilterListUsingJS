var express  = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',function (request,response)
{
  console.log('get method');

  response.render('index')

});

app.listen('3000');

console.log('server listen to the port 3000');
