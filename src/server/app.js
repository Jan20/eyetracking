var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

var mongoose = require('mongoose');
mongoose.connect('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

app.get('/', function(req, res){
	res.send('Hello World');
});

app.use('/api', require('./routes'));


// -------
app.use(require('body-parser')());

var Experiment = require('./models/experiment.js');

app.get('/api/experiments', function(req, res){
	Experiment.find({name: 'experiment1'}, function(err, experiments){
		if(err){
			return res.send(500, 'Error occured: database error');			
		}else{
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
});

app.post('/api/experiment', function(req, res){
	var a = new Experiment({
		"name": req.body.name,
		"description": req.body.description,
		"buttonActive": req.body.buttonActive,
		"buttonInactive": req.body.buttonInactive
	});
	a.save(function(err, a){
		if(err){
			return res.send(500, 'Error occurred: database error');
		}else{
			res.json({id: a._id});
		}
	});
});

app.put('/api/experiment', function(req, res){
	Experiment.findOne({name: 'experiment1'}, function(err, experiment){
		experiment.name = req.body.name;
		experiment.description = req.body.description;
		experiment.buttonActive = req.body.buttonActive;
		experiment.buttonInactive = req.body.buttonInactive;
		experiment.save(function(err){
			if(err){
				return res.send(500, 'Error occurred: database error');
			}
		});
	});
});

var server = app.listen(app.get('port'), function(){
	console.log('Example app listening at localhost:' + app.get('port') + '. Tap Ctrl+C to terminate.');
});