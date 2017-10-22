angular.module('quovadis', ['ui.router']).config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider){

	$urlRouterProvider.otherwise('/');

	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'http://labs.bible.org/**'
	]);

	$stateProvider
	.state('state1', {
		url: '/',
		views: {
			'donate-view': {
				templateUrl: '/src/components/form/form-donate.html'
			},
			'donationview': {
				templateUrl: '/src/components/form/form-donationamount.html'
			},
			// 'updatemember': {
			// 	templateUrl: ''
			// }
		}
	})
	.state('state2', {
		url: '/',
		views: {
			'donate-view': {
				templateUrl: '/src/components/form/form-donateitem.html'
			},
			'donationview': {
				templateUrl: '/src/components/form/form-donationitem.html'
			},
			// 'updatemember': {
			// 	templateUrl: ''
			// }
		}
	}
	// .state('state3', {
	// 	url: '/',
	// 	views: {
	// 		'updatemember': {
	// 			templateUrl: ''
	// 		}
	// 	}
	// }
	)

	

});