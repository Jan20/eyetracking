angular
    .module('app.experiment')
	.controller('Experiment4Controller', Experiment4Controller);

Experiment4Controller.$inject = ['$scope', '$location', '$timeout', '$interval', 'experimentDataservice', 'userDataservice', 'productDataservice', 'questionDataservice', 'quizDataservice'];

function Experiment4Controller($scope, $location, $timeout, $interval, experimentDataservice, userDataservice, productDataservice, questionDataservice, quizDataservice){
    var environment = experimentDataservice.getEnvironment();

    getQuestions();


    /**
    *
    *   Die Variable $scope.userId behinhaltet die aktuelle userId. Sie dient zur Prüfung,  
    *   ob der momentane Nutzer die Kennung "admin" aufweist. Ist dies der Fall, so 
    *   gegen die ng-if Directives true zurück und erlauben Änderungen am View und die 
    *   hinterliegende Datenhaltung vorzunehmen.
    *
    */
    $scope.userId = getCurrentUser();
    // $scope.userId = 'admin';

    /**
    *
    *   Methoden, die sich über den Scope aufrufen lassen sollen. Hierbei handelt es sich 
    *   um Funktionen, die zur Auswahl und zum Ändern der dargestellten Produkten benötigt werden.
    *
    */    
    $scope.updateExperiment = updateExperiment;
    $scope.submitToView5 = submitToView5;

    function submitToView5(){
        $location.path('/5');
    }


    /**
    *
    *   Methoden, die sich über den Scope aufrufen lassen sollen. Hierbei handelt es sich 
    *   um Funktionen, die zur Auswahl und zum Ändern der dargestellten Produkten benötigt werden.
    *
    */
    $scope.startDelay = startDelay;
    $scope.selectQuestion = selectQuestion;
    $scope.updateQuestion = updateQuestion;


    $scope.answer1 = false;
    $scope.answer2 = false;

    $scope.blockToken = false;

    function startDelay(answer) {
        var delay0 = $scope.quiz.delay0;
        console.log('final:'+ delay0);
        $scope.blockToken = true;
        $scope.visible = false;

        if (answer == 'answer1') {
            $scope.answer1 = true;
            $scope.answer2 = false;
        }

        if (answer == 'answer2') {
            $scope.answer1 = false;
            $scope.answer2 = true;
        }

        $timeout(function(){ 
            startTimer();
        }, 2000);

        $timeout(function() {
            $scope.blockToken = false;
            $scope.visible = true;
            setNewImage();
        }, 2000);
        return null;
    }

    function setNewImage(){
        $scope.questionCount -= 1;
        $scope.currentQuizQuestion = $scope.questions[$scope.questionCount];
        $scope.answer1 = false;
        $scope.answer2 = false;
    }
    
    function startTimer(){

        $scope.timer = 5000;

        var timerInterval = $interval(function($interval) {
            setTimer();
            
            if ($scope.timer === 0){
                stopTimer();
            }
            

        }, 1000);

        function stopTimer(){
            $interval.cancel(timerInterval);
        }

        function setTimer(){
            if ($scope.timer === 0)
                stopTimer();            
            $scope.timer -= 1000;            
        }
    }
    startTimer();



    /**************************** User Bereich **************************************/
    
    /**
    *
    *   Die getCurrentUser Funktion stellt eine Helper-Function dar, mit der es möglich ist
    *   den aktuellen Nutzer abzurufen. Hierzu wrid der userDatenservice genutzt, der direkt
    *   nach der Initialisierung eines neuen Nutzers, diesen als aktuellen Nutzer festlegt,
    *   was im Regelfall geschieht, nachdem der Experiment-Teilnehmer seine Teilnehmer-Id
    *   im View0 eingegeben hat.
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
    *   Die updateUser Funktion beschreibt eine Funktion, mit der es Möglich ist,
    *   einen bestehenden Nutzer das Array visitedIn2 hinzuzufügen. Dieses speichert alle
    *   angeklickten Produkte.
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
    /**************************** Quiz Bereich **************************************/

    

    function Quiz(quizId, delay0, delay1){
        this.quizId = quizId;
        this.delay0 = delay0;
        this.delay1 = delay1;
    }

    function postQuiz(){
        var quiz = new Quiz(0, 2000, 5000);

        return quizDataservice.postQuiz(quiz)
            .then(function(){
                console.log('Quiz erfolgreich erstellt.');
            });
    }
    // postQuiz();

    function updateQuiz(quizId){
        var quiz = new Quiz(quizId, $scope.quiz.delay0, $scope.quiz.delay1);

        return quizDataservice.putQuiz(quizId, quiz)
            .then(function(){
                console.log('Quiz wurde erfolgreich geändert.');
            });
    }
    $scope.updateQuiz = updateQuiz;


    /**************************** Question Bereich **************************************/

    /**
    *
    *   Die folgende Funktion besitzt lediglich den Zweck alle Produkte, die in der MongoDB Datenbank
    *   gespeichert sind, abzurufen. Hierzu wird auf den productDataservice zurückgegriffen, über den 
    *   alle Anfragen der clientseitigen Applikation an den Server gekapselt werden. Der Datenservice
    *   ist Bestandteil des Core Moduls und sollte soweit möglich nicht geändert werden.
    *
    */
    function getQuestions(){
        return questionDataservice.getQuestions()
            .then(function(data){
                $scope.questions = data;
                $scope.questionCount = $scope.questions.length - 1;
                $scope.currentQuizQuestion = $scope.questions[0];
                console.log('currentQuizQuestion');
                console.log($scope.currentQuizQuestion);
            });
    }

    function selectQuestion(questionId){
        $scope.currentQuestionId = questionId;
        console.log($scope.currentQuestionId);
        $scope.currentName = $scope.questions[questionId].name;
        $scope.currentActionUrl = environment+'/question/'+questionId;
    }

    function Question(questionId, name){
        this.questionId = questionId;
        this.name = name;
    }
    
    /**
    *
    *   Die folgende Funktion implementiert das Update-Verhalten eines Produktes. 
    *    
    */
    function updateQuestion(questionId){
        question = new Question(questionId, $scope.currentName);
        return questionDataservice.putQuestion(questionId, question)
            .then(function(data){
                getQuestions();
                console.log('Frage wurde erfolgreich geupdated.');
            });
    }

    /**
    *
    *
    *
    *
    */
    function createQuestion(question){
        return questionDataservice.postQuestion(question)
            .then(function(data){
                console.log('Frage wurde erfolgreich erstellt.');
            });
    }
    // question0 = new Question(0, 'Rathaus');
    // createQuestion(question0);
    // question1 = new Question(1, 'Schloss');
    // createQuestion(question1);
    // question2 = new Question(2, 'Clemenskirche');
    // createQuestion(question2);
    // question3 = new Question(3, 'Mühlenhof-Freilichtmuseum Münster');
    // createQuestion(question3);
    // question4 = new Question(4, 'Torminbrücke');
    // createQuestion(question4);
    // question5 = new Question(5, 'Überwasserkirche');
    // createQuestion(question5);
    // question6 = new Question(6, 'Buddenturm');
    // createQuestion(question6);
    // question7 = new Question(7, 'Erbdrostenhof');
    // createQuestion(question7);
    // question8 = new Question(8, 'Burg Hülshoff');
    // createQuestion(question8);
    // question9 = new Question(9, 'Stadtmuseum Münster');
    // createQuestion(question9);
    // question10 = new Question(10, 'Zwinger');
    // createQuestion(question10);    
    // question11 = new Question(11, 'Kiepenkerl');
    // createQuestion(question11);    



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
                $( "#buttonActiveAdmin" ).append($.parseHTML(data.buttonActive));
                $( "#buttonInactive" ).append($.parseHTML(data.buttonInactive));
            });
    }
    getExperiment(4);

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
                $( "#buttonActiveAdmin" ).empty();
                $( "#buttonInactive" ).empty();
                getExperiment(4);
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
            4, 
            'Wir führen derzeit eine andere Studie durch. Dabei geht es um die Bekanntheit von Sehenswürdigkeiten in Münster. Bitte geben Sie an, ob Sie die angezeigten Sehenswürdigkeiten <strong>namentlich kennen</strong>.',
            'Vielen Dank, dass Sie an unserer kurzen Studie über <br> Münsteraner Sehenswürdigkeiten teilgenommen haben.', 
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

    function getQuiz(quizId){
        return quizDataservice.getQuiz(quizId)
            .then(function(data){
                console.log('data:');
                console.log(data);
                $scope.quiz = data;
            });
    }
    getQuiz(0);

}    