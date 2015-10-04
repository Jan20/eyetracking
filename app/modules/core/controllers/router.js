var eyetrackingApp = angular.module("eyetrackingApp", ['ngRoute', 'ngSanitize']);

eyetrackingApp.config(function ($routeProvider) {
	
	$routeProvider
	.when('/start',{
		templateUrl: 'app/modules/core/views/start.html',
	})
	.when('/1a',{
		templateUrl: 'app/modules/core/views/view1a.html',
	})	

	.when('/2a',{
		templateUrl: 'app/modules/core/views/view2a.html',
	})	

	.when('/3a',{
		templateUrl: 'app/modules/core/views/view3a.html',
	})

	.when('/4a',{
		templateUrl: 'app/modules/core/views/view4a.html',
	})	

	.when('/5a',{
		templateUrl: 'app/modules/core/views/view5a.html',
	})	

	.when('/6a',{
		templateUrl: 'app/modules/core/views/view6a.html',
	})	

	.when('/7a',{
		templateUrl: 'app/modules/core/views/view7a.html',
	})	

	.when('/8a',{
		templateUrl: 'app/modules/core/views/view8a.html',
	})

	.when('/admin',{
		templateUrl: 'app/modules/core/views/admin.html',
	});
  
  	$routeProvider.otherwise({ redirectTo: '/start' });

});
