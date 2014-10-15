'use strict';

angular.module('bratfolio.portfolio', [])

.controller('PortfolioCtrl', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('data/projects.json').success( function(data) {
			$scope.projects = data;
		});
}])

.controller('ProjectCtrl', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		$http.get('data/projects/' + $routeParams.projectId + '.json').success(function(data) {
			console.log(data);
      		$scope.project = data;
      	});
		
		$scope.projectId = $routeParams.projectId;
}]);