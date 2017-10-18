angular.module('quovadis').service('formServ', function($http){

	// this.createnewmember = (firstname, lastname, gender, email, phonenumber) => {
	// 	let memberinfo = [firstname, lastname, gender, email, phonenumber];
	// 	return $http.post('/api/member', memberinfo);
	// }

	this.createnewmember = (firstname, lastname, gender, email, phonenumber) => {
		let memberinfo = [firstname, lastname, gender, email, phonenumber];
		return $http.post('/api/member', memberinfo)
		.then(function(resp){
			return resp.data;
		});
	}
	this.delmember = (dm) => {
		$http.delete('/api/member/' + dm);
	};



	this.addDona = (desc) => {
		console.log(desc);
		return $http.get('/api/donations', desc)
		.then( (re) => {return re.data} );
	}


	// this.donatedAmount = (amount) => {
	// 	return $http.post('/api/donations', amount)
	// 	.then( re => return re.data )
	// };
	// this.donatedItem = (item, itemdesc) => {
	// 	let donationinfo = [item, itemdesc];
	// 	return $http.post('/api/donations', donationinfo)
	// 	.then( re => return re.data )
	// };

})