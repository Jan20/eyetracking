angular
	.module('app.experiment')
	.controller('Experiment1Controller', Experiment1Controller);

Experiment1Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'productDataservice'];

function Experiment1Controller($scope, $location, experimentDataservice, productDataservice){
	$scope.setRandomOrder = setRandomOrder;

    function setRandomOrder() {

        // for (var i = $scope.products.length - 1; i >= 0; i--) {
        //     $scope.products[i].randomValue = Math.random();
        // }
        $location.path('/2');
    }

    function Product(productId, name, image, url){
    	this.productId = productId;
    	this.name = name;
    	this.image = image;
    	this.url = url;
    }

    function postProduct(){
    	var product = new Product(1, 'Canon IXUS 170', 'images/products/Canon_IXUS_170.jpg', 'http://www.amazon.de/Canon-Digitalkamera-Megapixel-Bildstabilisator-LCD-Display/dp/B00RYV9R20/ref=sr_1_1?&s=photo&ie=UTF8&qid=1436878022&sr=1-1&keywords=digitalkamera');

    	return productDataservice.postProduct(product)
    		.then(function(data){
    			console.log('Neues Produkt erfolgreich angelegt: ' + product.name);
    		});
    }

 	// postProduct();

}