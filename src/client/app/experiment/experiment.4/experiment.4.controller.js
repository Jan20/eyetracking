angular
    .module('app.experiment')
	.controller('Experiment4Controller', Experiment4Controller);

Experiment4Controller.$inject = ['$scope', '$location', 'experimentDataservice', 'userDataservice', 'productDataservice'];

function Experiment4Controller($scope, $location, experimentDataservice, userDataservice, productDataservice){

	    $scope.mainFunction4 = function(){
        setTimeout(function(){
            goTo('/5a');        
        }, 200);
    };

    $scope.quizImages = [
        'images/quiz/question1.jpg',
        'images/quiz/question2.jpg',
        'images/quiz/question3.jpg',
        'images/quiz/question4.jpg',
        'images/quiz/question5.jpg',
        'images/quiz/question6.jpg',
        'images/quiz/question7.jpg',
        'images/quiz/question8.jpg',
        'images/quiz/question9.jpg',
        'images/quiz/question10.jpg',
        'images/quiz/question11.jpg',
        'images/quiz/question12.jpg',

    ];

    // $scope.quizImages = [
    //     'app/modules/core/assets/quizBayern/question1.jpg',
    //     'app/modules/core/assets/quizBayern/question2.jpg',
    //     'app/modules/core/assets/quizBayern/question3.jpg',
    //     'app/modules/core/assets/quizBayern/question4.jpg',
    //     'app/modules/core/assets/quizBayern/question5.jpg',
    //     'app/modules/core/assets/quizBayern/question6.jpg',
    //     'app/modules/core/assets/quizBayern/question7.jpg',
    //     'app/modules/core/assets/quizBayern/question8.jpg',
    //     'app/modules/core/assets/quizBayern/question9.jpg',
    //     'app/modules/core/assets/quizBayern/question10.jpg',
    //     'app/modules/core/assets/quizBayern/question11.jpg',
    //     'app/modules/core/assets/quizBayern/question12.jpg'
    // ];


$scope.QuizImageCount = $scope.quizImages.length - 1;
    console.log($scope.QuizImageCount);
    console.log($scope.quizImages[$scope.QuizImageCount]);
    $scope.currentQuizImage = $scope.quizImages[$scope.QuizImageCount];

    $scope.answer1 = false;
    $scope.answer2 = false;

    $scope.blockToken = false;

    $scope.startDelay = function(answer) {
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

        setTimeout(function(){ 
            $scope.startTimer();
        }, 2000);

        setTimeout(function() {
            $scope.blockToken = false;
            $scope.visible = true;
            setNewImage();
        }, 2000);
    };

    var setNewImage = function() {
            $scope.QuizImageCount -= 1;
            $scope.currentQuizImage = $scope.quizImages[$scope.QuizImageCount];
            $scope.answer1 = false;
            $scope.answer2 = false;
    };

    $scope.startTimer = function() {
        $scope.timerDuration = 5;
        $scope.currentSecond = 5;

        var current = moment.duration($scope.timerDuration * 1000, 'milliseconds');

        setInterval(function() {
            $scope.visible = false;
            setCurrentTime();
        }, 1000);

        var setCurrentTime = function() {
            $scope.$apply(function() {

                if (current === 0) {
                    return null;
                }

                current = moment.duration(current - 1000, 'milliseconds');
                $scope.currentSecond = current.get('seconds');

            });
        };

    };
}