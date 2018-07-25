'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.contact',
  'myApp.about',
  'myApp.product',
  'myApp.cart',
  'myApp.checkout'

])
.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);