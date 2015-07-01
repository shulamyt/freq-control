module.exports = function (app, io) {
    /*Create new song*/
    app.post('/song', function (req, res) {
        var name = req.body.name;
        var url = req.body.url;

    });
};