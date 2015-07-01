angular.module('FreqControl')
    .controller('playerController', ['$scope', '$rootScope', '$location', '$http', '$sce',
        function($scope, $rootScope, $location, $http, $sce) {
            $scope.youtubeURL = 'https://www.youtube.com/watch?v=yd8jh9QYfEs';
    }]
);