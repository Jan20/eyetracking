eyetrackingApp.controller("coreController", ['$scope', function($scope) {
    // View 1
    $scope.userNumber = 12;
    $scope.products = [{
        id: 1,
        image: 'app/modules/core/assets/cameras/Canon IXUS 170 Digitalkamera.jpg',
        url: 'http://www.amazon.de/Canon-Digitalkamera-Megapixel-Bildstabilisator-LCD-Display/dp/B00RYV9R20/ref=sr_1_1?&s=photo&ie=UTF8&qid=1436878022&sr=1-1&keywords=digitalkamera',
        visitedIn2: true,
        choosedIn3: true,
        visitedIn6: true,
        choosedIn7: true
    }, {
        id: 2,
        image: 'app/modules/core/assets/cameras/Canon PowerShot A2500 Digitalkamera.jpg',
        url: 'http://www.amazon.de/Canon-PowerShot-Digitalkamera-Megapixel-bildstabilisiert/dp/B00B7J6I8G/ref=sr_1_12?s=photo&ie=UTF8&qid=1437142496&sr=1-12&keywords=Digitalkamera',
        visitedIn2: true,
        choosedIn3: true,
        visitedIn6: true,
        choosedIn7: false
    }, {
        id: 3,
        image: 'app/modules/core/assets/cameras/Fujifilm FinePix T500 Digitalkamera.jpg',
        url: 'http://www.amazon.de/Fujifilm-FinePix-Digitalkamera-Megapixel-bildstabilisiert/dp/B00BBZTHS4/ref=sr_1_42?&s=photo&ie=UTF8&qid=1436878131&sr=1-42&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 4,
        image: 'app/modules/core/assets/cameras/Nikon Coolpix S3700.jpg',
        url: 'http://www.amazon.de/Nikon-Coolpix-Digitalkamera-Megapixel-Panorama-Assistent/dp/B00S85LULM/ref=sr_1_14?&s=photo&ie=UTF8&qid=1436878022&sr=1-14&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 5,
        image: 'app/modules/core/assets/cameras/Olympus SZ-14 Digitalkamera.jpg',
        url: 'http://www.amazon.de/Olympus-Digitalkamera-Megapixel-24-fach-bildstabilisiert/dp/B006Q9J40Q/ref=sr_1_49?s=photo&ie=UTF8&qid=1437143145&sr=1-49&keywords=Digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 6,
        image: 'app/modules/core/assets/cameras/Panasonic DMC-FT25EG-A Lumix Digitalkamera.jpg',
        url: 'http://www.amazon.de/Panasonic-DMC-FT25EG--Digitalkamera-LCD-Display-wasserdicht/dp/B00BB3GHXY/ref=sr_1_3?s=photo&ie=UTF8&qid=1437142262&sr=1-3&keywords=Panasonic+DMC-FT25EG-A+Lumix',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 7,
        image: 'app/modules/core/assets/cameras/Samsung WB350F Smart-Digitalkamera.jpg',
        url: 'http://www.amazon.de/Samsung-Smart-Digitalkamera-Megapixel-21-fach-Touchscreen/dp/B00I058XQA/ref=sr_1_8?s=photo&ie=UTF8&qid=1437142496&sr=1-8&keywords=Digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 8,
        image: 'app/modules/core/assets/cameras/Sony DSC-WX220 Digitalkamera.jpg',
        url: 'http://www.amazon.de/Sony-DSC-WX220-Digitalkamera-Megapixel-LCD-Display/dp/B00I9X2GYS/ref=sr_1_9?&s=photo&ie=UTF8&qid=1436878022&sr=1-9&keywords=digitalkamera',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }];
    // Functions of View 1
    $scope.saveUserNumber = function(userNumber) {
        $scope.userNumber = userNumber;
    };
    // Functionality in View 2
    $scope.setVisitedIn2 = function(id) {
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if($scope.products[i].id == id){
                $scope.products[i].visitedIn2 = true;
            }
        }
    };

    // Functionality in View 3
    $scope.setChoosedIn3 = function(id) {
        if ($scope.products[id - 1].choosedIn3 == false) {
            $scope.products[id - 1].choosedIn3 = true;
        } else {
            $scope.products[id - 1].choosedIn3 = false;
        }
    };
    // Count in View 3, used in View 6 and 7
    $scope.countChoosedIn3 = function() {
        $scope.choosedIn3Count = 0;
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].choosedIn3 == true) {
                $scope.choosedIn3Count += 1;
            }
        }
    };
    // Test in View 4
    $scope.questions = [{
        id: 1,
        answer: 'Armin Droste-Hülshoff',
        category: 1,
        isChecked: false
    }, {
        id: 2,
        answer: 'Nachwächter',
        category: 1,
        isChecked: false
    }, {
        id: 3,
        answer: 'Kiepenkerl',
        category: 1,
        isChecked: false
    }, {
        id: 4,
        answer: 'Ludgeriturm',
        category: 2,
        isChecked: false
    }, {
        id: 5,
        answer: 'Zwinger',
        category: 2,
        isChecked: false
    }, {
        id: 6,
        answer: 'Kerker',
        category: 2,
        isChecked: false
    }, {
        id: 7,
        answer: 'Druckerei Krimphove',
        category: 3,
        isChecked: false
    }, {
        id: 8,
        answer: 'Stadtmuseum',
        category: 3,
        isChecked: false
    }, {
        id: 9,
        answer: 'Altes Kino ',
        category: 3,
        isChecked: false
    }, {
        id: 10,
        answer: 'Burg Hülshoff',
        category: 4,
        isChecked: false
    }, {
        id: 11,
        answer: 'Wasserburg Anholt',
        category: 4,
        isChecked: false
    }, {
        id: 12,
        answer: 'Haus Bisping',
        category: 4,
        isChecked: false
    }, {
        id: 13,
        answer: 'Stadtpalais Johann Conrad von Schlaun',
        category: 5,
        isChecked: false
    }, {
        id: 14,
        answer: 'Erbdrostenhof',
        category: 5,
        isChecked: false
    }, {
        id: 15,
        answer: 'Schloss St. Clemens',
        category: 5,
        isChecked: false
    }, {
        id: 16,
        answer: 'Buddenturm',
        category: 6,
        isChecked: false
    }, {
        id: 17,
        answer: 'Wasserturm',
        category: 6,
        isChecked: false
    }, {
        id: 18,
        answer: 'Mauerturm',
        category: 6,
        isChecked: false
    }, {
        id: 19,
        answer: 'St. Josefskirche',
        category: 7,
        isChecked: false
    }, {
        id: 20,
        answer: 'Überwasserkirche',
        category: 7,
        isChecked: false
    }, {
        id: 21,
        answer: 'St. Ludgeri-Kirche',
        category: 7,
        isChecked: false
    }, {
        id: 22,
        answer: 'Aabrücke',
        category: 8,
        isChecked: false
    }, {
        id: 23,
        answer: 'Torminbrücke',
        category: 8,
        isChecked: false
    }, {
        id: 24,
        answer: 'Sentruper Brücke',
        category: 8,
        isChecked: false
    }];
    $scope.setIsChecked = function(id) {
        if ($scope.questions[id - 1].isChecked == false) {
            for (var i = $scope.questions.length - 1; i >= 0; i--) {
                if ($scope.questions[i].category == $scope.questions[id - 1].category) {
                    $scope.questions[i].isChecked = false;
                }
            };
            $scope.questions[id - 1].isChecked = true;
        } else {
            $scope.questions[id - 1].isChecked = false;
        }
    };

    // Functionality in View 6
    $scope.setVisitedIn6 = function(id) {
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if($scope.products[i].id == id){
                $scope.products[i].visitedIn6 = true;
            }
        }
    };

    // Functionality in View 7
    $scope.setChoosedIn7 = function(id) {
        if ($scope.products[id - 1].choosedIn7 == false) {
            for (var i = $scope.products.length - 1; i >= 0; i--) {
                $scope.products[i].choosedIn7 = false;
            };
            $scope.products[id - 1].choosedIn7 = true;
        } else {
            $scope.products[id - 1].choosedIn7 = false;
        }
    };
    

    // Save Results in View 8
    $scope.createObject = function() {
        var visitedIn2Array = [];
        var choosedIn3Array = [];
        var visitedIn6Array = [];
        var choosedIn7Array = [];
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
            if ($scope.products[i].visitedIn6 == true) {
                visitedIn6Array.push($scope.products[i].id);
            }
        };
        for (var i = $scope.products.length - 1; i >= 0; i--) {
            if ($scope.products[i].choosedIn7 == true) {
                choosedIn7Array.push($scope.products[i].id);
            }
        };
        var newDataSet = {
            ExperimentNr: $scope.userNumber,
            visitedIn2: visitedIn2Array,
            choosedIn3: choosedIn3Array,
            visitedIn6: visitedIn6Array,
            choosedIn7: choosedIn7Array
        }
        console.log('Test: '+localStorage.getItem('eyetrackingData'));

        console.log(newDataSet);
        var eyetrackingData = [];

        if(localStorage.getItem('eyetrackingData') != undefined){
            var eyetrackingData = localStorage.getItem('eyetrackingData');
            var eyetrackingData = JSON.parse(eyetrackingData);
        }else{
            localStorage.setItem('eyetrackingData', eyetrackingData);
        }


        eyetrackingData.push(newDataSet);
        eyetrackingData = JSON.stringify(eyetrackingData);

        localStorage.setItem('eyetrackingData', eyetrackingData);

    };

    $scope.showResults = function(){
        var eyetrackingData = localStorage.getItem('eyetrackingData');
        $scope.eyetrackingData = JSON.parse(eyetrackingData);

    }
    $scope.csvHeader = ['experimentNr', 'visitedIn2', 'choosedIn3', 'visitedIn6', 'choosedIn7'];

    var data = [["Minsk",100000], ["Riga",200000]];

    $scope.export = function exportData() {
        alasql("SELECT * INTO CSV('eyetracking.csv',{headers:true}) FROM ?",[$scope.eyetrackingData]);
    //alasql('SELECT * INTO CSV("test.csv". {headers:true}) FROM ?',[data]);
    }



}]);