angular
    .module('app.experiment')
	.controller('Experiment2Controller', Experiment2Controller);

Experiment2Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice', 'productDataservice'];

function Experiment2Controller($scope, $location, experimentDataservice, userDataservice, productDataservice){

	/**
	*
	*	Die folgende Funktion wird bereits bei der Initialisierung des Controllers aufgerufen.
	*
	*/
	getProducts();

	/**
	*
	*	Die folgenden Variablen sollen im Scope zur Verfügung stehen und werden während der Anwendung
	*	überschrieben.
	*
	*/
	$scope.userNumber = 'admin';
	
	$scope.products = [];
	$scope.productId = '';
	$scope.name = '';
	$scope.image = '';
	$scope.url = '';

	/**
	*
	*	Methoden, die sich über den Scope aufrufen lassen sollen. Hierbei handelt es sich 
	*	um Funktionen, die zur Auswahl und zum Ändern der dargestellten Produkten benötigt werden.
	*
	*/
	$scope.updateProduct = updateProduct;
	$scope.selectProduct = selectProduct;
	$scope.postProduct = postProduct;

	/**
	*
	*	Die folgende Funktion besitzt lediglich den Zweck alle Produkte, die in der MongoDB Datenbank
	*	gespeichert sind, abzurufen. Hierzu wird auf den productDataservice zurückgegriffen, über den 
	*	alle Anfragen der clientseitigen Applikation an den Server gekapselt werden. Der Datenservice
	*	ist Bestandteil des Core Moduls und sollte soweit möglich nicht geändert werden.
	*
	*/
	function getProducts(){
		return productDataservice.getProducts()
			.then(function(data){
				$scope.products = data;
			});
	}


	function selectProduct(productId){
		$scope.currentProductId = $scope.products[productId].productId;
		$scope.currentName = $scope.products[productId].name;
		$scope.currentImage = $scope.products[productId].image;
		$scope.currentUrl = $scope.products[productId].url;
		console.log($scope.currentProductId);
	}

	function Product(productId, name, image, url){
		this.productId = productId;
		this.name = name;
		this.image = image;
		this.url = url;
	}

	/**
	*
	*	Die folgende Funktion implementiert das Update-Verhalten der dargestellten Produkte, wenn sich
	*	beispielsweise der Name des betreffenden Produkts oder aber das Bild ändern sollte.
	*	Zunächst 
	*/
	function updateProduct(){
		product = new Product($scope.currentProductId, $scope.currentName, $scope.currentImage, $scope.currentUrl);
		return productDataservice.updateProduct(product)
			.then(function(data){
				getProducts();
				console.log('Product wurde erfolgreich geupdated.');
			});
	}

	function postProduct(){
		// product = new Product($scope.);
	}

}