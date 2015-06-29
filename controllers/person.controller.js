(function(app){
	'use strict';

	var controller = (function(){
	    var vm;

		controller.$inject = ['$stateParams', 'PersonService'];

  	 	function controller($stateParams, PersonService){
        	vm = this;

  	 		PersonService
	 			.getPersonById($stateParams.id)
	 			.then(function(response){
	 				vm.header = response.data.lastName
	 						.concat(', ')
	 						.concat(response.data.firstName);
	 			});
  	 	}

	 	 return controller;
	})();

	app.controller('PersonController', controller);

})(angular.module('app'));