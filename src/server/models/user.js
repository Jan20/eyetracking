var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	userId: String,
	visitedIn2: String,
	choosedIn3: String,
	visitedIn5: String,
	choosedIn6: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;