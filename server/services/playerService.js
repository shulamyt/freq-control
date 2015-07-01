module.exports = function (app, io) {

    io.on('connection', function(socket){
        socket.on('mute', mute);
        socket.on('unMute', unmute);
        socket.on('play', play);
        socket.on('stop', stop);
        socket.on('volumeUp', volumeUp);
        socket.on('volumeDown', volumeDown);
        socket.on('loadUrl', loadUrl);
        socket.on('prevSong', prevSong);
        socket.on('nextSong', nextSong);
    });

    prevSong = function(){
        io.emit("prevSong");
    };

    nextSong = function(){
        io.emit("nextSong");
    };
    play = function(){
        io.emit("play");
    };

    stop = function(){
        io.emit("stop");
    };

    mute = function(){
        io.emit("mute");
    };

    unmute = function(){
        io.emit("unMute");
    };

    volumeUp = function(){
        io.emit("volumeUp");
    };

    volumeDown = function(){
        io.emit("volumeDown");
    };

    loadUrl = function(url){
        io.emit("loadUrl", url);
    };

};