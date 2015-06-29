/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
describe("App: Person Service", function() {
	var personService,
		httpBackend;

	beforeEach(function(){
		module('app');

		inject(function($injector){
			personService = $injector.get('PersonService');
			httpBackend = $injector.get('$httpBackend');
		});
	});

	describe("Service null check", function() {
		it("It should not be null.", function() {
			expect(personService).not.toBe(null);
		});

		it("It should not be undefined.", function() {
			expect(personService).not.toBeUndefined();
		});
	});

	describe("Functions and Methods", function() {
		
		beforeEach(function(){
			httpBackend
				.expectGET("./data/persons.json")
				.respond({
					"persons": [{
						"id": 1,
						"firstName": "John",
						"lastName": "Doe",
						"age": 33
					},{
						"id": 2,
						"firstName": "Peter",
						"lastName": "Reyes",
						"age": 35
					}]
				});
		});
		
		it("It should get Person list.", function(){
			var result,
				expectedResult = {
					"persons": [{
						"id": 1,
						"firstName": "John",
						"lastName": "Doe",
						"age": 33
					},{
						"id": 2,
						"firstName": "Peter",
						"lastName": "Reyes",
						"age": 35
					}]
				};
				
			personService
				.getPersons()
				.then(function(respose){
					result = respose.data;
				});
			
			httpBackend.flush();
			
			expect(result).toEqual(expectedResult);
		});

		it("It should get Person by id 1.", function() {
			var result, 
				expectedResult = {
					"id": 1,
					"firstName": "John",
					"lastName": "Doe",
					"age": 33					
				},
				id = 1;

			personService
				.getPersonById(id)
				.then(function(respose){
					result = respose.data;
				});

			httpBackend.flush();

			expect(result).toEqual(expectedResult);
		});

	});

});