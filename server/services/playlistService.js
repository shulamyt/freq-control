/**
 * Created by MEITALBE on 7/1/2015.
 */
var db = require('./DBService');

module.exports = function (app, io) {

    /*Add playlist*/
    app.post('/playlist', function (req, res) {
        var id = req.body.id;

        // TODO DB
        // TODO push
    });

    /*Delete playlist*/
    app.delete('/playlist', function (req, res) {
        var id = req.body.id;

        // TODO DB
        // TODO push
    });

    /*Get playlist*/
    app.get('/playlist', function (req, res) {
        var id = req.body.id;

        // TODO DB
    });

};