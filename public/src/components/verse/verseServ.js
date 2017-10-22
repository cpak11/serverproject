angular.module('quovadis').service('verseServ', function($http){

	this.verseGet = function(){
		return $http({
			method: 'GET',
			url: 'http://labs.bible.org/api/?passage=John%203:16&type=json'
		})
		.then(function(re){
				console.log(re)
			return re.data;
		})
	}

});