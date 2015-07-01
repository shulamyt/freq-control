module.exports = function (app, io) {

    io.on('connection', function(socket){
        socket.on('mute', mute);
        socket.on('unMute', unmute);
    });

    mute = function(){
        io.emit("mute");
    };

    unmute = function(){
        io.emit("unMute");
    };

};