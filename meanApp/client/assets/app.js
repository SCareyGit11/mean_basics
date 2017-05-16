var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
        .when('/new',{        	
            templateUrl: 'partials/new.html',

            
        })
        .when('/edit/:_id',{
            templateUrl: 'partials/edit.html',
            

        })
        
        .otherwise({
          redirectTo: '/'
        });
});