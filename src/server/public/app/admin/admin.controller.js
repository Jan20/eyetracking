angular
	.module('app.admin')
	.controller('AdminController', AdminController);

AdminController.$inject = ['$scope', '$timeout', '$location', 'experimentDataservice', 'userDataservice'];	

function AdminController($scope, $timeout, $location, experimentDataservice, userDataservice){

	$scope.exportData = exportData;

	function getUsers(){
		return userDataservice.getUsers()
			.then(function(data){
				$scope.users = data;
				console.log($scope.users);
			});
	}
	getUsers();




    /** 
    *
    *   Simples Array, das die Spaltenüberschriften der ges 
    *
    */
    $scope.csvHeader = ['ExperimentNr', 'visitedIn2', 'choosedIn3', 'visitedIn5', 'choosedIn6'];
    
    function Exportobject(userId, visitedIn2, choosedIn3, visitedIn5, choosedIn6){
    	this.userId = userId;
    	this.visitedIn2 = visitedIn2;
    	this.choosedIn3 = choosedIn3;
    	this.visitedIn5 = visitedIn5;
    	this.choosedIn6 = choosedIn6;
    }

    function exportData() {
    	var eyetrackingData = [];
    	for(var i = 0; i < $scope.users.length; i++){
    		var exportobject = new Exportobject($scope.users[i].userId, $scope.users[i].visitedIn2, $scope.users[i].choosedIn3, $scope.users[i].visitedIn5, $scope.users[i].choosedIn6);
    		eyetrackingData.push(exportobject);
    	}

		console.log('eytrackingData: ' + $scope.csvHeader);
        console.log('eytrackingData:');
        console.log(eyetrackingData);
        // eyetrackingData = JSON.parse(eyetrackingData);
        console.log(eyetrackingData);
        // eyetrackingData = JSON.stringify(eyetrackingData);
        console.log(eyetrackingData);
        alasql("SELECT * INTO CSV('eyetracking.csv',{headers:true, separator:';'}) FROM ?", [eyetrackingData]); 
        
    }


}




