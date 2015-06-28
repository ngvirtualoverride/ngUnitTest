(function(app){
	'use strict';

	var personService = (function(){
		var vm, http, q;

		personService.$inject = ['$http', '$q'];

  	 	function personService($http, $q){
  	 		vm = this;

  	 		http = $http;
  	 		q = $q;
  	 	}

  	 	personService.prototype.getPersonById = function(id){
  	 		var defered = q.defer();

  	 		http.get('./data/persons.json')
				.then(function(result){		
					var person = null;

					var persons = result.data.persons
							.filter(function(o){
								return o.id === id;
							});

					if (persons && persons.length > 0){
						person = persons[0];
					}

					defered.resolve({ data: person });
				}, function(error){
					console.log(error);
				});

  	 		return defered.promise;  	 		
  	 	};

	 	return personService;
	})();

	app.service('PersonService', personService);

})(angular.module('app'));