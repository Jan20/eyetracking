var mongoose = require('mongoose');

var experimentSchema = mongoose.Schema({
	name: String,
	description: String,
	buttonActive: String,
	buttonInactive: String
});

var Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = Experiment;