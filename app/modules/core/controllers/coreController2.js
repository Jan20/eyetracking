eyetrackingApp.controller("coreController2", ['$scope', function($scope) {
    // View 1
    $scope.userNumber = null;
    $scope.hotels = [{
        id: 9,
        image: 'app/modules/core/assets/hotels/Boutique Hotel Seven Days.JPG',
        url: 'http://de.hotels.com/hotel/details.html?q-room-0-adults=1&MGT=2&SYE=3&q-room-0-children=0&tab=description&YGF=14&ZSX=0&q-localised-check-out=20.03.2016&q-localised-check-in=18.03.2016&JHR=2&pa=4&hotel-id=208050&FPQ=2&WOD=5&WOE=7&ZSX=1&SYE=3&MGT=2&YGF=14&WOD=5&WOE=7&JHR=2&FPQ=2',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 10,
        image: 'app/modules/core/assets/hotels/Designhotel Elephant Prague.JPG',
        url: 'http://de.hotels.com/hotel/details.html?q-room-0-adults=1&MGT=2&SYE=3&q-room-0-children=0&tab=description&YGF=14&ZSX=0&q-localised-check-out=20.03.2016&q-localised-check-in=18.03.2016&JHR=2&pa=8&hotel-id=309570&FPQ=2&WOD=5&WOE=7&ZSX=1&SYE=3&MGT=2&YGF=14&WOD=5&WOE=7&JHR=2&FPQ=2',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 11,
        image: 'app/modules/core/assets/hotels/Grand Majestic Plaza.JPG',
        url: 'http://de.hotels.com/hotel/details.html?q-room-0-adults=1&MGT=2&SYE=3&q-room-0-children=0&tab=description&YGF=14&ZSX=0&q-localised-check-out=20.03.2016&q-localised-check-in=18.03.2016&JHR=2&pa=6&hotel-id=325392&FPQ=2&WOD=5&WOE=7&ZSX=1&SYE=3&MGT=2&YGF=14&WOD=5&WOE=7&JHR=2&FPQ=2',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 12,
        image: 'app/modules/core/assets/hotels/Grandior Hotel Prague.JPG',
        url: 'http://de.hotels.com/hotel/details.html?q-room-0-adults=1&MGT=2&SYE=3&q-room-0-children=0&tab=description&YGF=14&ZSX=0&q-localised-check-out=20.03.2016&q-localised-check-in=18.03.2016&JHR=2&pa=3&hotel-id=447952&FPQ=2&WOD=5&WOE=7&ZSX=1&SYE=3&MGT=2&YGF=14&WOD=5&WOE=7&JHR=2&FPQ=2',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 13,
        image: 'app/modules/core/assets/hotels/Hilton Prague.JPG',
        url: 'http://de.hotels.com/hotel/details.html?q-room-0-adults=1&MGT=2&SYE=3&q-room-0-children=0&tab=description&YGF=14&ZSX=0&q-localised-check-out=20.03.2016&q-localised-check-in=18.03.2016&JHR=2&pa=5&hotel-id=110101&FPQ=2&WOD=5&WOE=7&ZSX=1&SYE=3&MGT=2&YGF=14&WOD=5&WOE=7&JHR=2&FPQ=2',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 14,
        image: 'app/modules/core/assets/hotels/Hotel Certovka.JPG',
        url: 'http://de.hotels.com/hotel/details.html?q-room-0-adults=1&MGT=2&SYE=3&q-room-0-children=0&tab=description&YGF=14&ZSX=0&q-localised-check-out=20.03.2016&q-localised-check-in=18.03.2016&JHR=2&pa=13&hotel-id=492486&FPQ=2&WOD=5&WOE=7&ZSX=1&SYE=3&MGT=2&YGF=14&WOD=5&WOE=7&JHR=2&FPQ=2',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 15,
        image: 'app/modules/core/assets/hotels/Hotel Perla.JPG',
        url: 'http://de.hotels.com/hotel/details.html?q-room-0-adults=1&MGT=2&SYE=3&q-room-0-children=0&tab=description&YGF=14&ZSX=0&q-localised-check-out=20.03.2016&q-localised-check-in=18.03.2016&JHR=2&pa=10&hotel-id=253315&FPQ=2&WOD=5&WOE=7&ZSX=1&SYE=3&MGT=2&YGF=14&WOD=5&WOE=7&JHR=2&FPQ=2',
        visitedIn2: false,
        choosedIn3: false,
        visitedIn6: false,
        choosedIn7: false
    }, {
        id: 16,
        image: 'app/modules/core/assets/hotels/Hotel UNIC Prague.JPG',
        url: 'http://de.hotels.com/hotel/details.html?q-room-0-adults=1&MGT=2&SYE=3&q-room-0-children=0&tab=description&YGF=14&ZSX=0&q-localised-check-out=20.03.2016&q-localised-check-in=18.03.2016&JHR=2&pa=2&hotel-id=467546&FPQ=2&WOD=5&WOE=7&ZSX=1&SYE=3&MGT=2&YGF=14&WOD=5&WOE=7&JHR=2&FPQ=2',
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
        var visitedIn5Array = [];
        var choosedIn6Array = [];
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
            if ($scope.hotels[i].visitedIn5 == true) {
                visitedIn5Array.push($scope.hotels[i].id);
            }
        };
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if ($scope.hotels[i].choosedIn6 == true) {
                choosedIn6Array.push($scope.hotels[i].id);
            }
        };
        var newDataSet = {
            ExperimentNr: $scope.userNumber,
            visitedIn2: visitedIn2Array,
            choosedIn3: choosedIn3Array,
            visitedIn6: visitedIn5Array,
            choosedIn7: choosedIn6Array
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
    $scope.csvHeader = ['experimentNr', 'visitedIn2', 'choosedIn3', 'visitedIn5', 'choosedIn6'];

    $scope.export = function exportData() {
        alasql("SELECT * INTO CSV('eyetracking.csv',{headers:true}) FROM ?",[$scope.eyetrackingData]);
    //alasql('SELECT * INTO CSV("test.csv". {headers:true}) FROM ?',[data]);
    }



}]);