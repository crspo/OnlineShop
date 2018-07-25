'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider.when('/about', {
    templateUrl: 'about/about.html'
  });
}]);