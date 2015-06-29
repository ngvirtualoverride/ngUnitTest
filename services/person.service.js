(function(app){
	'use strict';

	var personService = (function(){
		var vm, http, q, _model;

		personService.$inject = ['$http', '$q'];

  	 	function personService($http, $q){
  	 		vm = this;

  	 		http = $http;
  	 		q = $q;
  	 	}
		  
		Object.defineProperty(personService.prototype, 'model', {
			get: function(){ return _model; }, 
			set: function(value) { _model = value; }
		});
		   
		personService.prototype.getPersons = function(){
			return http.get('./data/persons.json');	
		};

  	 	personService.prototype.getPersonById = function(id){
  	 		var defered = q.defer();
			   
			var personId = parseInt(id);

  	 		http.get('./data/persons.json')
				.then(function(result){		
					var person = null;

					var persons = result.data.persons
							.filter(function(o){
								return o.id === personId;
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