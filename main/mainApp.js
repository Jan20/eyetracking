var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function ($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'views/login.html',
		// controller: 'loginController'
	});	

	$routeProvider.when('/step/1',{
		templateUrl: 'views/showFirstTime.html',
		controller: 'mainController'
	});	

	$routeProvider.when('/step/2',{
		templateUrl: 'views/chooseFirstTime.html',
		controller: 'mainController'
	});	

	$routeProvider.when('/step/3',{
		templateUrl: 'views/showSecondTime.html',
		controller: 'mainController'
	});

	$routeProvider.when('/step/4',{
		templateUrl: 'views/chooseSecondTime.html',
		controller: 'mainController'
	});
});
