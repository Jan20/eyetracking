var eyetrackingApp = angular.module("eyetrackingApp", ['ngRoute', 'ngSanitize', 'ngCsv']);

eyetrackingApp.config(function ($routeProvider) {
	
	$routeProvider.when('/start',{
		templateUrl: 'app/modules/core/views/start.html',
	});	

	$routeProvider.when('/1a',{
		templateUrl: 'app/modules/core/views/view1a.html',
	});	

	$routeProvider.when('/2a',{
		templateUrl: 'app/modules/core/views/view2a.html',
	});	

	$routeProvider.when('/3a',{
		templateUrl: 'app/modules/core/views/view3a.html',
	});

	$routeProvider.when('/4a',{
		templateUrl: 'app/modules/core/views/view4a.html',
		controller: 'timerController'
	});	

	$routeProvider.when('/5a',{
		templateUrl: 'app/modules/core/views/view5a.html',
	});	

	$routeProvider.when('/6a',{
		templateUrl: 'app/modules/core/views/view6a.html',
	});	

	$routeProvider.when('/7a',{
		templateUrl: 'app/modules/core/views/view7a.html',
	});	

	$routeProvider.when('/8a',{
		templateUrl: 'app/modules/core/views/view8a.html',
	});	

	// Hotel-Experiment
	$routeProvider.when('/1b',{
		templateUrl: 'app/modules/core/views/view1b.html',
	});	

	$routeProvider.when('/2b',{
		templateUrl: 'app/modules/core/views/view2b.html',
	});	

	$routeProvider.when('/3b',{
		templateUrl: 'app/modules/core/views/view3b.html',
	});

	$routeProvider.when('/4b',{
		templateUrl: 'app/modules/core/views/view4b.html',
		controller: 'timerController'
	});	

	$routeProvider.when('/5b',{
		templateUrl: 'app/modules/core/views/view5b.html',
	});	

	$routeProvider.when('/6b',{
		templateUrl: 'app/modules/core/views/view6b.html',
	});	

	$routeProvider.when('/7b',{
		templateUrl: 'app/modules/core/views/view7b.html',
	});	

	$routeProvider.when('/8b',{
		templateUrl: 'app/modules/core/views/view8b.html',
	});	

	$routeProvider.when('/admin',{
		templateUrl: 'app/modules/core/views/admin.html',
	});
  
  	$routeProvider.otherwise({ redirectTo: '/start' })

});
