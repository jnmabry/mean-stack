// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define our mean-stack model
var userSchema = new mongoose.Schema({
	name: String,
	email: String
});

var users = mongoose.model('User',userSchema);


// module.exports allows us to pass this to other files when it is called
module.exports = 'User';
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes



	// frontend routes =========================================================
	// route to handle all angular requests

module.exports = function(app) {


	app.post('/users', function(req, res) {
			new users({
				name: req.body.name,
				email: req.body.email
			}).save(function(err,doc) {
				if(err)  res.json(err);
				else res.send('Successfully inserted! Click back to get back to the page');
			});
		});
		

		app.get('/users', function(req, res) {
		  mongoose.model('User').find(function(err, users) {
		    res.send(users);
		  });
		});


	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
	
};