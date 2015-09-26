angular
    .module('app.experiment')
	.controller('Experiment0Controller', Experiment0Controller);

Experiment0Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice'];

function Experiment0Controller($scope, $location, experimentDataservice, userDataservice){


    $scope.userId = 'admin';       

    /**
    *
    *   Im Folgenden werden alle Methoden gelistet, die im Scope zur 
    *   Verfügung stehen werden.
    *
    */
    $scope.createUser = createUser;
    $scope.updateExperiment = updateExperiment;    

    function User(userId, visitedIn2, choosedIn3, visitedIn5, choosedIn6){
        this.userId = userId;
        this.visitedIn2 = visitedIn2;
        this.choosedIn3 = choosedIn3;
        this.visitedIn5 = visitedIn5;
        this.choosedIn6 = choosedIn6;
    }   

    /**
    *
    *   Definition der saveUserNumber Methode: 
    *   @param userNumber Die Variable bezieht sich auf den Wert, der 
    *   in das Textfeld unterhalb der Beschreibung auf der Übersichtsseite 
    *   eingetragen wird.
    *
    */
    function createUser() {
        $location.path('/1');
        var user = new User($scope.userId, null, null, null, null);
        return userDataservice.postUser(user)
            .then(function(user){
                console.log('Neuer User erfogreich hinzugefügt: ' + user.userId);
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
          
                $( "#description" ).append($.parseHTML($scope.description));
                $( "#buttonInactive" ).append($.parseHTML($scope.buttonInactive));            
                $( "#buttonActive" ).append($.parseHTML($scope.buttonActive));           


            });
    }
    getExperiment(0);

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
                getExperiment(0);
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