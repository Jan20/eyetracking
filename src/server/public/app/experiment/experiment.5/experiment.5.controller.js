angular
    .module('app.experiment')
	.controller('Experiment5Controller', Experiment5Controller);

Experiment5Controller.$inject = ['$scope', '$location', '$timeout', 'experimentDataservice', 'userDataservice', 'productDataservice'];

function Experiment5Controller($scope, $location, $timeout, experimentDataservice, userDataservice, productDataservice){

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
	*	Im folgenden werden Methoden im Rahmen des Scopes freigegeben. Diese Funktionen
	*	werden ausschließich über den Scope aufgerufen und sind zum Einen im Falle der 
	*	selectProduct, updateProduct und updateExperiment für Änderungen im View und der 
	*	dahinterliegenden Datenbasis verantwortlich und dienen zum Anderen im Falle der 
	*	setVisitedIn5 und der submitToView3 Funktion der korrekten Funktionsweise des
	*	Experiments.
	*
	*/
	$scope.selectProduct = selectProduct;
	$scope.updateProduct = updateProduct;
	$scope.updateExperiment = updateExperiment;
	$scope.setVisitedIn5 = setVisitedIn5;
	$scope.submitToView6 = submitToView6;
	

	/**************************** Mainfunction **************************************/

	/**
	*
	*	Das folgende Array dient zur Speicherung aller Produkte, die der Nutzer 
	*	aufgerufen hat. Das Array wird im Weiteren als Input für die UpdateUser 
	*	Funktion verwendet.
	*
	*/
	var visitedIn5 = [];

	/**
	*
	*	Die Funktion setVisitedIn5 dient zur Registrierung, ob ein Nutzer  
	*	einen Produkt-Link angeklickt hat oder nicht. Ist dies der Fall, so wird
	*	der Klick registriert und im visitedIn5 Array gespeichert, das schließlich
	*	in der updateUser Funktion dem aktuellen Nutzer zugewiesen wird.
	*
	*/
    function setVisitedIn5(productId) {
	console.log($scope.products);
	console.log(productId);
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].productId == productId) {
                visitedIn5.push($scope.products[i].name);
            }
        }
        console.log('VisitedIn5:' + visitedIn5);
    }

    /**
    *
    *	Die submitToView6 Funktion stellt die letzte Funktion dar, die erst dann zur 
    *	Anwendung kommt, wenn der Nutzer sich die Angebote angesehen hat und bereit ist
    *	eine erste Entscheidung zu treffen. Die primäre Aufgabe der Funktion besteht in 
    *	dem Aufruf der updateUser-Funktion, mit der es Möglich ist, dem aktuellen Nutzer
    *	das Array visitedIn5 hinzuzufügen, um die Information über die besuchten Produktseiten
    *	zu speichern.
    *
    */
    function submitToView6(){
    	console.log('Finales visitedIn5 Array: ' + visitedIn5);
    	updateUser($scope.userId);
    	$timeout(direct, 300);
    	function direct(){
   			$location.path('/6');
    	}
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
				$scope.visitedIn2 = data.visitedIn2;
				$scope.choosedIn3 = data.choosedIn3;
				console.log('User data:');
				console.log($scope.visitedIn2);
				console.log($scope.choosedIn3);
			});
	}
	getUser($scope.userId);
	console.log('getUser:');
	console.log(getUser($scope.userId));
	
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
    *	einen bestehenden Nutzer das Array visitedIn5 hinzuzufügen. Dieses speichert alle
    *	angeklickten Produkte.
    *
    *   @param userId Die Variable bezieht sich auf den Wert, der 
    *   in das Textfeld unterhalb der Beschreibung im View0 
    *   eingetragen wird.
    *
    */
    function updateUser(userId) {
        var user = new User(userId, $scope.visitedIn2, $scope.choosedIn3, visitedIn5, null);
        return userDataservice.putUser(userId, user)
            .then(function(user){
                console.log('User ' + user.userId + 'wurde erfolgreich geupdated.');
            });
    }




	/**************************** Produkt-Bereich **************************************/

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

				console.log('getCurrentUser: ' + getCurrentUser());
				var user = getUser(getCurrentUser());
				console.log('choosedIn3:');
				console.log($scope.choosedIn3);
				
				$scope.products = [];
				for(var i = 0; i < data.length; i++){
					console.log('Abfrage: ' + $scope.choosedIn3.indexOf(data[i].name));
					if($scope.choosedIn3.indexOf(data[i].name) != -1){
						$scope.products.push(data[i]);
					}
				}

			});
	}

	/**
	*
	*	Es ist darauf zu achten, dass die getProducts Funktion bereits während der Initialisierung des
	*	Controllers ausgeführt wird, sodass sich alle Produkte nahezu verzögerungsfrei anzeigen lassen.
	*
	*/
	getProducts();

	/**
	*
	*	Die selectProduct bildet die Basis für Änderungen an dem Experiment-View. Mit ihr ist es möglich,
	*	durch einen Klick auf das Icon oberhalb eines Produktbildes innerhalb des Admin-Modus das entsprechende
	*	Produkt als aktive zu kennzeichnen. Somit wird es möglich, Änderungen an dem ausgewählten Produkt 
	*	über einen Modal-Dialog durchzuführen.
	*
	*/
	function selectProduct(productId){
		$scope.currentProductId = $scope.products[productId].productId;
		$scope.currentName = $scope.products[productId].name;
		$scope.currentImage = $scope.products[productId].image;
		$scope.currentUrl = $scope.products[productId].url;
		$scope.currentActionUrl = 'http://iwm-devsrv1.iwmnetwork.de:3000/api/product/'+$scope.products[productId].productId;
	}

	/**
	*
	*	Der Produkt Konstruktur dient als Blaupause eines Produkt-Objekts. Er kommt bei dem Aufruf der
	*	updateProduct Funktion zur Anwendung.
	*
	*/
	function Product(productId, name, image, url){
		this.productId = productId;
		this.name = name;
		this.image = image;
		this.url = url;
	}

	/**
	*
	*	Die folgende Funktion implementiert das Update-Verhalten eines Produktes. Hierbei greift sie
	*	auf den productDataservice zu und überschreibt ein bestehendes Produkt mit den  
	*	Einträgen des aktiven Modalviews. Die Funktion wird bei dem Klick auf "save changes" aktiviert.
	*	 
	*/
	function updateProduct(productId){
		product = new Product(productId, $scope.currentName, $scope.currentImage, $scope.currentUrl);
		return productDataservice.putProduct(productId, product)
			.then(function(data){
				getProducts();
				console.log('Product wurde erfolgreich geändert.');
			});
	}

	/**************************** Experiment-Bereich **************************************/

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

            });
    }
    getExperiment(5);

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
                getExperiment(5);
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
            5, 
            'Im Folgenden sehen Sie Ihre engere Auswahl der Kompaktdigitalkameras. Wir würden Sie gleich bitten eine Entscheidung zu treffen, welche Sie am ehesten kaufen würden. Wenn Sie auf die Bilder der jeweiligen Kompaktdigitalkameras klicken, gelangen Sie erneut auf die Produktseiten auf amazon.de.',
            'Entscheidung treffen', 
            '');
        
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