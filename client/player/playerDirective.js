angular.module('FreqControl')
    .directive('player', function() {
        return {
            restrict: 'E',
            templateUrl: 'player/player.html',
            controller : "playerController",
            link: function (scope, element) {

            }
        };
    });