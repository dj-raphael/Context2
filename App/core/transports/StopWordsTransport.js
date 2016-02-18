angular.module('contextInfo').factory('StopWordsTransport', [
	'$http',
	'ErrorHandlerHelper',
	'RequestHeadersHelper',
	function ($http, errorHandlerHelper, requestHeadersHelper) {
		return {
			get:function(domain, callback){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/stopwords/get?domain=' + domain + '&callback=' + callback, data: null, headers: requestHeadersHelper.headers }));
			},
		}
	}
]);
