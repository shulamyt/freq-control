angular.module('FreqControl')
    .controller('socketDemoController', ['$scope', '$http', 'socket',
        function($scope, $http, socket) {
            $scope.socketDemo = function (){
                console.log("DemoStarted");
                socket.emit('newMessage', "oreli");
            };

            $scope.addSong = function (){
                console.log("addSong");
                var song = {name : "song1", url : "bla.bla"};
                $http.post('/song', song)
                    .success(function(data) {
                        console.log("addSongSuccess");
                    }).error(function(data){
                        console.log("addSongFailure");
                    });
            };


            socket.on('new message', function (data) {
                alert(data.username + data.message)
            });
        }
    ]);