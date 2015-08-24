angular
    .module('app.experiment')
	.controller('Experiment1Controller', Experiment1Controller);

Experiment1Controller.$inject = ['$scope', '$location'];

function Experiment1Controller($scope, $location){
    
    $scope.mainFunction0 = mainFunction0;

    function mainFunction0(userNumber){
        saveUserNumber(userNumber);
        $location.path('/2');
    }

    function saveUserNumber(userNumber) {
        $scope.userNumber = userNumber;
    }

}