angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutController'
		})

		.when('/help', {
			templateUrl: 'views/help.html',
			controller: 'helpController'
		})

		.when('/programs', {
			templateUrl: 'views/programs.html',
			controller: 'programController'
		})

		.when('/adopt', {
			templateUrl: 'views/adopt.html',
			controller: 'adoptController'
		})

		.when('/events', {
			templateUrl: 'views/events.html',
		})

	$locationProvider.html5Mode(true);

}]);