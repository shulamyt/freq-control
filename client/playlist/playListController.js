angular.module('FreqControl')
    .controller('playListController',
        function($scope, $modal, $http, socket) {
            $scope.sliderValue = 2;
            $scope.newSong = {};
            $scope.title = "Add Song";
            var addSongModal = $modal({scope: $scope, template: 'playlist/addSongForm.html', show: false, backdrop:'static'});
            $scope.onAddClick = function () {
                $scope.newSong = {};
                addSongModal.$promise.then(addSongModal.show);
            }

            $scope.saveNewSong = function () {
                $scope.newSong.id = $scope.newSong.url.split('=')[1];
                $scope.newSong.imageSource = "http://img.youtube.com/vi/" + $scope.newSong.id + "/1.jpg";
                console.log("song is: " + angular.toJson($scope.newSong));

                //$http.post('/song', $scope.newSong)
                //    .success(function(data) {
                //        console.log("addSongSuccess");
                //    }).error(function(data){
                //        console.log("addSongFailure");
                //    });

               // $scope.addSong( $scope.newSong);
                socket.emit('addNewSong', $scope.newSong);
                addSongModal.hide();
            }

            $scope.addSong = function (song) {
                $scope.songsList.push( song);
            }

            socket.on('addNewSong', $scope.addSong );

            $scope.getSelectedClass = function(index)
            {
                if (index === $scope.currentSongIndex)
                    return "list-group-item-info"
                return "";

            }

            $scope.doLike = function (song) {
                console.log("song to like: " + angular.toJson(song));
                $http.post('/song/like', {name:song.name})
                    .success(function(data) {
                        console.log("addLikeSuccess");
                    }).error(function(data){
                        console.log("addLikeFailure");
                    });


            }

            $scope.doDislike = function (song) {
                console.log("song to dislike: " + angular.toJson(song));
                $http.post('/song/dislike', {name:song.name})
                    .success(function(data) {
                        console.log("addDislikeSuccess");
                    }).error(function(data){
                        console.log("addDislikeFailure");
                    });

                addSongModal.hide();
            }

        });
