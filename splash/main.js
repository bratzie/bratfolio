/*jslint white: true */
/*jslint node: true */
/*global angular, $, particlesJS, pJS */

'use strict';

// Declare app level module which depends on views, and components
angular.module('splash', [
  'ngRoute'
  ])

.value('duScrollOffset', 120)

.config(['$routeProvider',
    function ($routeProvider) {
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