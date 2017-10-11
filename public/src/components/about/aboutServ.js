angular.module('quovadis').service('aboutServ', function($http){

	this.getallmembers = function(){
		return $http({
			method: 'GET',
			url: '/api/members'
		}).then(function(member){
			return member.data;
		});
	}
	
});