angular
	.module('app.core')
	.factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http){
	return{
		getExperiments: getExperiments,
		postExperiment: postExperiment,
		putExperiment: putExperiment
	};

	function getExperiments(){
		return $http.get('http:/localhost:3000/api/experiments')
			.then(getExperimentsComplete)
			.catch(getExperimentsFailed);

		function getExperimentsComplete(response){
			return response.data;
		}

		function getExperimentsFailed(error){
			console.error('XHR Failed for getExperiments: ' + error.data.response);
		}
	}

	function postExperiment(data){
		return $http.post('http:/localhost:3000/api/experiment', data)
			.then(postExperimentComplete)
			.catch(postExperimentFailed);

		function postExperimentComplete(response){
			return response.data;
		}

		function postExperimentFailed(error){
			console.error('XHR failed for postExperiment: ' + error.data.response);
		}
	}

	function putExperiment(data){
		return $http.put('http:/localhost:3000/api/experiment', data)
			.then(putExperimentComplete)
			.catch(putExperimentFailed);
		
		function putExperimentComplete(response){
			console.log('Transmission of the put request to the server was successful.');
			console.log(data);
			return response.data;
		}

		function putExperimentFailed(error){
			console.error('XHR failed for putExperiment: ' + error.data.response);
		}
	}

}