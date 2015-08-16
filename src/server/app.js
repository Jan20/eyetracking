var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello World');
});

app.use('/api', require('./routes'));


var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.port;

	console.log('Example app listening at http://%s:%s', host, port);
});