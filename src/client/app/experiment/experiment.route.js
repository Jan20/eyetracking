angular
	.module('app.experiment')
	.config(experimentRoute);  	

function experimentRoute($routeProvider){
	$routeProvider
    	  .when('/0', {
    	    templateUrl: 'app/experiment/experiment.0/experiment.0.view.html',
    	    controller: 'Experiment0Controller'
    	}).when('/1', {
    	    templateUrl: 'app/experiment/experiment.1/experiment.1.view.html',
    	    controller: 'Experiment1Controller'
    	}).when('/2', {
    	    templateUrl: 'app/experiment/experiment.2/experiment.2.view.html',
    	    controller: 'Experiment2Controller'
    	}).when('/3', {
    	    templateUrl: 'app/experiment/experiment.3/experiment.3.view.html',
    	    controller: 'Experiment3Controller'
    	}).when('/4', {
    	    templateUrl: 'app/experiment/experiment.4/experiment.4.view.html',
    	    controller: 'Experiment4Controller'
    	}).when('/5', {
    	    templateUrl: 'app/experiment/experiment.5/experiment.5.view.html',
    	    controller: 'Experiment5Controller'
    	}).when('/6', {
    	    templateUrl: 'app/experiment/experiment.6/experiment.6.view.html',
    	    controller: 'Experiment6Controller'
    	}).when('/7', {
    	    templateUrl: 'app/experiment/experiment.7/experiment.7.view.html',
    	    controller: 'Experiment7Controller'
    	});
}