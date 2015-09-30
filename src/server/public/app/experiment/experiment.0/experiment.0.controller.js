angular
    .module('app.experiment')
	.controller('Experiment0Controller', Experiment0Controller);

Experiment0Controller.$inject = ['$scope', '$location', '$timeout', 'experimentDataservice', 'userDataservice'];

function Experiment0Controller($scope, $location, $timeout, experimentDataservice, userDataservice){

    /**
    *
    *   Die Variable $scope.userId behinhaltet die aktuelle userId. Sie dient zur Prüfung,  
    *   ob der momentane Nutzer die Kennung "admin" aufweist. Ist dies der Fall, so 
    *   geben die ng-if beziehungsweise ng-show Directives true zurück und erlauben 
    *   sowohl Änderungen am View als auch der hinterliegende Datenhaltung vorzunehmen.
    *
    */
    // $scope.userId = 'admin';    

    /**
    *
    *   Im Folgenden werden alle Methoden gelistet, die im Scope zur 
    *   Verfügung stehen werden.
    *
    */
    $scope.createUser = createUser;
    $scope.updateExperiment = updateExperiment;    
    $scope.switchToView1 = switchToView1;
    $scope.switchToAdminView = switchToAdminView;
    
    /**************************** View spezifische Funktionen **************************************/

    /**
    *
    *   Die folgende Funktion dient primär der Weiterleitung des Nutzers zu dem nächsten View.
    *   Die Funktion triggert darüber hinaus die Erstellung eines neuen Nutzers abhängig von
    *   der eingetragenen Teilnehmernummer. Darüber hinaus wird die Weiterleitung zu dem nächsten
    *   View um 200 Millisekunden verzögert, um dem POST Request, der durch die createUser Funktion
    *   aufgerufen wird, genügend Zeit zur Ausführung zu erlauben. 
    *   An dieser Stelle empfiehlt sich bei künftigen Überarbeitungen eine deutliche Überarbeitung.
    *
    */
    function switchToView1() {
        deleteUser('admin');
        createUser();
        $timeout(direct, 200);
        function direct(){
            $location.path('/1');
        }
    }

    /**
    *
    *   Die folgende Funktion implementiert die Weiterleitung zu dem Administratorview, die zugänglich   
    *   wird, sobald der Nutzer als Teilnehmernummer 'admin' eingegeben hat.
    *
    */
    function switchToAdminView(){
        $location.path('/admin');
    }

    /**************************** User Section **************************************/
    
    /**
    *
    *   Der User-Konstruktor stellt den Standard zur Konstruktion eines User-Objekts bereit.
    *   Der Konstruktor kommt innerhalb der updateUser Funktion zur Anwendung.
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
    *   Die CreateUser Funktion dient zur Erstellung eines neuen Users.
    *   Sie findet sich ausschließlich im experiment0Controller. Somit
    *   ist es lediglich im ersten View möglich, einen neuen User anzulegen.
    *   @param userNumber Die Variable bezieht sich auf den Wert, der 
    *   in das Textfeld unterhalb der Beschreibung auf der Übersichtsseite 
    *   eingetragen wird.
    *
    */
    function createUser() {
        var user = new User($scope.userId, null, null, null, null);
        return userDataservice.postUser(user)
            .then(function(user){
                console.log('Neuer User erfogreich hinzugefügt: ' + user.userId);
            });
    }

    /**
    *
    *   Die folgende Funktion dient der Löschung des Nutzers 'admin'
    *
    */
    function deleteUser(userId){
        if(userId == 'admin'){
            return userDataservice.deleteUser(userId)
                .then(function(data){
                    console.log('User erfolgreich gelöscht.');
            });         
        }

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
                $scope.currentActionUrl = 'http://iwm-devsrv1.iwmnetwork.de:3000/api/experiment/'+data.experimentId;
                $scope.logo = 'images/experiments/logo'+data.experimentId+'.jpg';
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
                $scope.logo = '';

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

    /**************************** Editor Optionen **************************************/

    /**
    *
    *   Die folgende Variable definiert den Funktionsumfang des TinyMCE Editors, der als 
    *   Standardeditor zur Manipulation der Views eingesetzt wird.
    *
    */
    $scope.tinymceOptions = {
        onChange: function(e) {},
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