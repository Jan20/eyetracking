angular
    .module('app.experiment')
	.controller('Experiment1Controller', Experiment1Controller);

Experiment1Controller.$inject = ['$scope', '$location', 'dataservice'];

function Experiment1Controller($scope, $location, dataservice){

    $scope.mainFunction0 = mainFunction0;

    function mainFunction0(userNumber){
        saveUserNumber(userNumber);
        $location.path('/2');
    }

    function saveUserNumber(userNumber) {
        $scope.userNumber = userNumber;
    }

    var vm = this;
    vm.experiments = [];
        activate();

    function activate(){
        return getExperiments().then(function(){
            console.info('Activated Experiments View');
        });
    }
    
    $scope.postExperiment = postExperiment;
    $scope.putExperiment = putExperiment;
    $scope.name = 'experiment1';
    $scope.description = '';
    $scope.buttonActive = '';
    $scope.buttonInactive = '';

    var data = {
        name: $scope.name,
        description: $scope.description,
        buttonActive: $scope.buttonActive,
        buttonInactive: $scope.buttonInactive,
    };

    function getExperiments(){
        return dataservice.getExperiments()
            .then(function(data){
                vm.experiments = data[0];
                $scope.description = vm.experiments.description;
                $scope.buttonActive = vm.experiments.buttonActive;
                $scope.buttonInactive = vm.experiments.buttonInactive;
                return vm.experiments;
            });
    }

    function postExperiment(){
        return dataservice.postExperiment(data)
            .then(function(data){
                console.log('Post successfull');
                return ;
            });
    }

    function putExperiment(){
        return dataservice.putExperiment(data)
            .then(function(data){
                console.log('Put successfull');
                return ;
        });       
    }

}