angular
	.module('app.core')
	.factory('experimentDataservice', experimentDataservice);

experimentDataservice.$inject = ['$http'];

// var environment = 'http://localhost:3000';
var environment = 'http://iwm-devsrv1.iwmnetwork.de:3000';

function experimentDataservice($http){
	return{
		getExperiments: getExperiments,
		getExperiment: getExperiment,
		postExperiment: postExperiment,
		putExperiment: putExperiment
	};

// -------------------------------------- GET ALL --------------------------------------

	function getExperiments(){
		return $http.get(environment+'/api/experiments')
			.then(getExperimentsCompleted)
			.catch(getExperimentsFailed);

		function getExperimentsCompleted(response){
			return response.data;
		}

		function getExperimentsFailed(error){
			console.error('XHR Failed for getExperiments: ' + error.data.response);
		}
	}


// -------------------------------------- GET ONE --------------------------------------

	function getExperiment(experimentId){
		return $http.get(environment+'/api/experiment/' + experimentId, experimentId)
			.then(getExperimentsCompleted)
			.catch(getExperimentFailed);

		function getExperimentsCompleted(response){
			console.log(response.data);
			return response.data;
		}

		function getExperimentFailed(error){
			console.error('XHR failed for getExperiment ' + error.data.response);
		}
	}
	

// -------------------------------------- POST --------------------------------------

	function postExperiment(data){
		return $http.post(environment+'/api/experiments', data)
			.then(postExperimentCompleted)
			.catch(postExperimentFailed);

		function postExperimentCompleted(response){
			return response.data;
		}

		function postExperimentFailed(error){
			console.error('XHR failed for postExperiment: ' + error.data.response);
		}
	}


// -------------------------------------- UPDATE --------------------------------------

	function putExperiment(experimentId, data){
		return $http.put(environment+'/api/experiment/' + experimentId, data)
			.then(putExperimentCompleted)
			.catch(putExperimentFailed);
		
		function putExperimentCompleted(response){
			console.log('Transmission of the put request to the server was successful.');
			console.log('PUT Request response: ' + data);
			return response.data;
		}

		function putExperimentFailed(error){
			console.error('XHR failed for postExperiment: ' + error.data.response);
		}
	}

}