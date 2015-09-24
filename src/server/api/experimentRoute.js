var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Experiment = require('.././models/experiment');

mongoose.connect('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

var experimentRoute = express.Router();

experimentRoute
	.route('/experiments')
		.get(getExperiments);

experimentRoute
	.route('/experiment')
		.get(getExperiment)
		.post(postExperiment)
		.put(updateExperiment);



// -------------------------------------- GET ALL --------------------------------------

function getExperiments(req, res){
	Experiment.find({}, function(err, experiments){
		if(err){
			return res.send(500, 'Error occured: database error');			
		}else{
			console.log('GET Database query succeeded.');
			res.json(experiments.map(function(a){
				return { 
					name: a.name,
					description: a.description,
					buttonActive: a.buttonActive,
					buttonInactive: a.buttonInactive
				};
			}));
		}
	});
}

// -------------------------------------- GET ONE --------------------------------------

function getExperiment(req, res){
	Experiment.findOne({name: 'experiment0'}, function(err, experiment){
		if(err)
			return send(500, 'Error occured: database error');
		console.log('GET Database query succeeded.');
		res.json(experiment);
	});
}


// -------------------------------------- POST --------------------------------------

function postExperiment(req, res){
	var a = new Experiment({
		name: req.body.name,
		description: req.body.description,
		buttonActive: req.body.buttonActive,
		buttonInactive: req.body.buttonInactive
	});
	console.log(a);
	a.name = 'Jan';
	a.save(function(err, a){
		if(err){

			return res.send(500, 'Error occurred: database error');
		}else{
			console.log('POST Database query succeeded.');
			res.json(
				{	id: a._id,
					name: a.name	}
			);
		}
	});
}


// -------------------------------------- UPDATE --------------------------------------

function updateExperiment(req, res){
	Experiment.findOne({name: 'experiment0'}, function(err, experiment){
		experiment.name = req.body.name;
		experiment.description = req.body.description;
		experiment.buttonActive = req.body.buttonActive;
		experiment.buttonInactive = req.body.buttonInactive;
		experiment.save(function(err){
			if(err){
				return res.send(500, 'Error occurred: database error');
			}
			res.json({message: 'Experiment updated!'});
		});
	});
}


// -------------------------------------- GET ALL --------------------------------------




module.exports = experimentRoute;