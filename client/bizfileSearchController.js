angular
	.module('bizfileApp')
	.controller('BizfileSearchController', ['bizfileService', function(bizfileService){
	
	var vm = this;
	vm.entity_name = '';

	vm.submit = function(){
		var postData = {
						"entity_name":vm.entity_name
						}

		bizfileService.search(postData).then(function(response) {
				vm.entitySearch = response.data;
			}).catch(function(error){
				alert(error)
			});
	}
}]);