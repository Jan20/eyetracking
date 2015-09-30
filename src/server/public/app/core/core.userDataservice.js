angular
	.module('app.core')
	.factory('userDataservice', userDataservice);

userDataservice.$inject = ['$http'];

function userDataservice($http){
	var environment = 'http://localhost:3000';
	var currentUser = '';

	return {
		getUsers: getUsers,
		getUser: getUser,
		postUser: postUser,
		putUser: putUser,
		getCurrentUser: getCurrentUser,
		deleteUser: deleteUser
	};

	/**
	*
	*	Die folgende Funktion dient zur Rückgabe des aktuellen Nutzers.
	*	Der aktuelle Nutzer ist im Wesentlichen der Teilnehmer, der 
	*	gerade das Experiment durchführt und seine Teilnehmernummer im 
	*	View 0 eingetragen hat.
	*	@return	Id des aktuellen Nutzers
	*
	*/
	function getCurrentUser(){
		return currentUser;
	}

	/**
	*
	*	Die folgende Funktion gibt alle Nutzer, die in der Datenbank 
	*	hinterlegt sind, zurück.
	*
	*/	
	function getUsers(){
		return $http.get(environment+'/api/users')
			.then(getUsersCompleted)
			.catch(getUsersFailed);

		function getUsersCompleted(response){
			return response.data;
		}

		function getUsersFailed(error){
			console.error('Im userDataservice trat bei der Anfrage nach allen Usern ein Fehler auf: ' + error.data.response);
		}
	}


	/**
	*
	*	Die folende Funktion gibt einen bestimmten Nutzer abhängig
	*	von der eingegebenen Id zurück.
	*	
	*	@userId Eindeutige Nutzernummer des Teilnehmers
	*	
	*/
	function getUser(userId){
		return $http.get(environment+'/api/user/' + userId, userId)
			.then(getUserCompleted)
			.catch(getUserFailed);

		function getUserCompleted(response){
			console.log('User response.data:');
			console.log(response.data);
			return response.data;
		}

		function getUserFailed(error){
			console.error('Der userDatenservice konnte den gewünschten Nutzer nicht abrufen: ' + error.data.response);
		}
	}

	/**
	*
	*	Die folgende Funktion dient zur Erstellung eines neuen Nutzers.
	*	Sie wird lediglich im View 0 aufgerufen, nachdem der Nutzer eine
	*	Teilnehmernummer eingetragen und auf den 'Weiter'-Button geklickt hat.
	*
	*/
	function postUser(data){
		return $http.post(environment+'/api/users', data)
			.then(postUserCompleted)
			.catch(postUserFailed);

		function postUserCompleted(response){
			currentUser = response.data.userId;
			return response.data;
		}

		function postUserFailed(error){
			console.error('Im userDataservice trat im Postrequst ein Fehler auf: ' + error.data.response);
		}
	}


	/**
	*
	*	Die folgende Funktion dient zur Änderung eines Nutzers. Sie wird 
	*	in den Views 2,3,5 und 6 aufgerufen und dient primär der Speicherung
	*	der Nutzereingaben.
	*
	*/
	function putUser(userId, data){
		return $http.put(environment+'/api/user/' + userId, data)
			.then(putUserCompleted)
			.catch(putUserFailed);
		
		function putUserCompleted(response){
			return response.data;
		}

		function putUserFailed(error){
			console.error('Der userDatenservice konnte den gewünschten Änderung nicht durchführen:  ' + error.data.response);
		}
	}

	/**
	*
	*	Die folgende Funktion dient der Löschung eines Users. Sie kommt
	*	lediglich zur Löschung eines admin Eintrages zur Anwendung.
	*
	*/
	function deleteUser(userId){
		return $http.delete(environment+'/api/user/' + userId)
			.then(deleteUserCompleted)
			.catch(deleteUserFailed);
		
		function deleteUserCompleted(response){
			return response.data;
		}

		function deleteUserFailed(error){
			console.error('Der userDatenservice konnte den gewünschten Löschung nicht durchführen:  ' + error.data.response);
		}
	}
}
