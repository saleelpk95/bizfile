angular
	.module('bizfileApp')
	.factory('bizfileService', ['$http', '$location', 'REST_END_POINT', function($http, $location, REST_END_POINT){

		var bizfileService = {
			search: search
		};
		return bizfileService;

		function search(postData) {
			console.log(postData);
			console.log(REST_END_POINT().SEARCH_URL);
			var entity = $http({
				withCredentials: true,
				url: REST_END_POINT().SEARCH_URL,
				method: "POST",
				data: postData
			});
			return entity;
		};
}]);