// grab the mongoose module
var mongoose = require('mongoose');

var newsLetter = new mongoose.Schema({
	name: String,
	email: String
});

var newsLetter = mongoose.model("NewsLetter",newsLetterSchema);


// define our mean-stack model
// module.exports allows us to pass this to other files when it is called
module.exports = model;