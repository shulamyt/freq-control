angular.module('FreqControl')
    .controller('playListController',
        function($scope, $modal) {
            $scope.newSong = {};
            $scope.title = "Add Song";
            var addSongModal = $modal({scope: $scope, template: 'playlist/addSongForm.html', show: false, backdrop:'static'});
            $scope.onAddClick = function () {
                $scope.newSong = {};
                addSongModal.$promise.then(addSongModal.show);
            }

            $scope.saveNewSong = function () {
                console.log("song is: " + angular.toJson($scope.newSong));
                addSongModal.hide();
            }

        });
