angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})

		.when('/help', {
			templateUrl: 'views/help.html',
			controller: 'HelpController'
		})

		.when('/programs', {
			templateUrl: 'views/programs.html',
			controller: 'ProgramController'
		})

	$locationProvider.html5Mode(true);

}]);