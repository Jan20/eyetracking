angular
	.module('app.admin')
	.config(adminRoute);

function adminRoute($routeProvider){
	$routeProvider
    	  .when('/0', {
    	    templateUrl: 'app/admin/admin/admin.view.html',
    	    controller: 'AdminController'
    	  });
}