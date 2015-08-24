var mongoose = require('mongoose');

var rocketSchema = mongoose.Schema({
	name: String,
	company: String,
	description: String
});

var Rocket = mongoose.model('Rocket', rocketSchema);

module.exports = Rocket;