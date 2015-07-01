var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var Songs = mongoose.model('Songs', {SongName: String,
                                        SongUrl: String,
                                        AlbumName: String,
                                        ArtistName: String,
                                        Like: Number,
                                        DisLike: Number});

var Queue = mongoose.model('Queue', {SongName: String,
                                        SongUrl: String,
                                        AlbumName: String,
                                        ArtistName: String,
                                        Like: Number,
                                        DisLike: Number});

module.exports = {
    insertSong : function (vSongName, vSongUrl, vAlbumName, vArtistName) {
        //Lets add song
        var song = new Songs({SongName: vSongName,
            SongUrl: vSongUrl,
            AlbumName: vAlbumName,
            ArtistName: vArtistName,
            Like: 0,
            DisLike: 0});



        console.log(song);


        song.save(function (err, songObj) {
            if (err) {
                console.log(err);
            } else {
                console.log('song saved successfully:', songObj);
            }
        });

        //Lets add song to queue
        var songToQueue = new Queue({SongName: vSongName,
            SongUrl: vSongUrl,
            AlbumName: vAlbumName,
            ArtistName: vArtistName,
            Like: 0,
            DisLike: 0});



        console.log(songToQueue);

//Lets save it
        songToQueue.save(function (err, songToQueueObj) {
            if (err) {
                console.log(err);
            } else {
                console.log('song saved successfully:', songToQueueObj);
            }
        });
    },

    getQueueSongs : function () {
        var queueSongs = [];
        Queue.find({}, function (err, queueObj) {
            if (err) {
                console.log(err);
            } else if (queueObj) {
                console.log('Found:', queueObj);
                queueObj.forEach(function (queueItem) {
                    var song = {
                        SongName: queueItem.SongName,
                        SongUrl: queueItem.SongUrl,
                        AlbumName: queueItem.AlbumName,
                        ArtistName: queueItem.ArtistName,
                        Like: queueItem.Like,
                        DisLike: queueItem.DisLike
                    }
                    queueSongs.push(song);
                });

            }
            return queueSongs;

        });
    },

    updateSongLike : function (name) {
        Queue.findOne({SongName: name}, function (err, songObj) {
            if (err) {
                console.log(err);
            } else if (songObj) {
                console.log('Found:', songObj);

                songObj.Like = songObj.Like + 1;

                    //Lets save it
                songObj.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Updated', songObj);
                        }
                    });
            } else {
                console.log('Song not found!');
            }
        });
    },

    updateSongDisLike : function (name) {

    }
};