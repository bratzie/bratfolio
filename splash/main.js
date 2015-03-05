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
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 0.4,
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 300,
      color: '#fff',
      opacity: 0.3,
      width: 1,
      condensed_mode: {
        enable: false,
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
    detect_on: 'window', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: 0.4
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