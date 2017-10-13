angular.module('quovadis', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('about', {
		url: '/',
		views: {
			'about-view': {
				templateUrl: '/src/components/about/about-currentmembers.html',
				controller: 'aboutCtrl'
			}
		}
		
	})
	

});