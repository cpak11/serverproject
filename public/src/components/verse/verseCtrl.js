angular.module('quovadis').controller('verseCtrl', function($scope, verseServ){

	verseServ.verseGet().then(function(res){
		$scope.vv = res;
	})

});

// http://labs.bible.org/api/?