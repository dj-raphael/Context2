angular.module('contextInfo').factory('LanguageTransport', [
	'$http',
	'ErrorHandlerHelper',
	'RequestHeadersHelper',
	function ($http, errorHandlerHelper, requestHeadersHelper) {
		return {
			getAllowedLanguages:function(){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/language/getallowedlanguages', data: null, headers: requestHeadersHelper.headers }));
			},
		}
	}
]);
