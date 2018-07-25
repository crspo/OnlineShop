'use strict';

angular.module('myApp.cart', ['ngRoute', 'myApp.checkout'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider.when('/cart', {
    templateUrl: 'cart/cart.html'
  });
}]);

// .controller('myCtrl', function($scope){
// 	$scope
// });

