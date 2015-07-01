var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var q = require('q');

server.listen(3000, function () {});
app.use(express.static('client'));
app.use(bodyParser.json());


require('./server/services/songService')(app, io);
require('./server/services/queueService')(app, io);
require('./server/services/playerService')(app, io);
