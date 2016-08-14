(function () {
    'use strict';
    angular
        .module('app')
        .factory('CommentsFilterModel', CommentsFilterModel);

    CommentsFilterModel.$inject = [];

    function CommentsFilterModel() {
        return commentsFilterModel;
        function commentsFilterModel() {
            this.languageCode = null,
            this.threadId = null
        }
    }
})();
