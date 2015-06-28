var Helper;
(function(Helper){
	'use strict';

	var spyOnHelper = function(service, fnName, result){
		return spyOn(service, fnName).and.returnValue({
			then: function(fn){
				fn(result);
			}
		});
	};

	Helper.SpyOn = spyOnHelper;

})(Helper || (Helper = {}));