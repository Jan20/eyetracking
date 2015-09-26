var mongoose = require('mongoose');

var experimentSchema = mongoose.Schema({
	experimentId: Number,
	description: String,
	buttonActive: String,
	buttonInactive: String
});

var Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = Experiment;