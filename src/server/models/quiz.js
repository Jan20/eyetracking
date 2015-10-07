var mongoose = require('mongoose');

var quizSchema = mongoose.Schema({
	quizId: Number,
	textRight: String,
	textLeft: String
});

var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;