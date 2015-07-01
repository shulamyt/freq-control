module.exports = function (app, socket) {
    /*Create new song*/



    app.post('/song', function (req, res) {
        var name = req.body.name;
        var url = req.body.url;
        socket.then(function(socketObj){
            socketObj.on('newMessage', function(message){
                socketObj.broadcast.emit('new message', {
                    username: socketObj.username,
                    message: message
                });
            });
        })

    });
};