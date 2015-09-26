angular
	.module('app.core')
	.factory('userDataservice', userDataservice);

userDataservice.$inject = ['$http'];

function userDataservice($http){

	var currentUser = 'asdf';

	return {
		getUsers: getUsers,
		getUser: getUser,
		postUser: postUser,
		putUser: putUser,
		getCurrentUser: getCurrentUser
	};


	function getCurrentUser(){
		return currentUser;
	}

	/**
	*
	*
	*
	*
	*
	*
	*/	
	function getUsers(){
		return $http.get('http://localhost:3000/api/users')
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
	*
	*
	*
	*
	*
	*/
	function getUser(userId){
		return $http.get('http://localhost:3000/api/user/' + userId, userId)
			.then(getUserCompleted)
			.catch(getUserFailed);

		function getUserCompleted(response){
			console.log('User response.data:');
			console.log(response.data);
			return response.data;
		}

		function getUserFailed(response){
			console.error('Der userDatenservice konnte den gewünschten Nutzer nicht abrufen: ' + error.data.response);
		}
	}

	/**
	*
	*
	*
	*
	*
	*/
	function postUser(data){
		return $http.post('http://localhost:3000/api/users', data)
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
	*		
	*
	*
	*
	*/
	function putUser(userId, data){
		return $http.put('http://localhost:3000/api/user/' + userId, data)
			.then(putUserCompleted)
			.catch(putUserFailed);
		
		function putUserCompleted(response){
			return response.data;
		}

		function putUserFailed(error){
			console.error('Der userDatenservice konnte den gewünschten Änderung nicht durchführen:  ' + error.data.response);
		}
	}

}
