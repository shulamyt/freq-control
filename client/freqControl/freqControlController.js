angular.module('FreqControl')
    .controller('freqControlController', ['$scope', 'socket',
        function($scope, socket) {
            $scope.songsList = [
                {
                    name:"Bitch I am",
                    url:"https://www.youtube.com/watch?v=7hPMmzKs62w&list=PLFgquLnL59alc4Sc12loHmF8atyX7VQrK&index=2",
                    artist:"Madonna",
                    album:""
                },
                {
                    name:"Love Me Like You Do",
                    url:"https://www.youtube.com/watch?v=AJtDXIazrMo&list=PLDcnymzs18LVXfO_x0Ei0R24qDbVtyy66&index=2",
                    artist:"Ellie Goulding",
                    album:""
                },
                {
                    name:"Worth It ft. Kid Ink",
                    url:"https://www.youtube.com/watch?v=YBHQbu5rbdQ&index=6&list=PLDcnymzs18LVXfO_x0Ei0R24qDbVtyy66",
                    artist:"Fifth Harmony",
                    album:""
                }


            ];
        }

    ]);