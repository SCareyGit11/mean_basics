var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
        .when
        .when('/new_question',{        	
            templateUrl: 'partials/new_question.html',

            
        })
        .when('/question/:_id'),{
            templateUrl: 'partials/show_question.html',
        }
        .when('/question/:_id/new_answer',{
            templateUrl: 'partials/new_answer.html',
            

        })
        
        .otherwise({
          redirectTo: '/#index'
        });
});