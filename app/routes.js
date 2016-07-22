module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};




/*module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

app.post('/new', function(req, res) {
		new newsLetter({
			name: req.body.name,
			email: req.body.email
		}).save(function(err,doc) {
			if(err)  res.json(err);
			else res.send('Successfully inserted! Click back to get back to the page');
		});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

});*/