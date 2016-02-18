angular.module('contextInfo').factory('CommentTransport', [
	'$http',
	'ErrorHandlerHelper',
	'RequestHeadersHelper',
	function ($http, errorHandlerHelper, requestHeadersHelper) {
		return {
			addCommentVotes:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/comment/addcommentvotes', data: model, headers: requestHeadersHelper.headers }));
			},
			addComment:function(model){
				return errorHandlerHelper.handleError($http({ method: 'POST', url: 'api/comment/addcomment', data: model, headers: requestHeadersHelper.headers }));
			},
			getComments:function(parentId, deep){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/comment/getcomments?parentId=' + parentId + '&deep=' + deep, data: null, headers: requestHeadersHelper.headers }));
			},
			getComments:function(language, threadId, page, count){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/comment/getcomments?language=' + language + '&threadId=' + threadId + '&page=' + page + '&count=' + count, data: null, headers: requestHeadersHelper.headers }));
			},
			getComments:function(language, threadId, dateFrom){
				return errorHandlerHelper.handleError($http({ method: 'GET', url: 'api/comment/getcomments?language=' + language + '&threadId=' + threadId + '&dateFrom=' + dateFrom, data: null, headers: requestHeadersHelper.headers }));
			},
		}
	}
]);
