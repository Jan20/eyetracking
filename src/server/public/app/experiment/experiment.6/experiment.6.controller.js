angular
    .module('app.experiment')
	.controller('Experiment6Controller', Experiment6Controller);

Experiment6Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice', 'productDataservice'];

function Experiment6Controller($scope, $location, experimentDataservice, userDataservice, productDataservice){

	/**
	*
	*	Die Variable $scope.userId behinhaltet die aktuelle userId. Sie dient zur Prüfung,	
	*	ob der momentane Nutzer die Kennung "admin" aufweist. Ist dies der Fall, so 
	*	gegen die ng-if Directives true zurück und erlauben Änderungen am View und die 
	*	hinterliegende Datenhaltung vorzunehmen.
	*
	*/
	$scope.userId = getCurrentUser();
	console.log($scope.userId);
	// $scope.userId = 'admin';

	/**
	*
	*	Methoden, die sich über den Scope aufrufen lassen sollen. Hierbei handelt es sich 
	*	um Funktionen, die zur Auswahl und zum Ändern der dargestellten Produkten benötigt werden.
	*
	*/
	$scope.updateProduct = updateProduct;
	$scope.selectProduct = selectProduct;
	$scope.updateExperiment = updateExperiment;
	$scope.setChoosedIn6 = setChoosedIn6;
	$scope.submitToView7 = submitToView7;

	/**************************** Mainfunction **************************************/

	$scope.choosedIn6 = [];
    
	function setChoosedIn6(productId){
		for(var i = 0; i < $scope.products.length; i++){
			if($scope.products[i].productId == productId){
				if($scope.products[i].choosedIn6 === false){
					if($scope.choosedIn6.length > 0){
						for(var k = 0; k < $scope.products.length; k++){
							if($scope.choosedIn6[0] == $scope.products[k].name){
								$scope.choosedIn6.splice(0,1);
								$scope.products[k].choosedIn6 = false;
							}
						}
					}
					$scope.choosedIn6.push($scope.products[i].name);
					$scope.products[i].choosedIn6 = true;
				}else{
					for(var j = 0; j < $scope.choosedIn6.length; j++){
						console.log($scope.products[i].name);
						if($scope.choosedIn6[j] == $scope.products[i].name){
							$scope.choosedIn6.splice(j,1);
							$scope.products[i].choosedIn6 = false;
						}
					}
				}
			}
		}
	}

	function submitToView7(){
		updateUser($scope.userId);
		$location.path('/7');
	}

	/**************************** User-Bereicht **************************************/
	
	/**
	*
	*	Die getCurrentUser Funktion stellt eine Helper-Function dar, mit der es möglich ist
	*	den aktuellen Nutzer abzurufen. Hierzu wrid der userDatenservice genutzt, der direkt
	*	nach der Initialisierung eines neuen Nutzers, diesen als aktuellen Nutzer festlegt,
	*	was im Regelfall geschieht, nachdem der Experiment-Teilnehmer seine Teilnehmer-Id
	*	im View0 eingegeben hat.
	*
	*/
	function getCurrentUser(){
		return userDataservice.getCurrentUser();
	}
    
	/**
	*
	*	Die folgende Funktion dient datz, einen bestimmten User abzurufen. Dieser wird 
	*	anhand seiner userId eindeutig identifiziert.
	*	@userId: eindeutige Identifikationsnummer korrespondierend zur Eingabe des 
	*	Nutzers im View 0.
	*
	*/
	function getUser(userId){
		return userDataservice.getUser(userId)
			.then(function(data){
				console.log('User data: ');
				console.log(data);
				$scope.visitedIn2 = data.visitedIn2;
				$scope.choosedIn3 = data.choosedIn3;
				$scope.visitedIn5 = data.visitedIn5;
			});
	}
	getUser($scope.userId);

	console.log('$scope.userId: ' + $scope.userId);
	console.log('$scope.visitedIn2: ' + $scope.visitedIn2);
	console.log('$scope.choosedIn3: ' + $scope.choosedIn3);
	console.log('$scope.visitedIn5: ' + $scope.visitedIn5);

	/**
	*
	*	Der User-Konstruktor stellt den Standard zur Konstruktion eines User-Objekts bereit.
	*	Der Konstruktor kommt innerhalb der updateUser Funktion zur Anwendung.
	*
	*/
	function User(userId, visitedIn2, choosedIn3, visitedIn5, choosedIn6){
        this.userId = userId;
        this.visitedIn2 = visitedIn2;
        this.choosedIn3 = choosedIn3;
        this.visitedIn5 = visitedIn5;
        this.choosedIn6 = choosedIn6;
    }   

    /**
    *
    *   Die updateUser Funktion beschreibt eine Funktion, mit der es Möglich ist,
    *	einen bestehenden Nutzer das Array visitedIn2 hinzuzufügen. Dieses speichert alle
    *	angeklickten Produkte.
    *
    *   @param userId Die Variable bezieht sich auf den Wert, der 
    *   in das Textfeld unterhalb der Beschreibung im View0 
    *   eingetragen wird.
    *
    */
    function updateUser(userId) {
        var user = new User(userId, $scope.visitedIn2, $scope.choosedIn3, $scope.visitedIn5, $scope.choosedIn6);
        return userDataservice.putUser(userId, user)
            .then(function(user){
                console.log('User ' + user.userId + ' wurde erfolgreich geupdated.');
            });
    }
    

	/**************************** Produkt-Bereicht **************************************/

	/**
	*
	*	Die folgende Funktion besitzt lediglich den Zweck alle Produkte, die in der MongoDB Datenbank
	*	gespeichert sind, abzurufen. Hierzu wird auf den productDataservice zurückgegriffen, über den 
	*	alle Anfragen der clientseitigen Applikation an den Server gekapselt werden. Der Datenservice
	*	ist Bestandteil des Core Moduls und sollte soweit möglich nicht geändert werden.
	*	Zusätzlich wird ein neues Attribut choosed6 den Produktobjekten hinzugefügt, das zur Markierung
	*	des derzeit aktiven Produkts benötigt wird.
	*
	*/
	function getProducts(){
		return productDataservice.getProducts()
			.then(function(data){
				console.log('getCurrentUser: ' + getCurrentUser());
				var user = getUser(getCurrentUser());
				console.log('choosedIn3:');
				console.log($scope.choosedIn3);
				
				$scope.products = [];
				for(var i = 0; i < data.length; i++){
					console.log('Abfrage: ' + $scope.choosedIn3.indexOf(data[i].name));
					if($scope.choosedIn3.indexOf(data[i].name) != -1){
						$scope.products.push(data[i]);
						console.log('$scope.products');
						console.log($scope.products);
					}
				}

				for(var j = 0; j < $scope.products.length; j++){
					$scope.products[j].choosedIn6 = false;						
					console.log('$scope.products final:');
					console.log($scope.products);
				}
			});
	}
	getProducts();

	function selectProduct(productId){
		$scope.currentProductId = $scope.products[productId].productId;
		$scope.currentName = $scope.products[productId].name;
		$scope.currentImage = $scope.products[productId].image;
		$scope.currentUrl = $scope.products[productId].url;
		$scope.currentActionUrl = 'http://iwm-devsrv1.iwmnetwork.de:3000/api/product/'+$scope.products[productId].productId;
	}

	function Product(productId, name, image, url){
		this.productId = productId;
		this.name = name;
		this.image = image;
		this.url = url;
	}
	
	/**
	*
	*	Die folgende Funktion implementiert das Update-Verhalten eines Produktes. 
	*	 
	*/
	function updateProduct(productId){
		product = new Product(productId, $scope.currentName, $scope.currentImage, $scope.currentUrl);
		return productDataservice.putProduct(productId, product)
			.then(function(data){
				getProducts();
				console.log('Product wurde erfolgreich geupdated.');
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
                $scope.buttonInactive = data.buttonInactive;

                $( "#description" ).append($.parseHTML(data.description));
                $( "#buttonActive" ).append($.parseHTML(data.buttonActive));
                $( "#buttonInactive" ).append($.parseHTML(data.buttonInactive));
            });
    }
    getExperiment(6);

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
                console.log('Änderungen sind erfolgreich durchgeführt worden:');
            	$( "#description" ).empty();
                $( "#buttonActive" ).empty();
                $( "#buttonInactive" ).empty();
                getExperiment(3);
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
            6, 
            'Bitte schließen Sie zunächst die einzelnen Tabs der Produktseiten von amazon.de und kehren Sie zu dieser Übersicht zurück. Welche dieser Kompaktdigitalkameras würden Sie in Ihre engere Auswahl nehmen? Bitte markieren Sie die ausgewählten Kompaktdigitalkameras, indem Sie auf die jeweiligen Produkte klicken.',
            'Alle amazon.de Tabs geschlossen? Dann klicken Sie hier um fortzufahren.', 
            'Bitte beziehen Sie mindestens ein Produkt in die engere Auswahl.');
        
        return experimentDataservice.postExperiment(experiment)
            .then(function(data){
                console.log('Neuer Experimentabschnitt erfolgreich erstellt.');
            });
    }
    // createExperiment();
    
    /**************************** Editor Optionen **************************************/

    /**
    *
    *   Die folgende Variable definiert den Funktionsumfang des TinyMCE Editors, der als 
    *   Standardeditor zur Manipulation der Views eingesetzt wird.
    *
    */    
    $scope.tinymceOptions = {
        onChange: function(e) {
        // put logic here for keypress and cut/paste changes
        },
        inline: false,
        plugins : 'advlist autolink link image lists charmap print preview',
        skin: 'lightgray',
        theme : 'modern',
        fontsize_formats: 40,
        statusbar: false,
        toolbar: "undo redo | bold italic underline | link jbimages | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent  |formatselect",
        relative_urls: false,
        menubar: false,
        forced_root_block : "",
        force_br_newlines : true,
        force_p_newlines : false,
    };
}