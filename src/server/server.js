var requirejs = require('requirejs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');


var mongoose = require('mongoose');
mongoose.connect('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

var experimentSchema = mongoose.Schema({
	experimentId: Number,
	description: String,
	buttonActive: String,
	buttonInactive: String
});

var Experiment = mongoose.model('Experiment', experimentSchema);
console.log(Experiment.find({},function(err, experiments){
	res.sjon(experiments);
}));

// app.get('/experiments', function(req, res){
// 	Experiment.find({}, function(err, experiments){
// 		if(err)
// 			res.send('Bei der Abfrage aller Experimente ist ein Fehler aufgetreten: ' + err);
// 		res.json(experiments);
		
// 	});
// });

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// var userRoute = require('./api/userRoute');
// app.use('/api', userRoute);

// var productRoute = require('./api/productRoute');
// app.use('/api', productRoute);

// var experimentRoute = require('./api/experimentRoute');
// app.use('/api', experimentRoute);

// var questionRoute = require('./api/questionRoute');
// app.use('/api', questionRoute);

// var quizRoute = require('./api/quizRoute');
// app.use('/api', quizRoute);

    app.use(express.static(__dirname + '/public'));
    app.get('/', function(req, res) {
        fs.readFile(__dirname + 'public/index.html', 'utf8', function(err, text){
            res.send(text);
        });
    });
    app.listen(3000);

        
   console.log('The app is listening at port:' + app.get('port') + '. Tap Ctrl+C to terminate.');

