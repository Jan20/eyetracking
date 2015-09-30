angular
	.module('app.core')
	.factory('productDataservice', productDataservice);

productDataservice.$inject = ['$http'];

var environment = 'http://localhost:3000';

function productDataservice($http){

	return {
		getProducts: getProducts,
		postProduct: postProduct,
		putProduct: putProduct
	};

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
