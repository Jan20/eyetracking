			
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

	$routeProvider.when('/3',{
		templateUrl: 'app/experiment/experiment.3/experiment.3.template.html',
		controller: 'Experiment3Controller'
	});	

	$routeProvider.when('/4',{
		templateUrl: 'app/experiment/experiment.4/experiment.4.template.html',
		controller: 'Experiment4Controller'
	});

	$routeProvider.when('/5',{
		templateUrl: 'app/experiment/experiment.5/experiment.5.template.html',
		controller: 'Experiment5Controller'
	});	

	$routeProvider.when('/6',{
		templateUrl: 'app/experiment/experiment.6/experiment.6.template.html',
		controller: 'Experiment6Controller'
	});	

	$routeProvider.when('/7',{
		templateUrl: 'app/experiment/experiment.7/experiment.7.template.html',
		controller: 'Experiment7Controller'
	});	

	$routeProvider.when('/8',{
		templateUrl: 'app/experiment/experiment.8/experiment.8.template.html',
		controller: 'Experiment8Controller'
	});
  
  	$routeProvider.otherwise({ redirectTo: '/1' });

});
