angular.module('quovadis').controller('formCtrl', function($scope, formServ){

	$scope.addnewmember = function(firstname, lastname, email, gender, phonenumber){
		formServ.createnewmember(firstname, lastname, email, gender, phonenumber)
		.then(function(re){

			var rr = document.getElementsByClassName('refresh');
			for(i=0;i<rr.length;i++){
				rr[i].value = '';
			}

			$scope.getallmembers();
			return re;
		})
	}

	// formServ.createnewmember;

	$scope.getallmembers = function(){
		formServ.getallmembers().then(members => {
			console.log(members);
			$scope.members = members;
		})
	}

	$scope.getallmembers();
	
	$scope.deletemember = function(dm){
		formServ.delmember(dm)
		.then(function(r){


			
			$scope.getallmembers();
			return r;
		})
	}

	$scope.updatelastname = function(lnid, lnln){
		formServ.lastnameUpdate(lnid, lnln)
		.then(function(rerere){
			return rerere;
		})
	};
	$scope.updateemail = function(eid, ee){
		formServ.emailUpdate(eid, ee)
		.then(function(ree){
			return ree;
		})
	};
	$scope.updatephonenumber = function(pnid, pnpn){
		formServ.phonenumberUpdate(pnid, pnpn)
		.then(function(r3s){
			return r3s;
		})
	};

	// formServ.delmember;



	$scope.getAmountDonations = function(){
		formServ.getDonationsAmount()
		.then( (amounts) => {
			$scope.amounts = amounts;
		})
	};
	$scope.getItemDonations = function(){
		formServ.getDonationsItem()
		.then( (items) => {
			$scope.items = items;
		})
	};
	$scope.getAmountDonations();
	$scope.getItemDonations();



	$scope.addDonation = function(d_object){
		formServ.donationAdd(d_object)
		.then(function(re){
			return re;
		});
	}
	$scope.addDonationItem = function(di_object){

		formServ.donationAddItem(di_object)
		.then(function(rere){
			return rere;
		})
	}
	$scope.deleteDonation = function(del_id){
		formServ.donationDelete(del_id)
		.then(function(rrr){
			return rrr;
		})
	}

	// $scope.addDonatedAmount = formServ.donatedAmount;
	// $scope.addDonatedItem = formServ.donatedItem;


});