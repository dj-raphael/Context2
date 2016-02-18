angular.module('contextInfo').factory('WikiTransport', [
	'$http',
	'ErrorHandlerHelper',
	'RequestHeadersHelper',
	function ($http, errorHandlerHelper, requestHeadersHelper) {
		return {
			get:function(threadId, language){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/wiki/get?threadId=' + threadId + '&language=' + language, data: null, headers: requestHeadersHelper.headers }));
			},
			set:function(inputModel){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/wiki/set', data: inputModel, headers: requestHeadersHelper.headers }));
			},
		}
	}
]);
