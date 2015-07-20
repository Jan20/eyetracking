eyetrackingApp.controller("coreController2", ['$scope', function($scope) {
    // View 1
    $scope.userNumber = 12;
    $scope.hotels = [{
        id: 9,
        image: 'app/modules/core/assets/hotels/Boutique Hotel Seven Days.JPG',
        url: 'http://www.amazon.de/Hisense-LTDN40D36SEU-LED-Backlight-Fernseher-Full-HD/dp/B00IZFWD5C/ref=sr_1_5?s=home-theater&ie=UTF8&qid=1424252862&sr=1-5',
        visitedIn2: true,
        choosedIn3: true,
        visitedIn6: true,
        choosedIn7: true
    }, {
        id: 10,
        image: 'app/modules/core/assets/hotels/Designhotel Elephant Prague.JPG',
        url: 'http://www.amazon.de/LG-42LB5500-LED-Backlight-Fernseher-100Hz-schwarz/dp/B00J7K1YIG/ref=sr_1_3?s=home-theater&ie=UTF8&qid=1424252862&sr=1-3',
        visitedIn2: true,
        choosedIn3: true,
        visitedIn6: true,
        choosedIn7: false
    }, {
        id: 11,
        image: 'app/modules/core/assets/hotels/Grand Majestic Plaza.JPG',
        url: 'http://www.amazon.de/Philips-40PFK4509-12-LED-Backlight-Fernseher-schwarz/dp/B00JMFCCC8/ref=sr_1_13?s=home-theater&ie=UTF8&qid=1424258647&sr=1-13',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 12,
        image: 'app/modules/core/assets/hotels/Grandior Hotel Prague.JPG',
        url: 'http://www.amazon.de/Samsung-UE40H5090-LED-Backlight-Fernseher-100Hz-schwarz/dp/B00MFWTTT4/ref=sr_1_2?s=home-theater&ie=UTF8&qid=1424252862&sr=1-2',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 13,
        image: 'app/modules/core/assets/hotels/Hilton Prague.JPG',
        url: 'http://www.amazon.de/Sony-KDL-40W605-LED-Backlight-Fernseher-Motionflow-schwarz/dp/B00I3WQKUG/ref=sr_1_9?s=home-theater&ie=UTF8&qid=1424252862&sr=1-9',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 14,
        image: 'app/modules/core/assets/hotels/Hotel Certovka.JPG',
        url: 'http://www.amazon.de/TCL-L40E3005F-LED-Backlight-Fernseher-Hotelmodus-schwarz/dp/B00IMCXX98/ref=sr_1_16?s=home-theater&ie=UTF8&qid=1424252862&sr=1-16',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 15,
        image: 'app/modules/core/assets/hotels/Hotel Perla.JPG',
        url: 'http://www.amazon.de/Telefunken-D40F275I3C-LED-Backlight-Fernseher-schwarz/dp/B00S6H90CI/ref=sr_1_19?s=home-theater&ie=UTF8&qid=1424341004&sr=1-19',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 16,
        image: 'app/modules/core/assets/hotels/Hotel UNIC Prague.JPG',
        url: 'http://www.amazon.de/Thomson-40FU3255-LED-Backlight-Fernseher-Full-HD-Hotelmodus/dp/B00EST1WMY/ref=sr_1_30?s=home-theater&ie=UTF8&qid=1424258432&sr=1-30',
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
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if($scope.hotels[i].id == id){
                $scope.hotels[i].visitedIn2 = true;
            }
        }
    };
    // Functionality in View 3
    $scope.setChoosedIn3 = function(id) {
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if($scope.hotels[i].id == id){
                if ($scope.hotels[i].choosedIn3 == false) {
                    $scope.hotels[i].choosedIn3 = true;
                }else{
                    $scope.hotels[i].choosedIn3 = false;
                }
            }
        };
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

    // isChecked Funktion used in View 4
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
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if($scope.hotels[i].id == id){
                $scope.hotels[i].visitedIn6 = true;
            }
        }
    };

    // Functionality in View 7
    $scope.setChoosedIn7 = function(id) {
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            $scope.hotels[i].choosedIn7 = false;
        };

        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if($scope.hotels[i].id == id){
                if ($scope.hotels[i].choosedIn7 == false) {
                    $scope.hotels[i].choosedIn7 = true;
                }else{
                    $scope.hotels[i].choosedIn7 = false;
                }
            }
        };
    };
    

    // Save Results in View 8
    $scope.createObject = function() {
        var visitedIn2Array = [];
        var choosedIn3Array = [];
        var visitedIn6Array = [];
        var choosedIn7Array = [];
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if ($scope.hotels[i].visitedIn2 == true) {
                visitedIn2Array.push($scope.hotels[i].id);
            }
        };
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if ($scope.hotels[i].choosedIn3 == true) {
                choosedIn3Array.push($scope.hotels[i].id);
            }
        };
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if ($scope.hotels[i].visitedIn6 == true) {
                visitedIn6Array.push($scope.hotels[i].id);
            }
        };
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if ($scope.hotels[i].choosedIn7 == true) {
                choosedIn7Array.push($scope.hotels[i].id);
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