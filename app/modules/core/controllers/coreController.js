eyetrackingApp.controller("coreController", ['$location', '$scope', function($location, $scope, $apply) {

    // ----------------------------------- Model -----------------------------------

    $scope.products = [{
        id: 1,
        image: 'app/modules/core/assets/cameras/Canon_IXUS_170.jpg',
        url: 'http://www.amazon.de/Canon-Digitalkamera-Megapixel-Bildstabilisator-LCD-Display/dp/B00RYV9R20/ref=sr_1_1?&s=photo&ie=UTF8&qid=1436878022&sr=1-1&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null
    }, {
        id: 2,
        image: 'app/modules/core/assets/cameras/Fujifilm_FinePix_T500.jpg',
        url: 'http://www.amazon.de/Fujifilm-FinePix-Digitalkamera-Megapixel-bildstabilisiert/dp/B00BBZTHS4/ref=sr_1_42?&s=photo&ie=UTF8&qid=1436878131&sr=1-42&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        id: 3,
        image: 'app/modules/core/assets/cameras/Nikon_Coolpix_S3700.jpg',
        url: 'http://www.amazon.de/Nikon-Coolpix-Digitalkamera-Megapixel-Panorama-Assistent/dp/B00S85LULM/ref=sr_1_14?&s=photo&ie=UTF8&qid=1436878022&sr=1-14&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        id: 4,
        image: 'app/modules/core/assets/cameras/Olympus_SZ-14.jpg',
        url: ' http://www.amazon.de/Olympus-Digitalkamera-Megapixel-24-fach-bildstabilisiert/dp/B006Q9J438/ref=sr_1_1?ie=UTF8&qid=1437901399&sr=8-1&keywords=Olympus+SZ-14+Digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        id: 5,
        image: 'app/modules/core/assets/cameras/Panasonic_DMC-TZ56EG-W.jpg',
        url: 'http://www.amazon.de/Panasonic-Lumix-DMC-SZ3-Megapixel-Display/dp/B00BB3FWBW/ref=sr_1_10?s=photo&ie=UTF8&qid=1439291686&sr=1-10&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        id: 6,
        image: 'app/modules/core/assets/cameras/Samsung DV150F.jpg',
        url: 'http://www.amazon.de/Samsung-Smart-Digitalkamera-Megapixel-LCD-Display-bildstabilisiert/dp/B00B1OXLJG/ref=sr_1_6?s=photo&ie=UTF8&qid=1438697567&sr=1-6&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        id: 7,
        image: 'app/modules/core/assets/cameras/Sony_DSC-W830.jpg',
        url: 'http://www.amazon.de/Sony-Digitalkamera-LC-Display-Weitwinkelobjektiv-SteadyShot/dp/B00HH8A5RQ/ref=sr_1_2?s=photo&ie=UTF8&qid=1437830150&sr=1-2&keywords=sony+digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        id: 8,
        image: 'app/modules/core/assets/cameras/Sony_DSC-WX220.jpg',
        url: 'http://www.amazon.de/Sony-DSC-WX220-Digitalkamera-Megapixel-LCD-Display/dp/B00I9X2GYS/ref=sr_1_9?&s=photo&ie=UTF8&qid=1436878022&sr=1-9&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }];

    // ----------------------------------- GoTo Function -----------------------------------

    var goTo = function(path){
        $scope.$apply(function(){
            $location.path(path);
        });        
    };


    // ----------------------------------- View start -----------------------------------

    $scope.mainFunction0 = function(userNumber){
        $scope.saveUserNumber(userNumber);
        setTimeout(function(){
            goTo('/1a');
        }, 200);
    };

    $scope.saveUserNumber = function(userNumber) {
        $scope.userNumber = userNumber;
    };


    // ----------------------------------- View 1a -----------------------------------
    
    $scope.mainFunction1 = function(){
        $scope.setRandomOrder();
        setTimeout(function(){
            goTo('/2a');
        }, 200);
    };

    $scope.setRandomOrder = function() {
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            $scope.products[i].randomValue = Math.random();
        };
    };

    
    // ----------------------------------- View 2a -----------------------------------

    $scope.mainFunction2 = function(){
        $scope.setVisitedIn2();
        setTimeout(function(){
            goTo('/3a');
        }, 200);
    };

    $scope.setVisitedIn2 = function(id) {
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].id == id) {
                $scope.products[i].visitedIn2 = true;
            }
        }
    };


    // ----------------------------------- View 3a -----------------------------------

    $scope.mainFunction3 = function(){
        setTimeout(function(){
            goTo('/4a');        
        }, 200);
    };

    $scope.countChoosedIn3 = 0;
    
    $scope.setChoosedIn3 = function(id) {
        if ($scope.products[id - 1].choosedIn3 == false) {
            $scope.products[id - 1].choosedIn3 = true;
            $scope.countChoosedIn3 += 1;
        } else {
            $scope.products[id - 1].choosedIn3 = false;
            $scope.countChoosedIn3 -= 1;
        }
    };


    // ----------------------------------- View 4a -----------------------------------
    
    $scope.mainFunction4 = function(){
        setTimeout(function(){
            goTo('/5a');        
        }, 200);
    };

    // $scope.quizImages = [
    //     'app/modules/core/assets/quiz/question1.jpg',
    //     'app/modules/core/assets/quiz/question2.jpg',
    //     'app/modules/core/assets/quiz/question3.jpg',
    //     'app/modules/core/assets/quiz/question4.jpg',
    //     'app/modules/core/assets/quiz/question5.jpg',
    //     'app/modules/core/assets/quiz/question6.jpg',
    //     'app/modules/core/assets/quiz/question7.jpg',
    //     'app/modules/core/assets/quiz/question8.jpg',
    //     'app/modules/core/assets/quiz/question9.jpg',
    //     'app/modules/core/assets/quiz/question10.jpg',
    //     'app/modules/core/assets/quiz/question11.jpg',
    //     'app/modules/core/assets/quiz/question12.jpg'
    // ];

    $scope.quizImages = [
        'app/modules/core/assets/quizBayern/question1.jpg',
        'app/modules/core/assets/quizBayern/question2.jpg',
        'app/modules/core/assets/quizBayern/question3.jpg',
        'app/modules/core/assets/quizBayern/question4.jpg',
        'app/modules/core/assets/quizBayern/question5.jpg',
        'app/modules/core/assets/quizBayern/question6.jpg',
        'app/modules/core/assets/quizBayern/question7.jpg',
        'app/modules/core/assets/quizBayern/question8.jpg',
        'app/modules/core/assets/quizBayern/question9.jpg',
        'app/modules/core/assets/quizBayern/question10.jpg',
        'app/modules/core/assets/quizBayern/question11.jpg',
        'app/modules/core/assets/quizBayern/question12.jpg'
    ];



    $scope.QuizImageCount = $scope.quizImages.length - 1;
    console.log($scope.QuizImageCount);
    console.log($scope.quizImages[$scope.QuizImageCount])
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

                if (current == 0) {
                    return null;
                }

                current = moment.duration(current - 1000, 'milliseconds');
                $scope.currentSecond = current.get('seconds');

            })
        };

    };


    // ----------------------------------- View 5a -----------------------------------

    $scope.mainFunction5 = function(){
        setTimeout(function(){
            goTo('6a');
        }, 200);
    };

    $scope.setVisitedIn5 = function(id) {
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].id == id) {
                $scope.products[i].visitedIn5 = true;
            }
        }
    };


    // ----------------------------------- View 6a -----------------------------------

    $scope.mainFunction6 = function(){
        $scope.createObject();
        setTimeout(function(){
            goTo('7a');
        }, 200);
    };
    
    $scope.countChoosedIn6 = 0;

    $scope.setChoosedIn6 = function(id) {
        if ($scope.products[id - 1].choosedIn6 == false) {
            for (var i = $scope.products.length - 1; i >= 0; i--) {
                $scope.products[i].choosedIn6 = false;
            };
            $scope.products[id - 1].choosedIn6 = true;
            $scope.countChoosedIn6 = 1;
        } else {
            $scope.products[id - 1].choosedIn6 = false;
            $scope.countChoosedIn6 = 0;
        }
    };

    $scope.createObject = function() {
        var visitedIn2Array = [];
        var choosedIn3Array = [];
        var visitedIn5Array = [];
        var choosedIn6Array = [];
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].visitedIn2 == true) {
                visitedIn2Array.push($scope.products[i].id);
            }
        };
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].choosedIn3 == true) {
                choosedIn3Array.push($scope.products[i].id);
            }
        };
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].visitedIn5 == true) {
                visitedIn5Array.push($scope.products[i].id);
            }
        };
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].choosedIn6 == true) {
                choosedIn6Array.push($scope.products[i].id);
            }
        };
        var newDataSet = {
            ExperimentNr: $scope.userNumber,
            visitedIn2: visitedIn2Array,
            choosedIn3: choosedIn3Array,
            visitedIn5: visitedIn5Array,
            choosedIn6: choosedIn6Array
        }
        // console.log(JSON.parse(localStorage.getItem('eyetrackingData')));
        console.log(newDataSet);
        var eyetrackingData = [];
        if (localStorage.getItem('eyetrackingData') != undefined) {
            var eyetrackingData = localStorage.getItem('eyetrackingData');
            var eyetrackingData = JSON.parse(eyetrackingData);
        }

        eyetrackingData.push(newDataSet);
        eyetrackingData = JSON.stringify(eyetrackingData);
        localStorage.setItem('eyetrackingData', eyetrackingData);
    };




    // ----------------------------------- View Admin -----------------------------------


    $scope.showResults = function() {
        var eyetrackingData = localStorage.getItem('eyetrackingData');
        $scope.eyetrackingData = JSON.parse(eyetrackingData);
    }

    /** 
    *
    *   Simples Array, das die Spaltenüberschriften der ges 
    *
    */
    $scope.csvHeader = ['ExperimentNr', 'visitedIn2', 'choosedIn3', 'visitedIn5', 'choosedIn6'];
    $scope.export = function exportData() {
            console.log('eytrackingData: ' + $scope.csvHeader);
            console.log('eytrackingData: ' + JSON.stringify($scope.eyetrackingData));
            // $scope.eyetrackingData = JSON.stringify($scope.eyetrackingData);
        alasql("SELECT * INTO CSV('eyetracking.csv',{headers:true, separator:';'}) FROM ?", [$scope.eyetrackingData]);
    };



}]);





