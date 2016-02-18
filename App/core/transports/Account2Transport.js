angular.module('contextInfo').factory('Account2Transport', [
	'$http',
	'ErrorHandlerHelper',
	'RequestHeadersHelper',
	function ($http, errorHandlerHelper, requestHeadersHelper) {
		return {
			listExternalAccount:function(){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/account2/listexternalaccount', data: null, headers: requestHeadersHelper.headers }));
			},
			removeAccount:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/account2/removeaccount', data: model, headers: requestHeadersHelper.headers }));
			},
			login:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/account2/login', data: model, headers: requestHeadersHelper.headers }));
			},
			logOff:function(){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/account2/logoff', data: null, headers: requestHeadersHelper.headers }));
			},
			getCookie:function(){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/account2/getcookie', data: null, headers: requestHeadersHelper.headers }));
			},
			register:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/account2/register', data: model, headers: requestHeadersHelper.headers }));
			},
			isAuthenticated:function(){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/account2/isauthenticated', data: null, headers: requestHeadersHelper.headers }));
			},
		}
	}
]);
