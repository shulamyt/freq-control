angular.module('FreqControl')
    .controller('playListController',
        function($scope, $modal) {
            $scope.title = "Add Song";
            var addSongModal = $modal({scope: $scope, template: 'playlist/addSongForm.html', show: false});
            $scope.onAddClick = function () {
                addSongModal.$promise.then(addSongModal.show);
            }

        });
