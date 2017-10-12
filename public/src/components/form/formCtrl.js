angular.module('quovadis').controller('formCtrl', function($scope, formServ){

	$scope.addnewmember = formServ.createnewmember;

	// function(firstname, lastname, gender, email, phonenumber){
	// 	formServ.createnewmember(firstname, lastname, gender, email, phonenumber)
	// 	.then(member => {
	// 		console.log(member);
	// 		$scope.member = member;
	// 	})
	// }

	$scope.deletemember = formServ.delmember;	


});