describe("App: Main Controller", function() {
	var rootScope,
		scope,
		controller;

	beforeEach(function(){
		module('app');

		inject(function($injector){
			var nameService = {
				getPersons: function(){
				}
			};

			Helper.SpyOn(nameService, 
				'getPersons', {
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


			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			controller = $injector.get('$controller')('MainController', { });
		});
	});

	describe("Initializations", function() {
		it("It should initialize menu.", function() {
			expect(controller.menus.length).toBeGreaterThan(0);
		});

		it("It should initialize header", function() {
			expect(controller.header).not.toBe(null);
		});
	});
});