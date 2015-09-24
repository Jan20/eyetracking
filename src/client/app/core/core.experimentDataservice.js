angular
	.module('app.core')
	.factory('experimentDataservice', experimentDataservice);

experimentDataservice.$inject = ['$http'];

function experimentDataservice($http){
	return{
		getExperiments: getExperiments,
		getExperiment: getExperiment,
		postExperiment: postExperiment,
		putExperiment: putExperiment
	};

// -------------------------------------- GET ALL --------------------------------------

	function getExperiments(){
		return $http.get('http://localhost:3000/api/experiments')
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

	function getExperiment(){
		return $http.get('http://localhost:3000/api/experiment')
			.then(getExperimentsCompleted)
			.catch(getExperimentFailed);

		function getExperimentsCompleted(response){
			console.log(response.data);
			return response.data;
		}

		function getExperimentFailed(response){
			console.error('XHR failed for getExperiment ' + error.data.response);
		}
	}
	

// -------------------------------------- POST --------------------------------------

	function postExperiment(data){
		return $http.post('http://localhost:3000/api/experiment', data)
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

	function putExperiment(data){
		return $http.put('http://localhost:3000/api/experiment', data)
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