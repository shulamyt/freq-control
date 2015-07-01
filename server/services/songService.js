module.exports = function (app, io) {

    /*Create new song*/
    app.post('/song', function (req, res) {
        var name = req.body.name;
        var url = req.body.url;

        // TODO DB
        // TODO push
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