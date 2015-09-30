angular
	.module('app.core')
	.factory('questionDataservice', questionDataservice);

questionDataservice.$inject = ['$http'];

var environment = 'http://localhost:3000';

function questionDataservice($http){

	return {
		getQuestions: getQuestions,
		postQuestion: postQuestion,
		putQuestion: putQuestion
	};

	/**
	*
	*
	*
	*
	*
	*/	
	function getQuestions(){
		return $http.get(environment+'/api/questions')
			.then(getQuestionsCompleted)
			.catch(getQuestionsFailed);

		function getQuestionsCompleted(response){
			return response.data;
		}

		function getQuestionsFailed(error){
			console.error('Im questionDataservice ist bei der Abfrage aller Fragen ein Fehler aufgetreten: ' + error.data.response);
		}
	}


//--------------------------------------- postWord function ---------------------------------------

	function postQuestion(data){
		return $http.post(environment+'/api/questions', data)
			.then(postQuestionCompleted)
			.catch(postQuestionFailed);

		function postQuestionCompleted(response){
			return response.data;
		}

		function postQuestionFailed(error){
			console.error('Im questionDataservice trat im Post-Requst ein Fehler auf: ' + error.data.response);
		}
	}

	function putQuestion(questionId, data){
		return $http.put(environment+'/api/question/' + questionId, data)
			.then(postQuestionCompleted)
			.catch(postQuestionFailed);

		function postQuestionCompleted(response){
			return response.data;
		}

		function postQuestionFailed(error){
			console.error('Im questionDataservice trat im Update-Requst ein Fehler auf: ' + error.data.response);
		}
	}


}

