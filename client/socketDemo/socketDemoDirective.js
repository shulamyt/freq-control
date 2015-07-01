angular.module('FreqControl')
    .directive('socketDemo', function() {
        return {
            restrict: 'E',
            templateUrl: 'socketDemo/socketDemo.html',
            controller : "socketDemoController",
            link: function (scope, element) {

            }
        };
    });