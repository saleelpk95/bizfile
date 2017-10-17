angular
	.module('bizfileApp')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/search', {
			templateUrl: '/bizfileSearch.html'
		})
		.otherwise({
			redirectTo: '/'
		});

		// $locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });
}]);