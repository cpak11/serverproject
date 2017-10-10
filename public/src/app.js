angular.module('quovadis', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '',
		templateUrl: ''
	})
	.state();

});