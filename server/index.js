const express = require('express'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	massive = require('massive');

const app = express();

app.use(bodyParser.json());
app.use(session({
	secret: 'devmountainsecret',
	saveUninitialized: false,
	resave: false
}));






massive({
	host: 'localhost',
	port: 5432,
	database: 'quovadis',
	user: 'postgres',
	password: 'devmountain'
}).then(instance => {
	app.set('db', instance);

	app.get('/', (req,res) => {
		req.app.get('db').getallmembers()
		.then(resp => res.json(resp))
	})
})




const port = 3000;
app.listen(port, function(){
	console.log(`Listening on port: ${port}`);
});