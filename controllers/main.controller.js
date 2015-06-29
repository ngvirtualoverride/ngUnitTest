/// <reference path="../typings/angularjs/angular.d.ts"/>
(function(app){
	'use strict';

	 var controller = (function(){
		var vm;
		 
		controller.$inject = ['PersonService'];
		 
  	 	function controller(PersonService){		
			vm = this;   
			
			this.header = 'Person Information';   
			   
			PersonService
				.getPersons()
				.then(function(response){
					vm.persons = response.data.persons;
				});
  	 	}

	 	return controller;
	 })();

	 app.controller('MainController', controller);

})(angular.module('app'));
