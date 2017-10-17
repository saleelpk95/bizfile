angular
	.module('bizfileApp')
	.constant('REST_END_POINT', (function() {
  // add the host to allowed_host on backend
  var host = 'http://localhost:8000';
  // var host = 'http://20d98c43.ngrok.io';
  
  return {
					SEARCH_URL: host+'/entity/search/',
				};
}));