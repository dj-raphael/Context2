(function () {
    'use strict';
    angular
        .module('app')
        .factory('CommentModel', CommentModel);

    CommentModel.$inject = [];

    function CommentModel() {
        return commentModel;
        function commentModel() {
            this.id = null;
            this.created = null;
            this.hasChildren = false;
            this.message = '';
            this.parentId = null;
            this.userName = '';
            this.voteDown = 0;
            this.voteUp = 0;
            this.children = null;
            this.voteSum = 0;
            this.showChildren = false;
            this.showAddComment = false;
            this.childrenCount = 0;
            this.showModerate = false;
            this.moderatorMessage = '';
            this.isDeleted = false;
            this.moderatedBy = null;
            this.moderatedDate = null;
            this.originalMessage = '';
            this.moderatedByName = '';
        }
    }
})();
