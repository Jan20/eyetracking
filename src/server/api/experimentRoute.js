var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Experiment = require('.././models/experiment');

mongoose.createConnection('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');


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

module.exports = experimentRoute;