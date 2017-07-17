myMainApp.controller('todoController',['$rootScope','$scope','$location',function($rootScope,$scope,$location){
	console.log('todoController');

	$scope.removeTodo = function(todo){
		var removeTodo = $scope.todolist.indexOf(todo);
		$scope.todolist.splice(removeTodo, 1);
	}

	$scope.mytododata = {
		name: 'Kiran',
		rate: 30,
		belt: 'green',
		avaiable: true
	};

	$scope.addTodo = function(name, rate, belt, avaiable){
		$scope.todolist.push($scope.mytododata);
		console.log($scope.mytododata);
		$scope.mytododata = {};

	};

    $scope.removeAllTodo = function(){
    	$scope.todolist = [];
    }; 

	$scope.todolist = [
		{
			name : 'Ishwar',
			belt : 'green',
			rate : 30,
			avaiable : true
		},
		{
			name : 'Manoj',
			belt : 'red',
			rate : 40,
			avaiable : true
		},
		{
			name : 'Gaurav',
			belt : 'yellow',
			rate : 35,
			avaiable : true
		},
		{
			name : 'Pavan',
			belt : 'blue',
			rate : 50,
			avaiable : true
		}
	];
}])