var express = require('express');
var app = express();

app.listen(3000, function () {});
app.use(express.static('client'));

app.get('/Shula', function (req, res) {
  res.send('<div>Hello Shula!</div>');
});

app.get('/Meital', function (req, res) {
  res.send('<div>Hello Meital!</div>');
});

app.get('/Oreli', function (req, res) {
  res.send('<div>Hello Oreli!</div>');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

