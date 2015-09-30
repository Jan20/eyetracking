var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
	questionId: Number,
	name: String
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;