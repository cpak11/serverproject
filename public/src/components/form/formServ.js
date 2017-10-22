angular.module('quovadis').service('formServ', function($http){

	// this.createnewmember = (firstname, lastname, gender, email, phonenumber) => {
	// 	let memberinfo = [firstname, lastname, gender, email, phonenumber];
	// 	return $http.post('/api/member', memberinfo);
	// }

	this.createnewmember = (firstname, lastname, email, gender, phonenumber) => {
		let memberinfo = [firstname, lastname, email, gender, phonenumber];
		return $http.post('/api/member', memberinfo)
		.then(function(resp){
			return resp.data;
		});
	}

	this.getallmembers = function(){
		return $http({
			method: 'GET',
			url: '/api/members'
		}).then(function(member){
			return member.data;
		});
	}

	this.delmember = (dm) => {
		$http.delete('/api/member/' + dm);
	};
	this.lastnameUpdate = function(lnid, lnln){
		let arrr = [lnid, lnln]
		return $http.post('/api/update/member/', arrr)
		.then(response => {
			return response.data
		} )
	}
	this.emailUpdate = function(eid, ee){
		let earr = [eid, ee]
		return $http.post('/api/updateemail/member/', earr)
		.then( emobj => {
			return emobj.data
		} )
	}
	this.phonenumberUpdate = function(pnid, pnpn){
		let parr = [pnid, pnpn]
		return $http.post('/api/updatephone/member/', parr)
		.then( pnobj => {
			return pnobj.data
		} )
	}



	this.getDonationsAmount = () => {
		return $http.get('/api/donations/amounts').then( (amounts) => {
			console.log(amounts)
			return amounts.data} )
	}
	this.getDonationsItem = () => {
		return  $http.get('/api/donations/items').then( (items) => {
			console.log(items)
			return items.data} )
	}


	this.donationAdd = (d_obj) => {
		return $http.post('/api/donations/amounts', d_obj)
		.then( (re) => {return re.data} );
	}
	this.donationAddItem = (di_obj) => {
		console.log(di_obj);
		return $http.post('/api/donations/items', di_obj)
		.then( (rere) => {return rere.data} );
	}
	this.donationDelete = (delid) => {
		$http.delete('/api/donations/' + delid);
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