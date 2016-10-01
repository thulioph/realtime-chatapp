'use strict';

/**
 * @ngdoc overview
 * @name chatAppApp
 * @description
 * # chatAppApp
 *
 * Main module of the application.
 */
angular
  .module('chatAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/chat/online', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
