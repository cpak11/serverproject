const express = require('express'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	massive = require('massive');

const app = express();

app.use(bodyParser.json());
app.use(session({
	secret: 'devmountainsecret',
	saveUninitialized: true,
	resave: false
}));


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


const connectionString = 'postgres://postgres:devmountain@localhost/quovadis';
massive(connectionString).then(db => {app.set('db',db)});

app.get('/api/members', function(req, res, next){
	req.app.get('db').getallmembers().then(members => {
		res.json(members);
	})
})
app.post('/api/members', function(req, res, next){
	req.app.get('db')
	.addmember([
		req.body.first_name,
		req.body.last_name,
		req.body.gender,
		req.body.email,
		req.body.phone_number
	]).then(response => res.json(response))
});
app.delete('/api/members/:id', function(req, res, next){
	req.app.get('db').deletemember(req.params.id)
	.then(respo => res.json(respo));
});




const port = 3000;
app.listen(port, function(){
	console.log(`Listening on port: ${port}`);
});