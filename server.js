var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var q = require('q');

server.listen(3000, function () {});
app.use(express.static('client'));
app.use(bodyParser.json());
var socketDefer = q.defer();
io.on('connection', function(socket){
	socketDefer.resolve(socket);
	console.log('user connected');
});

require('./server/services/songService')(app, socketDefer.promise);
require('./server/services/queueService')(app, socketDefer.promise);
