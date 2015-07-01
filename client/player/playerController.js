angular.module('FreqControl')
    .controller('playerController', ['$scope', '$rootScope', '$location', '$http', '$sce',
        function($scope, $rootScope, $location, $http, $sce) {
            $scope.youtubeURL = 'https://www.youtube.com/watch?v=LO2uPU53qds';

            $scope.playVideo = function(){
                $scope.ytPlayer.playVideo();
                }

            $scope.stopVideo = function(){
                $scope.ytPlayer.stopVideo();
                }

            $scope.muteVolume = function() {
                $scope.ytPlayer.mute();
            }
            $scope.unMuteVolume = function() {
                $scope.ytPlayer.unMute();
            }

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
    }]
);