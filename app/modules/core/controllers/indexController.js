eyetrackingApp.controller("indexController", ['$scope', function($scope) {

    $scope.selectExperiment = function(){
        $scope.selectedExperiment = Math.random();
        console.log($scope.selectedExperiment);
    }

}]);