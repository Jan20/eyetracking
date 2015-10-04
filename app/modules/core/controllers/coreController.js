eyetrackingApp.controller("coreController", ['$location', '$scope', '$interval', '$timeout', function($location, $scope, $interval, $timeout) {

    // ----------------------------------- Model -----------------------------------



    $scope.products = [{
        productId: 0,
        name: 'Canon IXUS 170',
        image: 'app/modules/core/assets/products/product0.jpg',
        url: 'http://www.amazon.de/Canon-Digitalkamera-Megapixel-Bildstabilisator-LCD-Display/dp/B00RYV9R20/ref=sr_1_1?&s=photo&ie=UTF8&qid=1436878022&sr=1-1&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null
    }, {
        productId: 1,
        name: 'Fujifilm FinePix S8600',
        image: 'app/modules/core/assets/products/product1.jpg',
        url: 'http://www.amazon.de/Fujifilm-Kompaktkamera-Megapixel-Kompakte-Bauweise/dp/B00HXBROJY/ref=sr_1_3?s=photo&ie=UTF8&qid=1443701645&sr=1-3&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        productId: 2,
        name: 'Nikon Coolpix S3700',
        image: 'app/modules/core/assets/products/product2.jpg',
        url: 'http://www.amazon.de/Nikon-Coolpix-Digitalkamera-Megapixel-Panorama-Assistent/dp/B00S85LULM/ref=sr_1_14?&s=photo&ie=UTF8&qid=1436878022&sr=1-14&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        productId: 3,
        name: 'Olympus SZ-14',
        image: 'app/modules/core/assets/products/product3.jpg',
        url: ' http://www.amazon.de/Olympus-Digitalkamera-Megapixel-24-fach-bildstabilisiert/dp/B006Q9J438/ref=sr_1_1?ie=UTF8&qid=1437901399&sr=8-1&keywords=Olympus+SZ-14+Digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        productId: 4,
        name: 'Panasonic DMC-TZ56EG-W',
        image: 'app/modules/core/assets/products/product4.jpg',
        url: 'http://www.amazon.de/Panasonic-DMC-TZ56EG-W-Travellerzoom-Kompaktkamera-LCD-Display/dp/B00I3BTGT4/ref=sr_1_2?s=photo&ie=UTF8&qid=1437829309&sr=1-2&keywords=panasonic',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        productId: 5,
        name: 'Samsung WB35F',
        image: 'app/modules/core/assets/products/product5.jpg',
        url: 'http://www.amazon.de/Samsung-Smart-Digitalkamera-Megapixel-12-fach-Display/dp/B00I0MR16G/ref=sr_1_7?s=photo&ie=UTF8&qid=1443701944&sr=1-7&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        productId: 6,
        name: 'Sony DSC-W830',
        image: 'app/modules/core/assets/products/product6.jpg',
        url: 'http://www.amazon.de/Sony-Digitalkamera-LC-Display-Weitwinkelobjektiv-SteadyShot/dp/B00HH8A5RQ/ref=sr_1_2?s=photo&ie=UTF8&qid=1437830150&sr=1-2&keywords=sony+digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }, {
        productId: 7,
        name: 'Sony DSC-WX220',
        image: 'app/modules/core/assets/products/product7.jpg',
        url: 'http://www.amazon.de/Sony-DSC-WX220-Digitalkamera-Megapixel-LCD-Display/dp/B00I9X2GYS/ref=sr_1_9?&s=photo&ie=UTF8&qid=1436878022&sr=1-9&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn5: false,
        choosedIn6: false,
        randomValue: null

    }];

    $scope.mainFunction0 = mainFunction0;
    $scope.mainFunction1 = mainFunction1;
    $scope.mainFunction2 = mainFunction2;
    $scope.mainFunction3 = mainFunction3;
    $scope.mainFunction4 = mainFunction4;
    $scope.mainFunction5 = mainFunction5;
    $scope.mainFunction6 = mainFunction6;

    $scope.setVisitedIn2 = setVisitedIn2;
    $scope.setChoosedIn3 = setChoosedIn3;
    $scope.setVisitedIn5 = setVisitedIn5;
    $scope.setChoosedIn6 = setChoosedIn6;

    $scope.showResults = showResults;
    $scope.exportData = exportData;
    // ----------------------------------- View start -----------------------------------

    function mainFunction0(userId){
        setUserId(userId);
        $location.path('/1a');
    }

    function setUserId(userId) {
        $scope.userId = userId;
    }


    // ----------------------------------- View 1a -----------------------------------
    
    function mainFunction1(){
        setRandomOrder();
        $location.path('/2a');
    }

    function setRandomOrder() {
        for (var i = 0; i < $scope.products.length; i++) {
            $scope.products[i].randomValue = Math.random();
        }
    }

    
    // ----------------------------------- View 2a -----------------------------------

    function mainFunction2(){
        $location.path('/3a');
    }

    function setVisitedIn2(productId) {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].productId == productId) {
                $scope.products[i].visitedIn2 = true;
            }
        }
    }

    // ----------------------------------- View 3a -----------------------------------

    function mainFunction3(){
        $location.path('/4a');
    }

    $scope.countChoosedIn3 = 0;
    
    function setChoosedIn3(productId) {
        if ($scope.products[productId].choosedIn3 === false) {
            $scope.products[productId].choosedIn3 = true;
            $scope.countChoosedIn3 += 1;
        } else {
            $scope.products[productId].choosedIn3 = false;
            $scope.countChoosedIn3 -= 1;
        }
    }


    // ----------------------------------- View 4a -----------------------------------
    
    function mainFunction4(){
        $location.path('/5a');
    }

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

    $scope.QuizImageCount = 0;
    $scope.currentQuizImage = $scope.quizImages[$scope.QuizImageCount];

    $scope.answer1 = false;
    $scope.answer2 = false;

    $scope.blockToken = false;

    $scope.startDelay = startDelay;

    function startDelay(answer) {
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
    }

    var setNewImage = function() {
        $scope.QuizImageCount += 1;
        $scope.currentQuizImage = $scope.quizImages[$scope.QuizImageCount];
        $scope.answer1 = false;
        $scope.answer2 = false;
    };

    function startTimer() {
        $scope.timer = 5000;

        var timerInterval = $interval(function($interval){
            setTimer();

            if($scope.timer === 0){
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




    // ----------------------------------- View 5a -----------------------------------

    function mainFunction5(){
        $location.path('/6a');
    }

    function setVisitedIn5(productId) {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].productId == productId) {
                $scope.products[i].visitedIn5 = true;
            }
        }
    }


    // ----------------------------------- View 6a -----------------------------------

    function mainFunction6(){
        createObject();
        $location.path('/7a');
    }
    
    $scope.countChoosedIn6 = 0;

    function setChoosedIn6(productId) {
        if ($scope.products[productId].choosedIn6 === false) {
            for (var i = 0; i < $scope.products.length; i++) {
                $scope.products[i].choosedIn6 = false;
            }
            $scope.products[productId].choosedIn6 = true;
            $scope.countChoosedIn6 = 1;
        } else {
            $scope.products[productId].choosedIn6 = false;
            $scope.countChoosedIn6 = 0;
        }
    }

    function Dataset(userId, visitedIn2, choosedIn3, visitedIn5, choosedIn6){
        this.userId = userId;
        this.visitedIn2 = visitedIn2;
        this.choosedIn3 = choosedIn3;
        this.visitedIn5 = visitedIn5;
        this.choosedIn6 = choosedIn6;
    }
    console.log($scope.products[0]);
    function createObject() {
        var visitedIn2Array = [];
        var choosedIn3Array = [];
        var visitedIn5Array = [];
        var choosedIn6Array = [];
        for (var i = 0; i < $scope.products.length; i++) {
            console.log($scope.products[i]);
            if ($scope.products[i].visitedIn2 === true) {
                visitedIn2Array.push($scope.products[i].name);
            }else{
            }
        }
        for (var j = 0; j < $scope.products.length; j++) {
            if ($scope.products[j].choosedIn3 === true) {
                choosedIn3Array.push($scope.products[j].name);
            }
        }
        for (var k = 0; k < $scope.products.length; k++) {
            if ($scope.products[k].visitedIn5 === true) {
                visitedIn5Array.push($scope.products[k].name);
            }
        }
        for (var l = 0; l < $scope.products.length; l++) {
            if ($scope.products[l].choosedIn6 === true) {
               choosedIn6Array.push($scope.products[l].name);
            }
        }
        console.log(visitedIn2Array);
        console.log(choosedIn3Array);
        console.log(visitedIn5Array);
        console.log(choosedIn6Array);

        var newDataSet = new Dataset($scope.userId, visitedIn2Array, choosedIn3Array, visitedIn5Array, choosedIn6Array);

        // console.log(JSON.parse(localStorage.getItem('eyetrackingData')));
        console.log(newDataSet);

        var eyetrackingData = [];
        if (localStorage.getItem('eyetrackingData') != undefined) {
            eyetrackingData = localStorage.getItem('eyetrackingData');
            eyetrackingData = JSON.parse(eyetrackingData);
        }

        eyetrackingData.push(newDataSet);
        eyetrackingData = JSON.stringify(eyetrackingData);
        localStorage.setItem('eyetrackingData', eyetrackingData);
    }




    // ----------------------------------- View Admin -----------------------------------


    function showResults() {
        var eyetrackingData = localStorage.getItem('eyetrackingData');
        $scope.eyetrackingData = JSON.parse(eyetrackingData);
    }

    /** 
    *
    *   Simples Array, das die Spaltenüberschriften der gespeicherten Informationen darstellt
    *
    */
    $scope.csvHeader = ['userId', 'visitedIn2', 'choosedIn3', 'visitedIn5', 'choosedIn6'];
    function exportData() {
            console.log('eytrackingData: ' + $scope.csvHeader);
            console.log('eytrackingData: ' + JSON.stringify($scope.eyetrackingData));
            // $scope.eyetrackingData = JSON.stringify($scope.eyetrackingData);
        alasql("SELECT * INTO CSV('eyetracking.csv',{headers:true, separator:';'}) FROM ?", [$scope.eyetrackingData]);
    }


}]);





