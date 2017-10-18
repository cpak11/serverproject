angular.module('quovadis', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	// .state('about', {
	// 	url: '/',
	// 	views: {
	// 		'about-view': {
	// 			templateUrl: '/src/components/about/about-currentmembers.html',
	// 			controller: 'aboutCtrl'
	// 		}
	// 	}
		
	// })
	.state('addamount', {
		url: '/',
		views: {
			'donate-view': {
				templateUrl: '/src/components/form/form-donate.html'
			}
		}
	})
	.state('additem', {
		url: '/',
		views: {
			'donate-view': {
				templateUrl: '/src/components/form/form-donateitem.html'
			}
		}
	})

	

});