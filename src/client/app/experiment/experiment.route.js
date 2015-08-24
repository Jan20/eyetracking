			
angular.module('app.experiment')
	.config(function ($routeProvider) {
	
	$routeProvider.when('/1',{
		templateUrl: 'app/experiment/experiment.1/experiment.1.template.html',
		controller: 'Experiment1Controller'
	});	

	$routeProvider.when('/2',{
		templateUrl: 'app/experiment/experiment.2/experiment.2.template.html',
		controller: 'Experiment2Controller'
	});	

	// $routeProvider.when('/2a',{
	// 	templateUrl: 'app/modules/core/views/view2a.html',
	// 	controller: 'Exp2Controller'
	// });	

	// $routeProvider.when('/3a',{
	// 	templateUrl: 'app/modules/core/views/view3a.html',
	// 	controller: 'Exp3Controller'
	// });

	// $routeProvider.when('/4a',{
	// 	templateUrl: 'app/modules/core/views/view4a.html',
	// 	controller: 'Exp4Controller'
	// });	

	// $routeProvider.when('/5a',{
	// 	templateUrl: 'app/modules/core/views/view5a.html',
	// 	controller: 'Exp5Controller'
	// });	

	// $routeProvider.when('/6a',{
	// 	templateUrl: 'app/modules/core/views/view6a.html',
	// 	controller: 'Exp6Controller'
	// });	

	// $routeProvider.when('/7a',{
	// 	templateUrl: 'app/modules/core/views/view7a.html',
	// 	controller: 'Exp7Controller'
	// });	
  
  	$routeProvider.otherwise({ redirectTo: '/1' });

});
