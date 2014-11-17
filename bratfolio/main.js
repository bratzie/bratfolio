'use strict';

// Declare app level module which depends on views, and components
angular.module('bratfolio', [
  'ngRoute',
  'ngAnimate',
  'duScroll'
  ])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
    })
    .when('/intro', {
        templateUrl: 'partials/intro.html',
        controller: 'MainCtrl'
    })
    .when('/cv', {
        templateUrl: 'partials/cv.html',
        controller: 'CVCtrl'
    })
    .when('/portfolio', {
        templateUrl: 'partials/portfolio.html',
        controller: 'PortfolioCtrl'
    })
    .when('/projects/:projectId', {
        templateUrl: 'partials/project.html',
        controller: 'ProjectCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}])

.controller('MainCtrl', ['$scope', function($scope) {

}])

.controller('CVCtrl', ['$scope', function($scope) {

}])

.controller('PortfolioCtrl', ['$scope', '$http', 
    function($scope, $http) {
        $http.get('data/projects.json').success( function(data) {
            $scope.projects = data;
        });

        $http.get('http://baconipsum.com/api/?type=all-meat&paras=1').success( function(data) {
            $scope.bacon = data;
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

function expandInfo(el) {
    $(el).find('.extra-info').slideToggle("slow");
};

// Making the menu stick
function stickyRelocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick').width($(window).width());
        $('#sticky-cv').addClass('stick').width($(window).width());
        $('#sticky-anchor').css("padding", "35px");
        $('#sticky-cv-anchor').css("padding", "28px");
        $('#top-scroll').css("opacity", "1");
        $('#perm-top-scroll').css({
            "bottom": "-20px",
            "opacity": "1"
        });
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-cv').removeClass('stick');
        $('#sticky-anchor').css("padding", "0px");
        $('#sticky-cv-anchor').css("padding", "0px");
        $('#top-scroll').css("opacity", "0");
        $('#perm-top-scroll').css({
            "bottom": "-60px",
            "opacity": "0"
        });
    }
};

$(function () {
    $(window).scroll(stickyRelocate);
    stickyRelocate();
});

$(function () {
    $(window).resize(function() {
        $('#sticky').css("width", "100%");
        $('#sticky-cv').css("width", "100%");
    });
});