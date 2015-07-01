angular.module('FreqControl')
    .controller('playerController', ['$scope', '$rootScope', '$location', '$http', '$sce','socket',
        function($scope, $rootScope, $location, $http, $sce, socket) {
            $scope.youtubeURL = 'https://www.youtube.com/watch?v=LO2uPU53qds';

            $scope.playVideo = function(){
                $scope.ytPlayer.playVideo();
                }

            $scope.stopVideo = function(){
                $scope.ytPlayer.stopVideo();
                }

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

            $scope.volumeUp = function() {
                currentVolume = $scope.ytPlayer.getVolume();
                if(currentVolume<100){
                    $scope.ytPlayer.setVolume(currentVolume + 5);
                }
            }
            $scope.volumeDown = function() {
                currentVolume = $scope.ytPlayer.getVolume();
                if(currentVolume>0){
                    $scope.ytPlayer.setVolume(currentVolume - 5);
                }
            }

            $scope.loadUrl = function() {

                  urlFromInput =   document.getElementById("inputUrl").value;
                  $scope.youtubeURL = urlFromInput;

            }
    }]
);