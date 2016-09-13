/*global angular */

'use strict';

// Declare app level module which depends on views, and components
angular.module('splash', ['ngRoute'])

.value('duScrollOffset', 120)

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}])

.controller('MainCtrl', ['$scope',
  function ($scope) {
}]);
