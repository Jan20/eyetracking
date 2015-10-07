var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Quiz = require('.././models/quiz');
var multer = require('multer');


mongoose.createConnection('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

var quizRoute = express.Router();

quizRoute
	.route('/quizzes')
		.post(postQuiz);

quizRoute
	.route('/quiz/:quizId')
		.get(getQuiz)
		.put(putQuiz);


/**
*
*	
*
*
*/
function getQuiz(req, res){
	Quiz.find({quizId: req.params.quizId}, function(err, quiz){
		if(err)
			res.send('Bei der Abfrage eines einzelnen Quizzes ist ein Fehler aufgetreten: ' + err);
		res.json(quiz);
	});
}


/**
*
*	Mit der folgenden Funktion ist es möglich ein neues Quiz hinzuzufügen.
*
*/
function postQuiz(req, res){
	var quiz = new Quiz({
		quizId: req.body.quizId,
		textRight: req.body.textRight,
		textLeft: req.body.textLeft,
	});

	quiz.save(function(err){
		if(err)
			res.send('Bei dem Anlegen eines neuen Quiz ist ein Fehler aufgetreten: ' + err);
		res.json(quiz);
	});
}

/**
*
*	Die folgende Funktion stellt die UPDATE-Funktionalität der Route bereit.
*
*/
function putQuiz(req, res){
	Quiz.findOne({quizId: req.params.quizId}, function(err, quiz){
		quiz.quizId = req.body.quizId;
		quiz.textRight = req.body.textRight;
		quiz.textLeft = req.body.textLeft;
		quiz.save(function(err){
			if(err){
				res.send('Bei dem Update eines Quizzes ist es zu einem Fehler gekommen: ' + err);
			}
			res.json({'message': 'Quiz wurde erfolgreich geändert.'});
		});
	});
}



module.exports = quizRoute;