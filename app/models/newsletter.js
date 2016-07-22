// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define our mean-stack model
var userSchema = new mongoose.Schema({
	name: String,
	email: String
});

var user = mongoose.model('user',userSchema);


// module.exports allows us to pass this to other files when it is called
module.exports = 'user';