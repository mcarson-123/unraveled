var main = angular.module('main', []);

function mainController($scope, $http){

	$http.get('/api/projects')
		.success(function(data){
			$scope.projects = data;
		})
		.error(function(data){
			console.log("error: "+data);
		});

	//TODO: Do more than just show projects!
}