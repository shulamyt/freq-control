var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

server.listen(3000, function () {});
app.use(express.static('client'));
app.use(bodyParser.json());

io.on('connection', function(socket){
	console.log('user connected');
	 socket.on('newMessage', function(message){
	 	 socket.broadcast.emit('new message', {
       username: socket.username,
       message: message
     });
	 	});
});

require('./server/services/songService')(app, io);
