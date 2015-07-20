eyetrackingApp.controller('timerController', ['$scope', function($scope) {
    
    $scope.currentMinute = 1;
    $scope.currentSecond = 30;
    
    $scope.startTimer = function() {
    
        $scope.timerDuration = 2;
        $scope.currentMinute = 1;
        $scope.currentSecond = 30;
    
        var current = moment.duration($scope.timerDuration * 1000, 'milliseconds');
    
        setInterval(function() {
            setCurrentTime();
        }, 1000);
    
        var setCurrentTime = function() {
            $scope.$apply(function() {
    
                if (current == 0) {
                    return null;
                }
    
                current = moment.duration(current - 1000, 'milliseconds');
                $scope.currentMinute = current.get('minutes');
                $scope.currentSecond = current.get('seconds');
    
            })
        }
    };
    $scope.startTimer();
}]);