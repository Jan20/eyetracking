angular
	.module('app.experiment')
	.controller('Experiment1Controller', Experiment1Controller);

Experiment1Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'productDataservice'];

function Experiment1Controller($scope, $location, experimentDataservice, productDataservice){
	$scope.switchToView2 = switchToView2;
    $scope.userNumber = 'admin';
    
    /**
    *
    *   Methoden, die sich über den Scope aufrufen lassen sollen. Hierbei handelt es sich 
    *   um Funktionen, die zur Auswahl und zum Ändern der dargestellten Produkten benötigt werden.
    *
    */
    $scope.updateExperiment = updateExperiment;

    function switchToView2() {
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





    /**************************** Experiment-Bereicht **************************************/

    /**
    *
    *   Die folgende Funktion ruft über den experimentDatenservice den Experiment-Abschnitt
    *   korrespondierend zu der experimentId ab.
    *   @param experimentId Id des Abschnitts zur eindeutigen Identifikation
    *
    */
    function getExperiment(experimentId){
        return experimentDataservice.getExperiment(experimentId)
            .then(function(data){
                $scope.experimentId = data.experimentId;
                $scope.description = data.description;
                $scope.buttonActive = data.buttonActive;
          
                $( "#description" ).append($.parseHTML($scope.description));
                $( "#buttonActive" ).append($.parseHTML($scope.buttonActive));           


            });
    }
    getExperiment(1);

    /**
    *
    *   Der folgende Prototype stellt den Standardweg zur Erzeugung eines neuen 
    *   Experimentabschnitts dar. Innerhalb einer Create oder Update Funktion
    *   wird eine Instanz dieses Objekts erzeugt, um ein Experimentabschnitt
    *   über den experimentDatenservice an den Node Server zu übertragen.
    *   @param experimentId Id des Abschnitts zur eindeutigen Identifikation
    *   @param description Bezieht sich auf den Text der am oberen Ende einer Seite steht
    *   @param buttonActive Bezieht sich auf den Text eines klickbaren Buttons
    *   @param buttonInactive Bezieht sich auf den Text eines nicht klickbaren Buttons
    *
    */
    function Experiment(experimentId, description, buttonActive, buttonInactive){
        this.experimentId = experimentId;
        this.description = description;
        this.buttonActive = buttonActive;
        this.buttonInactive = buttonInactive;
    }

    /**
    *
    *   Die folgende Funktion implementiert die Update-Funktionalität, über die
    *   Änderungen an der Datenbasis des Abschnitts vorgenommen werden können.
    *   Sie wird über den Scope aufgerufen und erwartet einen Parameter, sowie
    *   zur Konstruktion eines modifizierten Experimentobjekts verschiedene Variablen,
    *   die übe den Scope zur Verfügung stehen.
    *   @param experimentId Id des Experiment-Abschnitts zur eindeutigen Identifikation   
    *
    */
    function updateExperiment(experimentId){
        var experiment = new Experiment($scope.experimentId, $scope.description, $scope.buttonActive, $scope.buttonInactive);
        return experimentDataservice.putExperiment(experimentId, experiment)
            .then(function(data){
                $( "#description" ).empty();
                $( "#buttonActive" ).empty();                
                $( "#buttonInactive" ).empty();                
                getExperiment(1);
                console.log('Änderungen sind erfolgreich durchgeführt worden:');        
            });       
    }

    /**
    *
    *   Die folgende Funktion dient zur erstmaligen Konstruktion der Datenbasis, die hinter
    *   diesem Experiment-Abschnitt stehen soll. Sie wird lediglich eimalig aufgerufen und 
    *   steht lediglich zur Sicherheit weiterhin im Controller bereit.
    *
    */
    function createExperiment(){
        var experiment = new Experiment(
            1, 
            'Erinnern Sie sich bitte nochmals an folgende Situation: Sie haben vor, sich auf amazon.de eine Kompaktdigitalkamera zu kaufen Ihnen steht eine Auswahl von 8 Kompaktdigitalkameras zur Verfügung. Die Kompaktdigitalkameras kosten zwischen 100€ und 200€.', 
            'Klicken Sie hier um das Experiment zu starten', 
            '');
        
        return experimentDataservice.postExperiment(experiment)
            .then(function(data){
                console.log('Neuer Experimentabschnitt erfolgreich erstellt.');
            });
    }
}