var mongo = require('./DBService.js');
var QueueService = require('./queueService.js')

module.exports = function (app, io) {

    io.on('connection', function(socket){
        socket.on('addNewSong', addNewSong);

    });

    addNewSong = function(song){
        io.emit('addNewSong', song);
    };

    /*Create new song*/
    app.post('/song', function (req, res) {

        var name = req.body.name;
        var url = req.body.url;
        var artist = req.body.artist;
        var album = req.body.album;

        mongo.insertSong(name, url, album, artist);
        var songs = mongo.getQueueSongs();
        io.emit('songAdded',  songs);
    });

    /*Get song by Name*/
    app.get('/song', function (req, res) {
        var name = req.body.name;

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
        var name = req.body.name;

        // TODO DB
        mongo.updateSongLike(name);
        // TODO push
    });

    /*Mark Dislike a song by ID*/
    app.post('/song/dislike', function (req, res) {
        var name = req.body.name;

        // TODO DB
        mongo.updateSongDislike(name);

        // TODO push
    });

};