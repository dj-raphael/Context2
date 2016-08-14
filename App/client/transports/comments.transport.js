(function () {
    'use strict';
    angular
        .module('app')
        .service('commentsTransport', commentsTransport);

    commentsTransport.$inject = [
        '$q',
        '$http',
        'configService'
    ];

    function commentsTransport($q, $http, configService) {
        this.getComments = getComments;
        this.getChildComments = getChildComments;
        this.addComment = addComment;
        this.addCommentVote = addCommentVote;
        this.updateComment = updateComment;
        this.deleteComment = deleteComment;

        function getComments(params) {
            return $http.get(configService.getUrl('getComments'), { params: params }).then(function (data) {               
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function getChildComments(params) {
            return $http.get(configService.getUrl('getComments'), { params: params }).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function addComment(params) {
            /*
            true
            false
            int
            status 401
            */
            return $http.post(configService.getUrl('addComment'), params).then(function (data) {
                 if (data.data.ThreadId != null) {
                    if (params.ParentId == null) {
                        return getComments({ language: params.Language, threadId: data.data.ThreadId, page: 0, count: 1 }).then(function (newcomments) {
                            return $q.resolve(newcomments.comments[0]);
                        });
                    } else {
                        return getChildComments({ parentId: params.ParentId }).then(function (newcomments) {
                            return $q.resolve(newcomments.comments[newcomments.comments.length-1]);
                        });
                    }
                } else if (data.data === false) {
                    return $q.reject(true);
                } else {                    
                    var timeout = parseInt(data.data, 10);
                    if (!isNaN(timeout)) {
                        return $q.reject({
                            timeout: timeout
                        });
                    } else {
                        return $q.reject(null);
                    }
                }
            }, function (data) {
                if (data.status === 401 || data.status === 409) {
                    return $q.reject(true);
                } else {
                    return $q.reject(null);
                }
            });
        }

        function addCommentVote(params) {
            return $http.post(configService.getUrl('addCommentVote'), params).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function updateComment(params) {
            return $http.post(configService.getUrl('updateComment'), params).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function deleteComment(params) {
            return $http.get(configService.getUrl('deleteComment'), { params: params }).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }
    }
})();
