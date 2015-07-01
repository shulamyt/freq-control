angular.module('FreqControl')
    .controller('freqControlController', ['$scope', 'socket','$http','$rootScope',
        function($scope, socket, $http, $rootScope) {
            $scope.updateSongList = function(songList){
                $scope.songsList = songList;

            };
            socket.on('songAdded', $scope.updateSongList);
            $scope.currentSongIndex = 0;

           var getSongs = function () {

                $http.get('/queue')
                    .success(function(data) {
                        console.log("getSongsSuccess");
                        $scope.songsList = data;
                        $rootScope.$broadcast('songListInitialized');

                    }).error(function(data){
                        console.log("getSongsFailure");
                    });


            };

            $scope.songsList = [
                {
                    name:"La Isla Bonita",
                    url:"https://www.youtube.com/watch?v=7YzW1nMB9fk",
                    artist:"Madonna",
                    album:"",
                    like:5,
                    dislike:2,
                    imageSource : "http://img.youtube.com/vi/7YzW1nMB9fk/1.jpg",


                },
                {
                    name:"Love Me Like You Do",
                    url:"https://www.youtube.com/watch?v=AJtDXIazrMo&list=PLDcnymzs18LVXfO_x0Ei0R24qDbVtyy66&index=2",
                    artist:"Ellie Goulding",
                    album:"",
                    like:2,
                    imageSource : "http://img.youtube.com/vi/AJtDXIazrMo/1.jpg",

                },
                {
                    name:"Worth It ft. Kid Ink",
                    url:"https://www.youtube.com/watch?v=YBHQbu5rbdQ&index=6&list=PLDcnymzs18LVXfO_x0Ei0R24qDbVtyy66",
                    artist:"Fifth Harmony",
                    album:"",
                    like:1,
                    dislike:0,
                    imageSource : "http://img.youtube.com/vi/YBHQbu5rbdQ/1.jpg"
                }


            ];
        }

    ]);