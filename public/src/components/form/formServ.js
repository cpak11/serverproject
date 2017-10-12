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

})