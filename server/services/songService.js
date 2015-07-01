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

    /*Get song by ID*/
    app.get('/song', function (req, res) {
        var id = req.body.id;

        // TODO DB
    });

    /*Delete song by ID*/
    app.delete('/song', function (req, res) {
        var id = req.body.id;

        // TODO DB
        // TODO push
    });

    /*Mark Like a song by ID*/
    app.post('/song/like', function (req, res) {
        var id = req.body.id;

        // TODO DB
        // TODO push
    });

    /*Mark Dislike a song by ID*/
    app.post('/song/dislike', function (req, res) {
        var id = req.body.id;

        // TODO DB
        // TODO push
    });

};