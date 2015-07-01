angular.module('FreqControl')
    .controller('freqControlController', ['$scope', 'socket',
        function($scope, socket) {
            $scope.songsList = [
                {
                    name:"La Isla Bonita",
                    url:"https://www.youtube.com/watch?v=7YzW1nMB9fk",
                    artist:"Madonna",
                    album:"",
                    like:5,
                    dislike:2

                },
                {
                    name:"Love Me Like You Do",
                    url:"https://www.youtube.com/watch?v=AJtDXIazrMo&list=PLDcnymzs18LVXfO_x0Ei0R24qDbVtyy66&index=2",
                    artist:"Ellie Goulding",
                    album:"",
                    like:2,

                },
                {
                    name:"Worth It ft. Kid Ink",
                    url:"https://www.youtube.com/watch?v=YBHQbu5rbdQ&index=6&list=PLDcnymzs18LVXfO_x0Ei0R24qDbVtyy66",
                    artist:"Fifth Harmony",
                    album:"",
                    like:1,
                    dislike:0
                }


            ];
        }

    ]);