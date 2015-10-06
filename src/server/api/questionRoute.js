var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Question = require('.././models/question');
var multer = require('multer');

mongoose.createConnection('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

var questionRoute = express.Router();

questionRoute
	.route('/questions')
		.get(getQuestions)
		.post(postQuestion);

questionRoute
	.route('/question/:questionId')
		.get(getQuestion)
		.put(putQuestion)
		.delete(deleteQuestion);

/**
*
*	Datenupload
*
*/
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/Jan/Code/eyetracking/src/server/public/images/questions');
  },
  filename: function (req, file, cb) {
    cb(null, 'question' + req.params.questionId + '.jpg');
  }
});

var upload = multer({ storage: storage });


questionRoute
	.post('/question/:questionId', upload.single('image'), function postImage(req, res, next){
	console.log(req.body);
	console.log(req.file);
	console.log(req.file.filename);
	res.status(204).end();
});




/**
*
*	Die folgende Funktion stellt ausgehend von dem Produkt Model die GET ALL Funktionalität,
*	zum Abruf aller Datensätzer innerhalb der oben definierten Datenbank bereit. Hierzu 
*	wird die find-Funktion des express-Frameworks aufgerufen. Diese wird mit einem leeren 
*	Parameter versehen, sodass die Abfrage auf alle Datensätze zutrifft.
*
*/
function getQuestions(req, res){
	Question.find({}, function(err, questions){
		if(err)
			res.send('Bei der Abfrage aller Fragen ist ein Fehler aufgetreten: ' + err);
		res.json(questions);
	});
}

/**
*
*	
*
*
*/
function getQuestion(req, res){
	Question.find({questionId: req.params.questionId}, function(err, question){
		if(err)
			res.send('Bei der Abfrage einer einzelnen Frage ist ein Fehler aufgetreten: ' + err);
		res.json(question);
	});
}

/**
*
*	Mit der folgenden Funktion ist es möglich eine neue Frage hinzuzufügen. Das entsprechende 
*	Bild zur Frage wird direkt mittels multer an den Server geschickt.
*
*/
function postQuestion(req, res){
	var question = new Question({
		questionId: req.body.questionId,
		name: req.body.name,
	});

	question.save(function(err){
		if(err)
			res.send('Bei dem Anlegen einer neuen Frage ist ein Fehler aufgetreten: ' + err);
		res.json(question);
	});
}

/**
*
*	Die folgende Funktion stellt die UPDATE-Funktionalität der Route bereit.
*
*/
function putQuestion(req, res){
	Question.findOne({questionId: req.params.questionId}, function(err, question){
		console.log(req.body);
		question.questionId = req.body.questionId;
		question.name = req.body.name;
		question.save(function(err){
			if(err){
				return res.send('Bei dem Update von ' + question.name + 'ist es zu einem Fehler gekommen: ' + err);
			}
			res.json({message: question.name + ' erfolgreich geändert.'});
		});
	});
}

function deleteQuestion(req, res, err) {
    Question.remove({ questionId: req.body.questionId}, function(err, question){
        if (err) res.send('A database error occured.' + err);
        res.json({ message: 'Successfully deleted.'});    	
    });

}


module.exports = questionRoute;