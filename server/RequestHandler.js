/**
 * Created by MEITALBE on 7/1/2015.
 */

var http = require('http');
var url   = require('url');
var song = require('./Song');
var playlist = require('./Playlist');

http.createServer(function handler(req, res) {

    var path = url.parse(req.url).pathname;
    var value;

    req.on('data', function (data) {
        value = JSON.parse(data);
    });

    if(path === "/AddSong") {
        song.addSong(value);
    } else if (path === "/GetSongs") {
        song.getSongs(value);
    } else if (path === "/GetSong") {
        song.getSong(value);
    } else if (path === "/RemoveSong") {
        song.removeSong(value);
    } else if (path === "/RemoveAllSongs") {
        song.removeAllSongs(value);
    } else if (path === "/DislikeSong") {
        song.dislikeSong(value);
    } else if (path === "/LikeSong") {
        song.likeSong(value);
    } else if (path === "/AddPlaylist") {
        playlist.addPlaylist(value);
    } else if (path === "/RemovePlaylist") {
        playlist.removePlaylist(value);
    } else if (path === "/GetPlaylist") {
        playlist.getPlaylist(value);
    }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

