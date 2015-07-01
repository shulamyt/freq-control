angular.module('FreqControl')
    .controller('freqControlController', ['$scope', 'socket',
        function($scope, socket) {
            $scope.songList = [];
        }

    ]);