angular.module('FreqControl')
    .controller('playerController', ['$scope', '$rootScope', '$location', '$http', '$sce','socket',
        function($scope, $rootScope, $location, $http, $sce, socket) {
            $scope.youtubeURL = $scope.songsList[ $scope.currentSongIndex].url;
            $scope.isPlay = true;
            $scope.isMute = false;
            $scope.playClass = "glyphicon-pause";
            $scope.clickNextSong = function() {

                socket.emit('nextSong');
            };

            $scope.nextSong = function(){
                var index  = $scope.currentSongIndex;
                var listSize = $scope.songsList.length;
                if(index >= listSize-1)
                {
                    $scope.currentSongIndex = 0;
                }else
                {
                    $scope.currentSongIndex++;
                }
                $scope.loadUrl( $scope.songsList[ $scope.currentSongIndex].url);
            }

            socket.on('nextSong', $scope.nextSong);

            $scope.clickPrevSong = function() {

                socket.emit('prevSong');
            };

            $scope.prevSong = function(){
                var index  = $scope.currentSongIndex;
                var listSize = $scope.songsList.length;
                if(index != 0)
                {
                    $scope.currentSongIndex--;
                }else
                {
                    $scope.currentSongIndex=listSize-1;
                }
                $scope.loadUrl( $scope.songsList[ $scope.currentSongIndex].url);
            }

            socket.on('prevSong', $scope.prevSong);


            $scope.clickPlayVideo = function() {
                if ($scope.isPlay)
                {
                    $scope.stopVideo();
                    socket.emit('stop');
                    $scope.playClass = "glyphicon-play";
                }
                else
                {
                    $scope.playVideo();
                    socket.emit('play');
                    $scope.playClass = "glyphicon-pause";

                }


            };

            $scope.playVideo = function(){
                $scope.ytPlayer.playVideo();
                $scope.isPlay = true;
            }

            socket.on('play', $scope.playVideo);

            $scope.stopVideo = function(){
                $scope.ytPlayer.stopVideo();
                $scope.isPlay = false;
                }

            socket.on('stop', $scope.stopVideo);

            $scope.clickMute = function() {
                if($scope.isMute)
                {
                    $scope.unMute();
                    socket.emit('unMute');
                }else
                {
                    $scope.mute();
                    socket.emit('mute');
                }

            };

            $scope.mute = function() {
                $scope.isMute = true;
                $scope.ytPlayer.mute();
            };

            socket.on('mute', $scope.mute);



            $scope.unMute = function() {
                $scope.isMute = false;
                $scope.ytPlayer.unMute();
            };

            socket.on('unMute', $scope.unMute);

            $scope.clickVolumeUp = function() {
                $scope.volumeUp();
                socket.emit('volumeUp');
            };

            $scope.volumeUp = function() {
                if($scope.isMute)
                {
                    $scope.unMute();
                }
                var currentVolume = $scope.ytPlayer.getVolume();
                if(currentVolume<100){
                    $scope.ytPlayer.setVolume(currentVolume + 5);

                }
                //$scope.isMute = false;
            }

            socket.on('volumeUp', $scope.volumeUp);

            $scope.clickVolumeUp = function() {
                $scope.volumeUp();
                socket.emit('volumeUp');
            };

            $scope.clickVolumeDown = function() {
                $scope.volumeDown();
                socket.emit('volumeDown');
            };

            $scope.volumeDown = function() {
                var currentVolume = $scope.ytPlayer.getVolume();
                if(currentVolume>0){
                    $scope.ytPlayer.setVolume(currentVolume - 5);
                }else if (currentVolume <=0)
                {
                    $scope.isMute = true;
                }
            }

            socket.on('volumeDown', $scope.volumeDown);


            $scope.clickLoadUrl = function() {
                var url = $scope.loadUrl();
                socket.emit('loadUrl', url);
            };

            $scope.loadUrl = function(url) {

                  urlFromInput =   url;
                  $scope.youtubeURL = urlFromInput;
                return urlFromInput;

            }
            socket.on('loadUrl', $scope.loadUrl);

            $scope.$on('youtube.player.ended', function ($event, ytPlayer) {
                var index  = $scope.currentSongIndex;
                var listSize = $scope.songsList.length;
                if(index >= listSize-1)
                {
                    $scope.currentSongIndex = 0;
                }else
                {
                    $scope.currentSongIndex++;
                }
                $scope.loadUrl( $scope.songsList[ $scope.currentSongIndex].url);

            });

            $scope.$on('youtube.player.ready', function ($event, ytPlayer) {
                $scope.playVideo();
            });

            $scope.$on('songListInitialized', function ($event, ytPlayer) {
                $scope.loadUrl( $scope.songsList[ $scope.currentSongIndex].url);
            });


    }]
);