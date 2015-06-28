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
				})
				.state('person.detail', {
					url: '/person/:id/detail',
					templateUrl: 'views/person.detail.html',
					controller: 'PersonDetailController',
					controllerAs: 'personDetail'
				})
				.state('person.edit', {
					url: '/person/:id/edit',
					templateUrl: 'views/person.detail.html',
					controller: 'PersonDetailController',
					controllerAs: 'personDetail'
				})
				.state('person.delete', {
					url: '/person/:id/delete',
					templateUrl: 'views/person.detail.html',
					controller: 'PersonDetailController',
					controllerAs: 'personDetail'
				});
  		}

  		return config;
  	})();

	app.config(config);

})(angular.module('app'));
