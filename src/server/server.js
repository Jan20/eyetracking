var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');


var mongoose = require('mongoose');
mongoose.connect('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

var experimentRoute = express.Router();


experimentRoute
	.route('/experiments')
		.post(postExperiment)
		.get(getExperiments);


experimentRoute
	.route('/experiment/:experimentId')
		.get(getExperiment)
		.put(updateExperiment);


/**
*
*	Die folgende Funktion implementiert die GET ALL Funktionalität der Route
*
*/
function getExperiments(req, res){
	Experiment.find({}, function(err, experiments){
		if(err)
			res.send('Bei der Abfrage aller Experimente ist ein Fehler aufgetreten: ' + err);
		res.json(experiments);
		
	});
}

/**
*
*	Die folgende Funktion implementiert die GET ONE Funktionalität der Route
*
*/
function getExperiment(req, res){
	Experiment.findOne({experimentId: req.params.experimentId}, function(err, experiment){
		if(err)
			res.send('Bei der Abfrage eines Experiments ist ein Fehler aufgetreten: ' + err);
		res.json(experiment);
	});
}


/**
*
*	Die folgende Funktion implementiert die POST Funktionalität der Route
*
*/
function postExperiment(req, res){
	var experiment = new Experiment({
		experimentId: req.body.experimentId,
		description: req.body.description,
		buttonActive: req.body.buttonActive,
		buttonInactive: req.body.buttonInactive
	});
	experiment.save(function(err, a){
		if(err)
			res.send('Bei der Abfrage eines Experiments ist ein Fehler aufgetreten: ' + err);
		res.json(experiment);
	});
}


/**
*
*	Die folgende Funktion implementiert die GET ALL Funktionalität der Route
*
*/
function updateExperiment(req, res){
	Experiment.findOne({experimentId: req.params.experimentId}, function(err, experiment){
		experiment.experimentId = req.body.experimentId;
		experiment.description = req.body.description;
		experiment.buttonActive = req.body.buttonActive;
		experiment.buttonInactive = req.body.buttonInactive;
		experiment.save(function(err){
		if(err)
			res.send('Bei der Änderung eines Experiments ist ein Fehler aufgetreten: ' + err);
		res.json(experiment);
		});
	});
}















app.use('/asdf', function(req, res){
	res.send('Hello');
});


app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var userRoute = require('./api/userRoute');
app.use('/api', userRoute);

var productRoute = require('./api/productRoute');
app.use('/api', productRoute);

// var experimentRoute = require('./api/experimentRoute');
app.use('/api', experimentRoute);

var questionRoute = require('./api/questionRoute');
app.use('/api', questionRoute);

var quizRoute = require('./api/quizRoute');
app.use('/api', quizRoute);

    app.use(express.static(__dirname + '/public'));
    app.get('/', function(req, res) {
        fs.readFile(__dirname + 'public/index.html', 'utf8', function(err, text){
            res.send(text);
        });
    });
    app.listen(3000);

        
   console.log('The app is listening at port:' + app.get('port') + '. Tap Ctrl+C to terminate.');

