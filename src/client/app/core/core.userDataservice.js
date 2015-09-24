angular
	.module('app.core')
	.factory('userDataservice', userDataservice);

userDataservice.$inject = ['$http'];

function userDataservice($http){

	return {
		getUsers: getUsers,
		postUser: postUser
	};

//--------------------------------------- getWords function ---------------------------------------
	
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


//--------------------------------------- postWord function ---------------------------------------

	function postUser(data){
		return $http.post('http://localhost:3000/api/user', data)
			.then(postUserCompleted)
			.catch(postUserFailed);

		function postUserCompleted(response){
			return response.data;
		}

		function postUserFailed(error){
			console.error('Im userDataservice trat im Postrequst ein Fehler auf: ' + error.data.response);
		}
	}

}
// (function () {
//     'use strict';

//     angular
//         .module('app.core')
//         .factory('dataservice', dataservice);

//     dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
//     /* @ngInject */
//     function dataservice($http, $q, exception, logger) {
//         var service = {
//             getPeople: getPeople,
//             getMessageCount: getMessageCount
//         };

//         return service;

//         function getMessageCount() { return $q.when(72); }

//         function getPeople() {
//             return $http.get('/api/people')
//                 .then(success)
//                 .catch(fail);

//             function success(response) {
//                 return response.data;
//             }

//             function fail(e) {
//                 return exception.catcher('XHR Failed for getPeople')(e);
//             }
//         }
//     }
// })();
