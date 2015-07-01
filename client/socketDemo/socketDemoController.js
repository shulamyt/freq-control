angular.module('FreqControl')
    .controller('socketDemoController', ['$scope', 'socket',
        function($scope, socket) {
            $scope.startDemo = function (){
                console.log("DemoStarted");
                socket.emit('newMessage', "oreli");
            };

            socket.on('new message', function (data) {
              alert(data.username + data.message)
            });
        }
    ]);