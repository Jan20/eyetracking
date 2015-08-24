angular
	.module('app.experiment')
	.controller('Experiment2Controller', Experiment2Controller);

Experiment2Controller.$inject = ['$scope', '$location'];

function Experiment2Controller($scope, $location){
	$scope.mainFunction1 = mainFunction2;

	function mainFunction2(){
        setRandomOrder();
        $location.path('/3');
    }

    function setRandomOrder() {
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            $scope.products[i].randomValue = Math.random();
        }
    }
}