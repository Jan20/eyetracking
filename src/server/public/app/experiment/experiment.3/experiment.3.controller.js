angular
    .module('app.experiment')
	.controller('Experiment3Controller', Experiment3Controller);

Experiment3Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice', 'productDataservice'];

function Experiment3Controller($scope, $location, experimentDataservice, userDataservice, productDataservice){
    
    var environment = experimentDataservice.getEnvironment();

	/**
	*
	*	Die Variable $scope.userId behinhaltet die aktuelle userId. Sie dient zur Prüfung,	
	*	ob der momentane Nutzer die Kennung "admin" aufweist. Ist dies der Fall, so 
	*	gegen die ng-if Directives true zurück und erlauben Änderungen am View und die 
	*	hinterliegende Datenhaltung vorzunehmen.
	*
	*/
	$scope.userId = getCurrentUser();
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
	$scope.setChoosedIn3 = setChoosedIn3;
	$scope.submitToView4 = submitToView4;

	/**************************** Main Functions **************************************/

	$scope.choosedIn3 = [];
    
	function setChoosedIn3(productId){
		for(var i = 0; i < $scope.products.length; i++){
			if($scope.products[i].productId == productId){
				if($scope.products[i].choosedIn3 === false){
					$scope.choosedIn3.push($scope.products[i].name);
					$scope.products[i].choosedIn3 = true;
				}else{
					for(var j = 0; j < $scope.choosedIn3.length; j++){
						console.log($scope.products[i].name);
						if($scope.choosedIn3[j] == $scope.products[i].name){
							$scope.choosedIn3.splice(j,1);
							$scope.products[i].choosedIn3 = false;
						}
					}
				}
			}
		}
	}

	function submitToView4(){
		updateUser($scope.userId);
		$location.path('/4');
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
	*
	*
	*
	*
	*/
	function getUser(userId){
		return userDataservice.getUser(userId)
			.then(function(data){
				console.log('User data: ');
				console.log(data);
				$scope.visitedIn2 = data.visitedIn2;
				console.log('currentUser:');
				console.log($scope.visitedIn2);
			});
	}
	console.log('$scope.userId: ' + $scope.userId);
	console.log('$scope.visitedIn2: ' + $scope.visitedIn2);
	getUser($scope.userId);



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
        var user = new User(userId, $scope.visitedIn2, $scope.choosedIn3, null, null);
        console.log('User at View 3:');
        console.log(user);
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
	*
	*/
	function getProducts(){
		return productDataservice.getProducts()
			.then(function(data){
				$scope.products = data;
				for(var i=0; i < $scope.products.length; i++){
					$scope.products[i].choosedIn3 = false;
				}
			});
	}
	getProducts();

	function selectProduct(productId){
		$scope.currentProductId = $scope.products[productId].productId;
		$scope.currentName = $scope.products[productId].name;
		$scope.currentImage = $scope.products[productId].image;
		$scope.currentUrl = $scope.products[productId].url;
		$scope.currentActionUrl = environment+$scope.products[productId].productId;
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
    getExperiment(3);

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
            3, 
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