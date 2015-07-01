/**
 * Created by MEITALBE on 7/1/2015.
 */
module.exports = function (app, io) {

    /*Delete all queue's songs*/
    app.delete('/queue', function (req, res) {
        var id = req.body.id;

        // TODO DB
        // TODO push
    });

    /*Get queue's songs*/
    app.get('/queue', function (req, res) {
        var id = req.body.id;

        // TODO DB
    });
}