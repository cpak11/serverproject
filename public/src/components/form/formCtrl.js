angular.module('quovadis').controller('formCtrl', function($scope, formServ){

	// $scope.addnewmember = formServ.createnewmember;
	// function(firstname, lastname, gender, email, phonenumber){
	// 	formServ.createnewmember(firstname, lastname, gender, email, phonenumber)
	// 	.then(member => {
	// 		console.log(member);
	// 		$scope.member = member;
	// 	})
	// }
	// $scope.deletemember = formServ.delmember;


	$scope.addDon = function(desc){
		console.log(desc);
		formServ.addDona(desc)
		.then(function(re){
			return re;
		});
	}

	// $scope.addDonatedAmount = formServ.donatedAmount;
	// $scope.addDonatedItem = formServ.donatedItem;

	$scope.test = 'ttt';

});