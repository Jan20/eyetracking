var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// var userRoute = require('./api/userRoute');
// app.use('/api', userRoute);

var productRoute = require('./api/productRoute');
app.use('/api', productRoute);

// var experimentRoute = require('./api/experimentRoute');
// app.use('/api', experimentRoute);



var server = app.listen(app.get('port'), function(){
	console.log('Example app listening at localhost:' + app.get('port') + '. Tap Ctrl+C to terminate.');
});