/*jslint white: true */
/*jslint node: true */
/*global angular, $, particlesJS, pJS */

'use strict';

function expandInfo(el) {
    $(el).find('.extra-info').slideToggle({
        duration: 400,
        easing: "easeInOutQuart"
    });
}

function expandProjectInfo(el) {
    $(el).find('.extra-info').slideToggle({
        duration: 400,
        easing: "easeInOutQuint"
    });
    $(el).find('.sneaky').slideToggle(400   , function() {
        $(el).find('.sneaky').html("I forgot what this thing said, show me again.");
    });
    
}

/* Temporary 'hack' to fix colors, I know it's horrible */

var initColorFix = false;

// add paramter to set color to the passed color
function setColor() {
    if(!initColorFix) {
        $('header').removeClass('orange-header');
        $('.menu').removeClass('orange');
        $('#perm-top-scroll').removeClass('orange-header');
        $('header').removeClass('green-header');
        $('.menu').removeClass('green');
        $('#perm-top-scroll').removeClass('green-header');
        $('header').removeClass('pink-header');
        $('.menu').removeClass('pink');
        $('#perm-top-scroll').removeClass('pink-header');
        
        initColorFix = true;
    }
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
    var window_top = $(window).scrollTop(), div_top = $('#sticky-anchor').offset().top;
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

function showFooter() {
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 50){
        $('footer').css('padding-top', '15px');
        $('footer').css('padding-bottom', '35px');
        $('footer').css('opacity', '1');
    } else {
        $('footer').css('padding-top', '0px');
        $('footer').css('padding-bottom', '0px');
        $('footer').css('opacity', '0');
    }
}

$(function () {
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
});

function onScroll() {
    stickyRelocate();
    showFooter();
}

function onResize() {
    $('#sticky').css("width", "100%");
    $('#sticky-cv').css("width", "100%");
}

window.addEventListener('scroll', function () { onScroll(); }, true);

window.addEventListener('resize', function () { onResize(); }, true);

var em = "bratzie.biz";
var fm = "bizman";

/* =============================================================================================

    ANGULAR

============================================================================================= */

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
        showFooter();
        
        $scope.email = fm + "@" + em;
}])

.controller('IntroCtrl', ['$scope',
    function ($scope) {
        $scope.setOrange = true;
        setOrange();
        showFooter();
}])

.controller('CVCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/cv.json').success(function (data) {
            $scope.cv = data;
        });

        $scope.setGreen = true;
        setGreen();
        showFooter();
}])

.controller('PortfolioCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/projects.json').success(function (data) {
            $scope.projects = data;
        });

        $http.get('http://baconipsum.com/api/?type=all-meat&paras=1').success(function (data) {
            $scope.bacon = data;
        });

        $scope.setPink = true;
        setPink();
        showFooter();
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
        showFooter();
}]);

/*
  
$(function () {
    $(window).scroll(stickyRelocate);
    $(window).scroll(showFooter);
});

$(function () {
    $(window).resize(function () {
        $('#sticky').css("width", "100%");
        $('#sticky-cv').css("width", "100%");
    });
});

*/

/* 
    Particles.js by Vincent Garreau
    https://github.com/VincentGarreau/particles.js/
*/

function pJS_desktop() {
    particlesJS('particles-js', {
        particles: {
            color: '#fff',
            shape: 'circle', // "circle", "edge" or "triangle"
            opacity: 0.7,
            size: 4,
            size_random: true,
            nb: 150,
            line_linked: {
                enable_auto: true,
                distance: 100,
                color: '#fff',
                opacity: 0.7,
                width: 1,
                condensed_mode: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 600
                }
            },
            anim: {
                enable: true,
                speed: 2
            }
        },
        interactivity: {
            enable: true,
            mouse: {
                distance: 200
            },
            detect_on: 'canvas', // "canvas" or "window"
            mode: 'grab',
            line_linked: {
                opacity: 0.5
            },
            events: {
                onclick: {
                    enable: true,
                    mode: 'push', // "push" or "remove"
                    nb: 4
                }
            }
        },
        /* Retina Display Support */
        retina_detect: true
    });
}

function pJS_mobile() {
    particlesJS('particles-js', {
        particles: {
            color: '#fff',
            shape: 'circle', // "circle", "edge" or "triangle"
            opacity: 0.7,
            size: 4,
            size_random: true,
            nb: 50,
            line_linked: {
                enable_auto: true,
                distance: 100,
                color: '#fff',
                opacity: 0.7,
                width: 1,
                condensed_mode: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 600
                }
            },
            anim: {
                enable: true,
                speed: 2
            }
        },
        interactivity: {
            enable: false,
            mouse: {
                distance: 200
            },
            detect_on: 'canvas', // "canvas" or "window"
            mode: 'grab',
            line_linked: {
                opacity: 0.5
            },
            events: {
                onclick: {
                    enable: false,
                    mode: 'push', // "push" or "remove"
                    nb: 4
                }
            }
        },
        /* Retina Display Support */
        retina_detect: true
    });
}

function checkOnResize() {
    if (window.innerWidth > 1000) {
        if (pJS.particles.nb !== 150) { // 150 = desktop setting
            console.log('desktop mode');
            pJS.fn.vendors.destroy();
            pJS_desktop();
        }
    } else {
        if (pJS.particles.nb === 150) { // 150 = desktop setting
            console.log('mobile mode');
            pJS.fn.vendors.destroy();
            pJS_mobile();
        }
    }
}

if (window.innerWidth > 1000) { // pJS_desktop and pJS_mobile = my settings functions
    pJS_desktop();
} else {
    pJS_mobile();
}

/* on resize */
window.addEventListener('resize', function () { // use ".addEventListener", not ".onresize"
    checkOnResize();
}, true);