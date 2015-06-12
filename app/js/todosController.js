myApp.controller('TodosController', ['$scope', function($scope){
	
	$scope.todos = [
		{id: 0, text: 'Lean AngularJs', done:false},
		{id: 1, text: 'Build an app', done: false}
	];

	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	};

	$scope.addTodo = function(){
		var largest = 0;
		for(var i = 0; i<$scope.todos.length; i++){
			if(largest < $scope.todos[i].id){
				largest = $scope.todos[i].id;
			}
		};
		var id = largest + 1;

		$scope.todos.push(
			{id: id, text: $scope.formTodoText, done:false}
		);	
		$scope.formTodoText = '';
		$scope.setLocalTodos();
	};

	$scope.clearCompleted = function(){
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});
	};

	$scope.setLocalTodos = function(){
		localStorage.todos = angular.toJson($scope.todos);
	};

	$scope.getLocalTodos = function(){
		$scope.todos = angular.fromJson(localStorage.todos);
	};

	$scope.deleteTodo = function(inputId){
		for(var i = 0; i < $scope.todos.length; i++){
			if($scope.todos[i].id == inputId){
				$scope.todos.splice(i,1);
			}
		}
	};

	$scope.completeTodo = function(inputTodo){

		if(inputTodo.done == false){
			inputTodo.done = true;
		}else{
			inputTodo.done = false;
		}

	};
	

	$scope.name = 'Jan';
	$scope.getLocalTodos();

}]);