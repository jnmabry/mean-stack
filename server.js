// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();


// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

mongoose.connect('mongodb://127.0.0.1/users',  function(err) {
		if(err) {
	     console.log("Failed connecting to Mongodb!");
		} else {
			console.log("Successfully connected to Mongo!");
		}
});



	var user = require(__dirname + '/app/models/newsletter.js');
	var user 
	
	app.post('/users', function(req, res) {
		new user({
			name: req.body.name,
			email: req.body.email
		}).save(function(err,doc) {
			if(err)  res.json(err);
			else res.send('Successfully inserted! Click back to get back to the page');
		});
	});




// get all data/stuff of the body (POST) parameters

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

/*
var newsLetter = require('./app/models/newsletter.js');

	app.post('/newsletter.js', function(req, res) {
			new newsLetter({
				name: req.body.name,
				email: req.body.email
			}).save(function(err,doc) {
				if(err)  res.json(err);
				else res.send('Successfully inserted! Click back to get back to the page');
			});
	});
*/
// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app