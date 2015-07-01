var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000, function () {});
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

io.on('connection', function(socket){
	console.log('user connected');
	 socket.on('newMessage', function(message){
	 	 socket.broadcast.emit('new message', {
       username: socket.username,
       message: message
     });
	 	});
});

