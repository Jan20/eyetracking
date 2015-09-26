angular
	.module('app.admin')
	.controller('AdminController', AdminController);

AdminController.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice'];

function AdminController($scope, $location, experimentDataservice, userDataservice){

	function getUsers(){
		return userDataservice.getUsers()
			.then(function(data){
				$scope.users = data;
				console.log($scope.users);
			});
	}
	getUsers();
}