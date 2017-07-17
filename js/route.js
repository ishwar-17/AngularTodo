myMainApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home',{
		url : '/home',
		templateUrl : 'view/home.html',
		controller : 'homeController'
	})
	.state('todolist',{
		url : '/todolist',
		templateUrl : 'view/todolist.html',
		controller : 'todoController'
	})
	.state('contact',{
		url : '/contact',
		templateUrl : 'view/contact.html',
		controller : 'contactController'
	})
	.state('contact-success',{
		url : '/contact-success',
		templateUrl : 'view/contactsuccess.html',
		controller : 'contactController'
	})
	.state('login',{
		url : '/login',
		templateUrl : 'view/login.html',
		controller : 'loginController'
	})

})