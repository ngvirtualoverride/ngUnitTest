(function(app){
	'use strict';

	 var controller = (function(){
  	 	function controller(){
			this.menus = [{
				name: 'Persons',
				link: '/persons'
			}];

			this.header = 'Person Information';
  	 	}

	 	return controller;
	 })();

	 app.controller('MainController', controller);

})(angular.module('app'));
