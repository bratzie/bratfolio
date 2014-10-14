'use strict';

angular.module('bratfolio.portfolio', [])

.controller('PortfolioCtrl', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		$http.get('data/projects.json').success( function(data) {
			$scope.projects = data;
		});
		
		$scope.projectId = $routeParams.projectId;
}]);