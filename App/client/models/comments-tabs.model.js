(function () {
    'use strict';
    angular
        .module('app')
        .factory('CommentsTabsModel', CommentsTabsModel);

    CommentsTabsModel.$inject = [
        'commentsTabsEnum'
    ];

    function CommentsTabsModel(commentsTabsEnum) {
        return commentsTabsModel;
        function commentsTabsModel() {
            this.showWiki = false;
            this.showFaq = false;
            this.active = commentsTabsEnum.discussion;
        }
    }
})();
