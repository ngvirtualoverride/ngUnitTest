(function(app){
	'use strict';

	var config = (function(){

		config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

		function config($urlRouterProvider, $stateProvider, $locationProvider){
			
			$urlRouterProvider.otherwise('/');
		    $locationProvider.html5Mode(true);

			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'views/main.html',
					controller: 'MainController',
					controllerAs: 'main'		   		  	
				})
				.state('person', {
					url: '/person/:id',
					templateUrl: 'views/person.html',
					controller: 'PersonController',
					controllerAs: 'person'
				});
  		}

  		return config;
  	})();

	app.config(config);

})(angular.module('app'));
