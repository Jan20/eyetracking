myApp.config(function($routeProvider){
	
	$routeProvider.when('/', {
		templateUrl: 'views/todos.html',
		controller: 'QuotesController'
	});
	
	$routeProvider.when('/todos', {
		templateUrl: 'views/todos.html',
		controller: 'TodosController'
	});

	$routeProvider.when('/quotes',{
		templateUrl: 'views/quotes/viewQuotes/viewQuotes.html',
		controller: 'QuotesController'
	});
	
	$routeProvider.when('/quotes/create',{
		templateUrl: 'views/quotes/createQuotes/createQuotes.html',
		controller: 'QuotesController'
	});

	$routeProvider.when('/quotes/:quotes_id',{
		templateUrl: 'views/quotes/viewQuotes/viewQuotes.html',
		controller: 'QuotesController'
	});
	
	

	$routeProvider.when('/quotes/edit', {
		templateUrl: 'views/quotes/editQuotes/editQuotes.html',
		controller: 'QuotesController'
	});
});

// myApp.config(function($stateProvider, $urlRouterProvider){

// 	$urlRouterProvider.otherwise('/viewQuotes');

// 	$stateProvider.state('viewQuotes', {
// 		url: '/viewQuotes',
// 		views: {0
// 			'viewQuotes/listQutes',
// 		}
// 	})

// });