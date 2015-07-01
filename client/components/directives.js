var ksFrontendApp = angular.module('freqControl');
ksFrontendApp.directive('player', function() {
    return {
        restrict: 'E',
        templateUrl: "components/player.html"
    }
});
