angular.module('contextInfo').factory('ThreadTransport', [
	'$http',
	'ErrorHandlerHelper',
	'RequestHeadersHelper',
	function ($http, errorHandlerHelper, requestHeadersHelper) {
		return {
			getThreads:function(m){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/thread/getthreads', data: m, headers: requestHeadersHelper.headers }));
			},
			getThreadsCount:function(url, language){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/thread/getthreadscount?url=' + url + '&language=' + language, data: null, headers: requestHeadersHelper.headers }));
			},
			searchThreads:function(title, language){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/thread/searchthreads?title=' + title + '&language=' + language, data: null, headers: requestHeadersHelper.headers }));
			},
			addThreadToUrl:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/thread/addthreadtourl', data: model, headers: requestHeadersHelper.headers }));
			},
			addThread:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/thread/addthread', data: model, headers: requestHeadersHelper.headers }));
			},
		}
	}
]);
