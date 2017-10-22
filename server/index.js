const express = require('express');
	bodyParser = require('body-parser'),
	session = require('express-session'),
	massive = require('massive');

const connectionString = 'postgres://postgres:devmountain@localhost/quovadis';

const app = express();

app.use(bodyParser.json());
app.use(session({
	secret: 'devmountainsecret',
	saveUninitialized: true,
	resave: false
}));

// app.use(express.static(`${__dirname}/../public`));
app.use('/', express.static(__dirname + '/../public'));

// massive({
// 	host: 'localhost',
// 	port: 5432,
// 	database: 'quovadis',
// 	user: 'postgres',
// 	password: 'devmountain'
// }).then(instance => {
// 	app.set('db', instance);

// 	app.get('/', (req,res) => {
// 		req.app.get('db').getallmembers()
// 		.then(resp => res.json(resp))
// 	});

// });


// massive(connString).then(db => {app.set('db',db)});

// app.get('/api/members', function(req, res, next){
// 	req.app.get('db').getallmembers().then(members => {
// 		res.json(members);
// 	})
// })
// app.get('/api/members/:id', function(req, res, next){
// 	req.app.get('db').getmember(req.params.id).then(member => {
// 		res.json(member)
// 	})
// });
// app.post('/api/members', function(req, res, next){
// 	req.app.get('db')
// 	.addmember([
// 		req.body.first_name,
// 		req.body.last_name,
// 		req.body.gender,
// 		req.body.email,
// 		req.body.phone_number
// 	]).then(response => res.json(response));
// });
// app.put('/api/members/:id', function(req, res, next){
// 	req.app.get('db').updatemember([req.paramsid, query.desc])
// 	.then(resp => res.json(resp));
// });
// app.delete('/api/members/:id', function(req, res, next){
// 	req.app.get('db').deletemember(req.params.id)
// 	.then(respo => res.json(respo));
// });

const massiveConnection = massive(connectionString)
.then(db => {
    app.set('db', db);
})
.catch(err => {
    console.log(err);
});

app.get('/api/members', ( req, res, next ) => {
	const dbInstance = req.app.get('db');
	dbInstance.getallmembers()
	.then( members => res.status(200).send( members ) )
	.catch( () => res.status(500).send() );
});
app.get('/api/member/:id', ( req, res, next ) => {
	const dbInstance = req.app.get('db');
	const { params } = req;
	dbInstance.getmember([ params.id ])
	.then( member => res.status(200).send( member ) )
	.catch( () => res.status(500).send() );
});
app.post('/api/member', ( req, res, next ) => {
	const dbInstance = req.app.get('db');
	dbInstance.addmember(req.body)
	.then( () => res.status(200).send() )
	.catch( () => res.status(500).send() );
});
app.delete('/api/member/:id', ( req, res, next ) => {
	const dbInstance = req.app.get('db');
	const { params } = req;
	console.log(req.params)
	dbInstance.deletemember([ params.id ])
	.then( () => res.status(200).send() )
	.catch( () => res.status(500).send() );
});
app.post('/api/update/member/',(req, res, next) =>{
	const dbInstance = req.app.get('db');	
	dbInstance.updatelastname(req.body)
	.then(response => {return res.json(response)})
	.catch( () => res.status(500).send() );
});
app.post('/api/updateemail/member/',(req, res, next) =>{
	const dbInstance = req.app.get('db');
	dbInstance.updateemail(req.body)
	.then( response => {return res.json(response)} )
	.catch( () => res.status(500).send() );
});
app.post('/api/updatephone/member/',(req, res, next) =>{
	const dbInstance = req.app.get('db');
	dbInstance.updatephonenumber(req.body)
	.then( response => {return res.json(response)} )
	.catch( () => res.status(500).send() );
});







app.get('/api/donations/amounts', ( req, res, next ) => {
	const dbInstance = req.app.get('db');
	dbInstance.getdonationsamounts()
	.then( amounts => res.status(200).send( amounts ) )
	.catch( () => res.status(500).send() );
});
app.get('/api/donations/items', ( req, res, next ) => {
	const dbInstance = req.app.get('db');
	dbInstance.getdonationsitems()
	.then( items => res.status(200).send( items ) )
	.catch( () => res.status(500).send() );
});
app.post('/api/donations/amounts', (req, res, next) => {
	const dbInstance = req.app.get('db');
	//sql statement thzt grabs member id where member id = req.body.memberid
	dbInstance.adddonationamount([req.body.memberid, req.body.amount])
	.then( () => res.status(200).send('gogo') )
	.catch( () => res.status(500).send() );
});
app.post('/api/donations/items', (req, res, next) => {
	const dbInstance = req.app.get('db');
	// ***
	console.log(req.body)
	dbInstance.adddonationitem([req.body.memberid, req.body.item, req.body.itemde])

	.then( () => res.status(200).send('gogo') )
	// .catch( () => res.status(500).send() );
});
app.delete('/api/donations/:id', ( req, res, next ) => {
	const dbInstance = req.app.get('db');
	const { params } = req;
	console.log(req.params)
	dbInstance.deletedonation([ params.id ])
	.then( () => res.status(200).send() )
	.catch( () => res.status(500).send() );
});


// *** example
// app.post('/api/donations', (req, res, next) => {
//   const dbInstance = req.app.get('db');
//   dbInstance.checkMemeber(req.body.memberId).then(function(response) {
//     if (response.length > 0) {
//       dbInstance.addDonation([req.body.memberId, req.body.amount]).then(function(resp) {
//         res.json('Success');
//       });
//     } else {
//       res.status(401).json('No User Found');
//     }
//   });
// });

















const port = 3000;
app.listen(port, function(){
	console.log(`Listening on port: ${port}`);
});