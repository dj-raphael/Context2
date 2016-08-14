(function () {
    'use strict';
    angular
        .module('app')
        .service('commentsViewService', commentsViewService);

    commentsViewService.$inject = [
        '$q',
        'commentsService',
        'modalDialogService',
        'timeoutDialogOptions'
    ];

    function commentsViewService($q, commentsService, modalDialogService, timeoutDialogOptions) {
        this.getComments = getComments;
        this.expandComment = expandComment;
        this.collapseComment = collapseComment;
        this.toggleAddComment = toggleAddComment;
        this.addComment = addComment;
        this.vote = vote;
        this.canVote = canVote;
        this.loadMoreComments = loadMoreComments;
        this.toggleModerate = toggleModerate;

        function getComments(commentsListModel, threadId, languageCode) {
            commentsListModel.filter = {
                languageCode: languageCode,
                threadId: threadId
            };

            return commentsService.getComments(commentsListModel);
        }

        function expandComment(commentModel) {
            if (commentModel.children.length === 0) {
                return commentsService.getChildComments(commentModel.id).then(function (data) {
                    commentModel.children = data;
                    commentModel.showChildren = true;
                });
            } else {
                commentModel.showChildren = true;
            }
        }

        function collapseComment(comment) {
            comment.showChildren = false;
        }

        function toggleAddComment(comment) {
            comment.showAddComment = !comment.showAddComment;
        }

        function toggleModerate(comment) {
            comment.showModerate = !comment.showModerate;
        }

        function addComment(parentComment, addCommentModel, threadId, topMenuModel, isAuth) {
            return commentsService.addComment(parentComment.id,
                                            addCommentModel.message,
                                            threadId,
                                            topMenuModel.threadCode,
                                            topMenuModel.threadTitle,
                                            topMenuModel.language.code,
                                            isAuth).then(function (comment) {
                                                if (parentComment.id != null) {
                                                    parentComment.children.push(comment);
                                                    parentComment.hasChildren = true;
                                                    parentComment.showChildren = true;
                                                    parentComment.showAddComment = false;
                                                }
                                                addCommentModel.addFail = false;
                                                addCommentModel.message = '';

                                                return comment;
                                            }, function (data) {
                                                if (data && data.timeout) {
                                                    return modalDialogService.openDialog(timeoutDialogOptions, function () {
                                                        return data.timeout;
                                                    }).then(function () {
                                                        return $q.reject();
                                                    });
                                                } else {
                                                    addCommentModel.addFail = true;
                                                }
                                                return $q.reject();
                                            });
        }

        function vote(comment, isGood) {
            return commentsService.addCommentVote(comment.id, isGood).then(function (data) {
                comment.voteDown = data.voteDown;
                comment.voteUp = data.voteUp;
                comment.voteSum = data.voteSum;
            });
        }

        function canVote(comment, authUserModel) {
            return authUserModel.isAuthenticated && comment.userName != authUserModel.name;
        }

        function loadMoreComments(commentsListModel, threadId, languageCode) {
            commentsListModel.filter = {
                languageCode: languageCode,
                threadId: threadId
            };

            var list = commentsListModel.list;
            commentsListModel.paginationModel.current++;
            if (commentsListModel.paginationModel.current <= commentsListModel.paginationModel.pagesCount) {
                return commentsService.getComments(commentsListModel).then(function (commentsList) {
                    commentsList.list = list.concat(commentsList.list);
                    return commentsList;
                });
            } else {
                return $q.resolve(commentsListModel);
            }
        }
    }
})();