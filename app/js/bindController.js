myApp.controller('BindController', ['$scope', '$route', '$location', '$routeParams', function($scope, $route, $location, $routeParams){
	
	$scope.path = $location.path();
	$scope.name = $route.current.controller;
	console.log($route.current);

	$scope.jan = 'asdf';

	// Main Element
	$scope.quotes = [
		{
			id: 1,
			text: 'The day is Perfekt',
			author: 'Jan'
		},
		{
			id:2,
			text: 'Do not repeat yourself',
			author: 'Jan'
		}

	];

	// GET AllQuotes
	$scope.getAllQuotes = function(){

		$scope.quotes = angular.fromJson(localStorage.getItem('quotes'));	
	
	};

	// SELECT Quote
	$scope.selectQuote = function(inputId){

		for (var i = $scope.quotes.length - 1; i >= 0; i--) {
			
			if ($scope.quotes[i].id == inputId) {
				$scope.current = $scope.quotes[i];
			} else {
				console.log('ok nicht so toll');
			}

		};

	}

	// CREATE

	$scope.newQuote = {
		id: 4,
		text: 'new',
		author: 'new'
	};

	$scope.createQuote = function(){

		localStorage.setItem('qutes' , angular.toJson($scope.newQuote));

	};

	// DELETE


	// UPDATE

	// BY START
	// $scope.getAllQuotes();
	$scope.createQuote();
	$scope.selectQuote(1);


}]);