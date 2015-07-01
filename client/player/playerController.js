angular.module('FreqControl')
    .controller('playerController', ['$scope', '$rootScope', '$location', '$http', '$sce','socket',
        function($scope, $rootScope, $location, $http, $sce, socket) {
            $scope.youtubeURL = 'https://www.youtube.com/watch?v=LO2uPU53qds';

            $scope.clickPlayVideo = function() {
                $scope.playVideo();
                socket.emit('play');
            };

            $scope.playVideo = function(){
                $scope.ytPlayer.playVideo();
                }

            socket.on('play', $scope.playVideo);

            $scope.clickStopVideo = function() {
                $scope.stopVideo();
                socket.emit('stop');
            };
            $scope.stopVideo = function(){
                $scope.ytPlayer.stopVideo();
                }

            socket.on('stop', $scope.stopVideo);

            $scope.clickMute = function() {
                $scope.mute();
                socket.emit('mute');
            };

            $scope.mute = function() {
                $scope.ytPlayer.mute();
            };

            socket.on('mute', $scope.mute);

            $scope.clickUnMute = function() {
                $scope.unMute();
                socket.emit('unMute');
            };

            $scope.unMute = function() {
                $scope.ytPlayer.unMute();
            };

            socket.on('unMute', $scope.unMute);

            $scope.clickVolumeUp = function() {
                $scope.volumeUp();
                socket.emit('volumeUp');
            };

            $scope.volumeUp = function() {
                var currentVolume = $scope.ytPlayer.getVolume();
                if(currentVolume<100){
                    $scope.ytPlayer.setVolume(currentVolume + 5);
                }
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
                }
            }

            socket.on('volumeDown', $scope.volumeDown);


            $scope.clickLoadUrl = function() {
                var url = $scope.loadUrl();
                socket.emit('loadUrl', url);
            };

            $scope.loadUrl = function(url) {

                  urlFromInput =   document.getElementById("inputUrl").value || url;
                  $scope.youtubeURL = urlFromInput;
                return urlFromInput;

            }
            socket.on('loadUrl', $scope.loadUrl);

    }]
);