angular.module('app.experiment')
	.controller('Experiment1Controller', Experiment1Controller);

Experiment1Controller.$inject = ['$location'];

function Experiment1Controller($scope, $location){
    
    $scope.mainFunction0 = function(userNumber){
        // saveUserNumber(userNumber);
        // $location.path('/2');
        console.log('asdf');
    };

    function saveUserNumber(userNumber) {
        $scope.userNumber = userNumber;
    }
}

// }
// 	(function () {
//     'use strict';

//     angular
//         .module('app.admin')
//         .controller('AdminController', AdminController);

//     AdminController.$inject = ['logger'];
//     /* @ngInject */
//     function AdminController(logger) {
//         var vm = this;
//         vm.title = 'Admin';

//         activate();

//         function activate() {
//             logger.info('Activated Admin View');
//         }
//     }
// })();
