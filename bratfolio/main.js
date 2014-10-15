'use strict';

// Declare app level module which depends on views, and components
angular.module('bratfolio', [
  'ngRoute',
  'ngAnimate',
  'bratfolio.portfolio'
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
        controller: 'MainCtrl'
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

.controller('MainCtrl', [function() {

}]);

// Making the menu stick
function stickyRelocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick').width($(window).width());
        $('#sticky-anchor').css("padding", "52px");
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').css("padding", "0px");
    }
}

$(function () {
    $(window).scroll(stickyRelocate);
    stickyRelocate();
});

$(function () {
    $(window).resize(function() {
        $('#sticky').css("width", "100%");
    });
});