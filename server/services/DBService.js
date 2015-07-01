/**
 * Created by MEITALBE on 7/1/2015.
 */

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://yansh03:27017/test';

module.exports = {
    insertSong : function (vSongName, vSongUrl, vAlbumName, vArtistName) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
                return;
            }

            var collectionSongs = db.collection('songs');
            var song = {
                SongName: vSongName,
                SongUrl: vSongUrl,
                AlbumName: vAlbumName,
                ArtistName: vArtistName,
                Like: "0",
                DisLike: "0"
            };
            collectionSongs.insert(song);

            var collectionQueue = db.collection('queue');
            var queue = {SongName: vSongName, SongUrl: vSongUrl, AlbumName: vAlbumName, vArtistName: vArtistName};
            collectionQueue.insert(queue);

            db.close();
        });
    },

    GetQueueSongs : function () {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
                return;
            }

            var collectionQueue = db.collection('queue');
            var queue = {};
            collectionQueue.insert(queue);

            db.close();
        });
    }
};