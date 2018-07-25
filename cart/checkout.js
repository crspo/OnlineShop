'use strict';
 
angular.module('myApp.checkout', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'cart/checkout.html',
        
    });
}])
 
.controller('CheckoutCtrl', ['$scope', function($scope) {
    
}]);