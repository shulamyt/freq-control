var express = require('express');
var app = express();
var server = app.listen(3000, function () {});

app.get('/Shula', function (req, res) {
  res.send('<div>Hello Shula!</div>');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

