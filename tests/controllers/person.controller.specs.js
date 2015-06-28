describe("App: Person Controller", function() {
	var rootScope,
		scope,
		controller;

	beforeEach(function(){
		module('app');

		var stateParams = { id: 1 };

		inject(function($injector){
			var nameService = {
				getPersonById: function(){
				}
			};

			Helper.SpyOn(nameService, 
				'getPersonById', {
					data: {
						"id": 1,
						"firstName": "John",
						"lastName": "Doe",
						"age": 33
					}
				});	

			controller = $injector.get('$controller')
			('PersonController', {
				$stateParams: stateParams,
				PersonService: nameService
			});
		});
	});

	describe("Initializations", function() {
		it("It should initialize header.", function() {
			expect(controller.header).toEqual("Doe, John");
		});
	});

});