'use strict';

define(['angular-page'], function(app) {

	app.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/default', {
				templateUrl: 'my-app.html'
			}).when('/view2', {
				templateUrl: 'my-app-view-2.html'
			}).otherwise({
				redirectTo: '/default'
			});
		}
	]);

});
