angular
	.module('app.core')
	.factory('quizDataservice', quizDataservice);

quizDataservice.$inject = ['$http'];

// var environment = 'http://localhost:3000';
var environment = 'http://iwm-devsrv1.iwmnetwork.de:3000';

function quizDataservice($http){

	return {
		getQuiz: getQuiz,
		postQuiz: postQuiz,
		putQuiz: putQuiz
	};

	/**
	*
	*
	*
	*
	*
	*/	
	function getQuiz(quizId){
		return $http.get(environment+'/api/quiz/'+quizId)
			.then(getQuizCompleted)
			.catch(getQuizFailed);

		function getQuizCompleted(response){
			return response.data;
		}

		function getQuizFailed(error){
			console.error('Im quizDataservice ist bei der Abfrage eines Quizzes ein Fehler aufgetreten: ' + error.data.response);
		}
	}


//--------------------------------------- postWord function ---------------------------------------

	function postQuiz(data){
		return $http.post(environment+'/api/quizzes', data)
			.then(postQuizCompleted)
			.catch(postQuizFailed);

		function postQuizCompleted(response){
			return response.data;
		}

		function postQuizFailed(error){
			console.error('Im quizDataservice trat im Post-Requst ein Fehler auf: ' + error.data.response);
		}
	}

	function putQuiz(quizId, data){
		return $http.put(environment+'/api/quiz/'+quizId, data)
			.then(postQuizCompleted)
			.catch(postQuizFailed);

		function postQuizCompleted(response){
			return response.data;
		}

		function postQuizFailed(error){
			console.error('Im quizDataservice trat im Update-Requst ein Fehler auf: ' + error.data.response);
		}
	}


}

