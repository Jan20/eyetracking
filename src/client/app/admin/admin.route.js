angular
	.module('app.admin')
	.config(adminRoute);

function adminRoute($routeProvider){
	$routeProvider
    	  .when('/admin', {
    	    templateUrl: 'app/admin/admin.view.html',
    	    controller: 'AdminController'
    	  });
}