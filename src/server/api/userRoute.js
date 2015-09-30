var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('.././models/user');

mongoose.createConnection('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

var userRoute = express.Router();

userRoute
	.route('/users')
		.get(getUsers)
		.post(postUser);

userRoute
	.route('/user/:userId')
		.get(getUser)
		.put(updateUser)
		.delete(deleteUser);

/**
*
*	Die folgende Funktion implementiert die GET ALL Funktionalität der Route
*
*/
function getUsers(req, res){
	User.find({}, function(err, users){
		if(err)
			res.send('Bei der Abfrage aller Nutzer ist ein Fehler aufgetreten: ' + err);
		res.json(users);
	});
}


/**
*
*	Die folgende Funktion implementiert die GET ONE Funktionalität der Route
*
*/
function getUser(req, res){
	console.log('req.params.userId: ' + req.params.userId);
	User.findOne({userId: req.params.userId}, function(err, user){
		if(err)
			res.send('Bei der Abfrage eines einzelnen Nutzers ist ein Fehler aufgetreten: ' + err);
		res.json(user);
	});
}


/**
*
*	Die folgende Funktion implementiert die POST Funktionalität der Route
*
*/
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

/**
*
*	Die folgende Funktion implementiert die GET ALL Funktionalität der Route
*
*/
function updateUser(req, res){
	User.findOne({userId: req.params.userId}, function(err, user){
		user.userId = req.body.userId;
		user.visitedIn2 = req.body.visitedIn2;
		user.choosedIn3 = req.body.choosedIn3;
		user.visitedIn5 = req.body.visitedIn5;
		user.choosedIn6 = req.body.choosedIn6;
		user.save(function(err){
		if(err)
			res.send('Bei der Änderung eines Users ist ein Fehler aufgetreten: ' + err);
		res.json(user);
		});
	});
}

/**
*
*	Die folgende Funktion dient zur Löschung eines bestimmten Users. Sie findet im Rahmen
*	des Experiments ledlich im View 0 Anwendung, um Datensätze, die durch das Eintragen des
*	Schlüsselworts 'admin' im View 0 angelegt werden. Dies ist nicht die eleganteste, aber 
*	eine schnelle und effektive Lösung um das obige Problem zu lösen.
*
*/
function deleteUser(req, res, err) {
    User.remove({ userId: req.params.userId}, function(err, user){
       if (err) 
       		res.send('Bei der Löschung eines Nutzers ist ein Datenbankfehler aufgetreten: ' + err);
       res.json({ message: 'Nutzer erfolgreich gelöscht.'});
    });
}

module.exports = userRoute;