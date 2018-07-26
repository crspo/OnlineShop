'use strict';

angular.module('myApp.product', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider.when('/product', {
    templateUrl: 'product/product.html'
  });
}])

.controller('productCtrl', function($scope){
	var phones=[
		{
			androidPhones:
			[
				{  
					name: 'Samsung Galaxy S9',
					os: 'Android',
					price: '1100',
					image: '/images/galaxyS9.jpg',
					specifications:[
						{
							processor:"Qualcomm SDM845 Snapdragon 845",
							screen:"5.8-inch AMOLED, 2960x1440 (570 ppi)",
							memory:"64GB"

						}
					]
				
				},

				{
					name: 'Samsung Galaxy S8',
					os: 'Android',
					price: '900',
					image: '/images/galaxyS8.jpeg',

					specifications:[
						{
							processor:"Qualcomm Snapdragon 835",
							screen:"5.8-inch AMOLED 2960x1440 (570 ppi)",
							memory:"64GB"

						}
					]
				},

				{
					name: 'Pixel3',
					os: 'Android',
					price: '1400',
					image: '/images/pixel3.jpg',

					specifications:[
						{
							processor:"SDM845 Snapdragon 845",
							screen:"5.4 inches AMOLED 1080x2160 (447 ppi)",
							memory:"64GB"

						}
					]
				}
			
		],

		
		
		iPhones:[
			
				{  
					name: 'iphone X',
					os: 'iOS 11.1.1',
					price: '1300',
					image: '/images/iphonex.jpg',
					specifications:[
						{
							processor:"Hexa-core 2.39 GHz,Apple A11 Bionic",
							screen:"5.8 inches, 1125 x 2436 pixels (458 ppi)",
							memory:"64/256GB, 3GB RAM"

						}
					]
				
				},

				{
					name: 'iphone 8',
					os: 'iOS 11',
					price: '800',
					image: '/images/iphone8.jpg',

					specifications:[
						{
							processor:"Apple A11 Bionic, Hexa-core 2x Monsoon",
							screen:"5.8-inch AMOLED 2960x1440 (570 ppi)",
							memory:"64/256 GB, 2GB RAM"

						}
					]
				},

				{
					name: 'iphone 7',
					os: 'Android',
					price: '600',
					image: '/images/iphone7.jpg',

					specifications:[
						{
							processor:"A10 Fusion, Quad-core 2.34 GHz",
							screen:"4.7 inches 750x1334 (326 ppi)",
							memory:"32/128/256GB, 2GB RAM"

						}
					]
				}
			
		]
	
}];
$scope.phones=phones;
});







			