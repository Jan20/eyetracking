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

var Experiment = require('.models/experiment.js');
app.get('/api/experiments', function(req, res){
	Experiment.find({}, function(err, experiments){
		res.json(experiments.map(function(a){
			return { 
				name: a.name,
				description: a.description,
				buttonActive: a.buttonActive,
				buttonInactive: a.buttonInactive
			};
		}));
	}
	);
});



// --------
app.use(require('body-parser')());
var Rocket = require('./models/rocket.js');

app.get('/api/rockets', function(req, res){
	Rocket.find({

	}, function(err, rockets){
		if(err){
			return res.send(500, 'Error occured: database error');
		}else{
			res.json(rockets.map(function(a){
				return{
					name: a.name,
					company: a.company,
					description: a.description
				};
			}));
		}
	});
});

app.post('/api/rocket', function(req, res){
	console.log(req.body.name);
	var a = new Rocket({
		name: req.body.name,
		company: req.body.company,
		description: req.body.description
	});
	a.save(function(err, a){
		if(err){
			return res.send(500, 'Error occurred: database error');
		}else{
			res.json({id: a._id});
		}
	});
});


var server = app.listen(app.get('port'), function(){
	console.log('Example app listening at localhost:' + app.get('port') + '. Tap Ctrl+C to terminate.');
});