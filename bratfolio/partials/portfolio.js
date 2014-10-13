'use strict';

angular.module('bratfolio.portfolio', [])

.controller('PortfolioCtrl', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		$scope.projectId = $routeParams.projectId;
}]);