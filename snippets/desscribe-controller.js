describe("App: Main Controller", function() {
	var rootScope,
		scope,
		controller;

	beforeEach(function(){
		module('app');

		inject(function($injector){
			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			controller = $injector.get('$controller')
			('MainController', {
				$scope: scope
			});
		});
	});

});