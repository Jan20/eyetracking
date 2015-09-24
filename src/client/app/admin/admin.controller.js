angular
	.module('app.admin')
	.controller('AdminController', AdminController);

AdminController.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice'];

function AdminController($scope, $location, experimentDataservice, userDataservice){

}