myApp.controller('QuotesController', ['$scope', '$route', '$location', '$routeParams', function($scope, $route, $location, $routeParams) {
    // Main Element
    // GET AllQuotes
    $scope.getAllQuotes = function() {
        $scope.quotes = angular.fromJson(localStorage.quotes);
    };
    // SELECT Quote
    $scope.selectQuote = function(inputId) {
        for (var i = $scope.quotes.length - 1; i >= 0; i--) {
            if ($scope.quotes[i].id == $routeParams.quotes_id) {
                $scope.current = $scope.quotes[i];
            }
        }

        if($scope.current == undefined){
        	$scope.current = $scope.quotes[0];
        }

    };

    // CREATE
    $scope.createQuote = function() {
        $scope.getAllQuotes();
        largest = 0;
        for (var i = $scope.quotes.length - 1; i >= 0; i--) {
            if ($scope.quotes[i].id > largest) {
                largest = $scope.quotes[i].id;
            }
        };
        largest += 1;
       
        $scope.quotes.push({
            id: largest,
            text: $scope.quotesText,
            author: $scope.quotesAuthor
        });

        localStorage.quotes = angular.toJson($scope.quotes, true);

        $location.path('/quotes/'+largest); // path not hash
    };

    // DELETE
    $scope.deleteQuote = function() {
    	for (var i = $scope.quotes.length - 1; i >= 0; i--) {
    		if ($scope.quotes[i].id == $routeParams.quotes_id) {
    			$scope.quotes.splice(i,1);

    			localStorage.quotes = angular.toJson($scope.quotes);
				
				if($scope.quotes[0] == null){
					$location.path('/quotes/create');
				}

				if($scope.quotes[i] == null){
					$location.path('/quotes/'+$scope.quotes[i-1].id); // path not hash
				}else{
        			$location.path('/quotes/'+$scope.quotes[i+1].id);
				}
		
    		}
    	};


        

	}
        // UPDATE
        // BY START
        // $scope.getAllQuotes();
    console.log($routeParams.quotes_id);
    $scope.quotes = $scope.getAllQuotes();
    console.log($scope.getAllQuotes());
    $scope.selectQuote($routeParams.quotes_id);
}]);