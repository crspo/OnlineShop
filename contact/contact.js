'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html'
  });
}]);