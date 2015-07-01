var freqControlModule = angular.module('FreqControl')
freqControlModule.directive('playList', function() {

        return {
            restrict: 'E',
            controller:'playListController',
            templateUrl: 'playList/playList.html',

         }
    });

freqControlModule.directive('playListItem', function() {
    return {
        restrict: 'E',
        templateUrl: 'playList/playListItem.html'


        }
});

