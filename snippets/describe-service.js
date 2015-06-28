describe("App: Person Service", function() {
	var nameService,
		httpBackend;

	beforeEach(function(){
		module('app');

		inject(function($injector){
			nameService = $injector.get('NameService');
			httpBackend = $injector.get('$httpBackend');
		});
	});

});