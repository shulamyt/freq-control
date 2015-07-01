angular.module('FreqControl')
    .controller('playListController',
        function($scope, $modal, $http) {
            $scope.newSong = {};
            $scope.title = "Add Song";
            var addSongModal = $modal({scope: $scope, template: 'playlist/addSongForm.html', show: false, backdrop:'static'});
            $scope.onAddClick = function () {
                $scope.newSong = {};
                addSongModal.$promise.then(addSongModal.show);
            }

            $scope.saveNewSong = function () {
                console.log("song is: " + angular.toJson($scope.newSong));
                $http.post('/song', $scope.newSong)
                    .success(function(data) {
                        console.log("addSongSuccess");
                    }).error(function(data){
                        console.log("addSongFailure");
                    });

                addSongModal.hide();
            }

        });
