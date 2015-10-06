angular
	.module('app.core')
	.factory('productDataservice', productDataservice);

productDataservice.$inject = ['$http', 'experimentDataservice'];

function productDataservice($http, experimentDataservice){
	
	var environment = experimentDataservice.getEnvironment();
	var randomOrder = [];

	return {
		getProducts: getProducts,
		postProduct: postProduct,
		putProduct: putProduct,
		setRandomOrder: setRandomOrder
	};

	function setRandomOrder(){
		for(var i = 0; i < 8; i++){
			randomOrder.push(Math.random());
		}
		console.log('RandomOrder:');
		console.log(randomOrder);
	}

	/**
	*
	*
	*
	*
	*
	*/	
	function getProducts(){
		return $http.get(environment+'/api/products')
			.then(getProductsCompleted)
			.catch(getProductsFailed);

		function getProductsCompleted(response){
			for(var i = 0; i < response.data.length; i++){
				console.log(response.data[i].randomValue = randomOrder[i]);
			}
			return response.data;
		}

		function getProductsFailed(error){
			console.error('Im productDataservice ist bei der Abfrage aller Produkte ein Fehler aufgetreten: ' + error.data.response);
		}
	}


//--------------------------------------- postWord function ---------------------------------------

	function postProduct(data){
		return $http.post(environment+'/api/products', data)
			.then(postProductCompleted)
			.catch(postProductFailed);

		function postProductCompleted(response){
			return response.data;
		}

		function postProductFailed(error){
			console.error('Im productDataservice trat im Post-Requst ein Fehler auf: ' + error.data.response);
		}
	}

	function putProduct(productId, data){
		return $http.put(environment+'/api/product/' + productId, data)
			.then(postProductCompleted)
			.catch(postProductFailed);

		function postProductCompleted(response){
			return response.data;
		}

		function postProductFailed(error){
			console.error('Im productDataservice trat im Update-Requst ein Fehler auf: ' + error.data.response);
		}
	}


}

