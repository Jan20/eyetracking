var mongoose = require('mongoose');

var quizSchema = mongoose.Schema({
	quizId: Number,
	delay0: Number,
	delay1: Number
});

var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;