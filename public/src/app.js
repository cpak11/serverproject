angular.module('quovadis', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('about', {
		url: '/',
		templateUrl: '/src/components/about/about.html',
		controller: 'aboutCtrl'
	})
	

});