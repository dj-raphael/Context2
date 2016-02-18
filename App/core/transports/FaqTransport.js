angular.module('contextInfo').factory('FaqTransport', [
	'$http',
	'ErrorHandlerHelper',
	'RequestHeadersHelper',
	function ($http, errorHandlerHelper, requestHeadersHelper) {
		return {
			search:function(query, threadId, language, start, qty){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/faq/search?query=' + query + '&threadId=' + threadId + '&language=' + language + '&start=' + start + '&qty=' + qty, data: null, headers: requestHeadersHelper.headers }));
			},
			addFaqVotes:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/faq/addfaqvotes', data: model, headers: requestHeadersHelper.headers }));
			},
			addQuestion:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/faq/addquestion', data: model, headers: requestHeadersHelper.headers }));
			},
			updateQuestion:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/faq/updatequestion', data: model, headers: requestHeadersHelper.headers }));
			},
			getList:function(threadId, language, start, qty){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/faq/getlist?threadId=' + threadId + '&language=' + language + '&start=' + start + '&qty=' + qty, data: null, headers: requestHeadersHelper.headers }));
			},
		}
	}
]);
