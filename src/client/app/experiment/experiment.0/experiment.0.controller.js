angular
    .module('app.experiment')
	.controller('Experiment0Controller', Experiment0Controller);

Experiment0Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice'];

function Experiment0Controller($scope, $location, experimentDataservice, userDataservice){
    
    $scope.userNumber = null;       
    
    /**
    *
    *   Im Folgenden werden alle Methoden gelistet, die im Scope zur 
    *   Verfügung stehen werden.
    *
    */
    $scope.createUser = createUser;

    function inputUser(userId, visitedIn2, choosedIn3, visitedIn5, choosedIn6){
        this.userId = userId;
        this.visitedIn2 = visitedIn2;
        this.choosedIn3 = choosedIn3;
        this.visitedIn5 = visitedIn5;
        this.choosedIn6 = choosedIn6;
    }   

    /**
    *
    *   Definition der saveUserNumber Methode: 
    *   @param userNumber Die Variable bezieht sich auf den Wert, der 
    *   in das Textfeld unterhalb der Beschreibung auf der Übersichtsseite 
    *   eingetragen wird.
    *
    */
    function createUser() {
        $location.path('/1');
        var user = new inputUser($scope.userNumber, null, null, null, null);
        return userDataservice.postUser(user)
            .then(function(user){
                console.log('Neuer User erfogreich hinzugefügt: ' + user.userId);
            });
    }

    function postExperiment(){
        return userDataservice.postUser(data)
            .then(function(data){
                console.log('Post successfull');
            });
    }

















    var vm = this;
    vm.experiment = {};
    $scope.name = 'experiment0';
    $scope.description = vm.experiment.description;
    $scope.buttonActive = vm.experiment.buttonActive;
    $scope.buttonInactive = vm.experiment.buttonInactive; 


    
    
    $scope.postExperiment = postExperiment;
    $scope.putExperiment = putExperiment;
    

    getExperiment();

    function getExperiment(){
        return experimentDataservice.getExperiment()
            .then(function(data){
                $scope.name = data.name;
                $scope.description = data.description;
                $scope.buttonActive = data.buttonActive;
                $scope.buttonInactive = data.buttonInactive;
            });
    }

    function postExperiment(){
        return experimentDataservice.postExperiment(data)
            .then(function(data){
                console.log('Post successfull');
            });
    }

    function inputData(name, description, buttonActive, buttonInactive){
        this.name = name;
        this.description = description;
        this.buttonActive = buttonActive;
        this.buttonInactive = buttonInactive;
    }

    var myInput = new inputData($scope.name, $scope.description, $scope.buttonActive, $scope.buttonInactive);

    console.log('myInput: ' + myInput);
    console.log(myInput);

    function putExperiment(){
            var myInput = new inputData($scope.name, $scope.description, $scope.buttonActive, $scope.buttonInactive);

        console.log('Inputdata: ' + myInput.name);
        console.log('Inputdata: ' + myInput.description);
        console.log('Inputdata: ' + myInput.buttonActive);
        console.log('Inputdata: ' + myInput.buttonInactive);
        return experimentDataservice.putExperiment(myInput)
            .then(function(data){
                console.log('Put successfull');
        });       
    }

}