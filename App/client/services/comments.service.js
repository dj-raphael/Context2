(function () {
    'use strict';
    angular
        .module('app')
        .service('commentsService', commentsService);

    commentsService.$inject = [
        'requestHandlerHelper',
        'commentsTransport',
        'commentsListMapper',
        'commentMapper',
        'frameMessagesService'
    ];

    function commentsService(requestHandlerHelper, commentsTransport, commentsListMapper, commentMapper, frameMessagesService) {
        this.getComments = getComments;
        this.getChildComments = getChildComments;
        this.addComment = addComment;
        this.addCommentVote = addCommentVote;
        this.updateComment = updateComment;
        this.deleteComment = deleteComment;

        function getComments(commentsListModel) {
            return requestHandlerHelper.handleRequest(commentsTransport.getComments(commentsListMapper.mapTo(commentsListModel))).then(function (data) {
                return commentsListMapper.mapExistingFrom(commentsListModel, data);
            });
        }

        function getChildComments(id) {
            return requestHandlerHelper.handleRequest(commentsTransport.getChildComments({ parentId: id })).then(function (data) {
                return commentMapper.mapTreeFrom(data.comments);
            });
        }

        function addComment(parentCommentId, message, threadId, threadCode, threadTitle, languageCode, isAuth) {
            return frameMessagesService.getExternalData().then(function (externalData) {
                var requestData = {
                    Language: languageCode,
                    ThreadId: threadId,
                    ParentId: parentCommentId,
                    Message: message,
                    Url: externalData.url,
                    Keywords: externalData.keywords,
                    ThreadCode: threadCode,
                    ThreadTitle: threadTitle
                };
                return requestHandlerHelper.handleRequest(commentsTransport.addComment(requestData)).then(function (data) {
                    return commentMapper.mapFrom(data);
                });
            });
        }

        function addCommentVote(commentId, isGood) {
            return requestHandlerHelper.handleRequest(commentsTransport.addCommentVote({ CommentId: commentId, IsGood: isGood })).then(function (data) {
                return commentMapper.mapFrom(data);
            });
        }

        function updateComment(commentId, moderateCommentModel) {
            var requestData = {
                CommentId: commentId,
                Message: moderateCommentModel.message,
                ModeratorMessage: moderateCommentModel.moderatorMessage,
                Penalty: moderateCommentModel.penalty
            };
            return requestHandlerHelper.handleRequest(commentsTransport.updateComment(requestData)).then(function (data) {
                return commentMapper.mapFrom(data);
            });
        }

        function deleteComment(commentId) {
            return requestHandlerHelper.handleRequest(commentsTransport.deleteComment({ commentId: commentId })).then(function (data) {
                return commentMapper.mapFrom(data);
            });
        }
    }
})();