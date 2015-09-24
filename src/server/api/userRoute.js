var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('.././models/user');

mongoose.connect('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

var userRoute = express.Router();

userRoute
	.route('/users')
		.get(getUsers);

userRoute
	.route('/user')
		.get(getUser)
		.post(postUser);

function getUsers(req, res){
	User.find({}, function(err, users){
		if(err)
			res.send('Bei der Abfrage aller Nutzer ist ein Fehler aufgetreten: ' + err);
		res.json(users);
	});
}

function getUser(req, res){
	User.find('admin', function(err, user){
		if(err)
			res.send('Bei der Abfrage eines einzelnen Nutzers ist ein Fehler aufgetreten: ' + err);
		res.json(user);
	});
}

function postUser(req, res){
	console.log('Hello: ' + req.body.visitedIn2);
	var user = new User({
		userId: req.body.userId,
		visitedIn2: req.body.visitedIn2,
		choosedIn3: req.body.choosedIn3,
		visitedIn5: req.body.visitedIn5,
		choosedIn6: req.body.choosedIn6		
	});

	user.save(function(err){
		if(err)
			res.send('Bei dem Anlegen eines neuen Users ist ein Fehler aufgetreten: ' + err);
		res.json(user);
	});
}


module.exports = userRoute;