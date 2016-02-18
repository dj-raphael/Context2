angular.module('contextInfo').factory('BannerTransport', [
	'$http',
	'ErrorHandlerHelper',
	'RequestHeadersHelper',
	function ($http, errorHandlerHelper, requestHeadersHelper) {
		return {
			getBanners:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/banner/getbanners', data: model, headers: requestHeadersHelper.headers }));
			},
		}
	}
]);
