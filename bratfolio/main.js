'use strict';

// Declare app level module which depends on views, and components
angular.module('bratfolio', [
  'ngRoute',
  'ngAnimate',
  'duScroll'
  ])

.value('duScrollOffset', 120)

.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'MainCtrl'
            })
            .when('/intro', {
                templateUrl: 'partials/intro.html',
                controller: 'IntroCtrl'
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

.controller('MainCtrl', ['$scope',
    function ($scope) {
}])

.controller('IntroCtrl', ['$scope',
    function ($scope) {
        $scope.setOrange = true;
        setOrange();
}])

.controller('CVCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/cv.json').success(function (data) {
            $scope.cv = data;
        });
        
        $scope.setGreen = true;
        setGreen();
}])

.controller('PortfolioCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/projects.json').success(function (data) {
            $scope.projects = data;
        });

        $http.get('http://baconipsum.com/api/?type=all-meat&paras=1').success(function (data) {
            $scope.bacon = data;
        });
        
        $scope.hover = false;
        
        $scope.setPink = true;
        setPink();
}])

.controller('ProjectCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('data/projects/' + $routeParams.projectId + '.json').success(function (data) {
            console.log(data);
            $scope.project = data;
        });

        $scope.projectId = $routeParams.projectId;
        
        $scope.setPink = true;
        setPink();
}]);

function expandInfo(el) {
    $(el).find('.extra-info').slideToggle("slow");
}

function expandProjectInfo(el) {
    $(el).find('.extra-info').slideToggle("slow");
    $(el).find('.sneaky').slideToggle("slow", function() {
        $(el).find('.sneaky').html("I forgot what this thing said, show me again.");
    });
    
}

/* Temporary 'hack' to fix colors, I know it's horrible */

// add paramter to set color to the passed color
function setColor() {
    $('header').removeClass('orange-header');
    $('.menu').removeClass('orange');
    $('#perm-top-scroll').removeClass('orange-header');
    $('header').removeClass('green-header');
    $('.menu').removeClass('green');
    $('#perm-top-scroll').removeClass('green-header');
    $('header').removeClass('pink-header');
    $('.menu').removeClass('pink');
    $('#perm-top-scroll').removeClass('pink-header');
}

function setOrange() {
    $('header').addClass('orange-header');
    $('.menu').addClass('orange');
    $('#perm-top-scroll').addClass('orange-header');
}

function setGreen() {
    $('header').addClass('green-header');
    $('.menu').addClass('green');
    $('#perm-top-scroll').addClass('green-header');
}

function setPink() {
    $('header').addClass('pink-header');
    $('.menu').addClass('pink');
    $('#perm-top-scroll').addClass('pink-header');
}
/* End of ugly temporary 'hack' */

// Making the menu stick
function stickyRelocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick').width($(window).width());
        $('#sticky-cv').addClass('stick').width($(window).width());
        $('#sticky-anchor').css("padding", "35px");
        $('#sticky-cv-anchor').css("padding", "26px");
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
}

$(document).ready(function () {
    $('.fancybox').fancybox({
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0, 0, 0, 0.60)'
                }
            }
        },
        padding: 5,
        closeBtn: false,
        closeClick: true,
        openEffect: "elastic",
        closeEffect: "elastic"
    });
    
    $(function () {
        $(window).scroll(stickyRelocate);
    });

    $(function () {
        $(window).resize(function () {
            $('#sticky').css("width", "100%");
            $('#sticky-cv').css("width", "100%");
        });
    });
});
