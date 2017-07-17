myMainApp.controller('contactController',['$rootScope','$scope','$location',function($rootScope,$scope,$location){
	console.log('contactController');

	$scope.sendMessage = function(){
		$location.path('contact-success');
	};
}])