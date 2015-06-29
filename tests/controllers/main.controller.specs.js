/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
/* global inject, Helper */
describe("App: Main Controller", function() {
	var rootScope,
		scope,
		controller;

	beforeEach(function(){
		module('app');

		inject(function($injector){
			var personService = {
				getPersons: function(){
				}
			};

			Helper.SpyOn(personService, 
				'getPersons', {
					data: {
						"persons": [{
							"id": 1,
							"firstName": "John",
							"lastName": "Doe",
							"age": 33
						}, {
							"id": 2,
							"firstName": "Peter",
							"lastName": "Reyes",
							"age": 35
						}]
				  	}
				});	

			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			controller = $injector.get('$controller')('MainController', {
				PersonService: personService	
			});
		});
	});

	describe("Initializations", function() {
		it("It should initialize person list.", function(){
			expect(controller.persons.length).toBeGreaterThan(0);	
		});

		it("It should initialize header", function() {
			expect(controller.header).not.toBe(null);
		});
	});
});