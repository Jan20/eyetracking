angular
    .module('app.experiment')
	.controller('Experiment7Controller', Experiment7Controller);

Experiment7Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice'];

function Experiment7Controller($scope, $location, experimentDataservice, userDataservice){


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
	$scope.updateExperiment = updateExperiment;

	/**************************** Mainfunction **************************************/



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
	getUser($scope.userId);




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
          
                $( "#description" ).append($.parseHTML($scope.description));
                $( "#buttonInactive" ).append($.parseHTML($scope.buttonInactive));            
                $( "#buttonActive" ).append($.parseHTML($scope.buttonActive));           


            });
    }
    getExperiment(7);

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
                getExperiment(7);
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
            7, 
            'Vielen Dank für Ihre Wahl. Abschließend würden wir Sie bitten, noch einige Fragen zu beantworten. Bitte schließen Sie dazu dieses Browserfenster.', 
            '', 
            '');
        
        return experimentDataservice.postExperiment(experiment)
            .then(function(data){
                console.log('Neuer Experimentabschnitt erfolgreich erstellt.');
            });
    }
    // createExperiment();
}