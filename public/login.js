var login = angular.module('login', []);

function loginController($scope, $http) {
	$scope.formData = {};

	$scope.login = function() {
		
		var jsonLoginRequest = JSON.stringify($scope.formData);
		
		$http.post('/login', jsonLoginRequest)
			.success(function(data){
				$scope.formData = {};
				// show main page
				window.location = data.redirect;
			})
			.error(function(data) {
				//TODO: show login error message
				console.log("login error: "+data);
			});
	}
}