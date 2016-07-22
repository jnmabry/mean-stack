module.exports = function(app) {
var mongoose       = require('mongoose');

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests


	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
	
};



/*
	app.post('/newsLetter', function(req, res) {
			var newsLetter = ({
				name: req.body.name,
				email: req.body.email
			}).save(function(err,doc) {
				if(err)  res.json(err);
				else res.send('Successfully inserted! Click back to get back to the page');
			});
	});
*/