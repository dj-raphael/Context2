(function () {
    'use strict';
    angular
        .module('app')
        .factory('ThreadInfoModel', ThreadInfoModel);

    ThreadInfoModel.$inject = [];

    function ThreadInfoModel(layoutEnum) {
        return threadInfoModel;
        function threadInfoModel() {
            this.id = null;
            this.title = '';
            this.code = '';
            this.rating = 0;
            this.weight = 0;
            this.isDiscussedHere = false;
            this.commentsQty = 0;
            this.newCommentsQty = 0;
            this.isModerator = false;
        }
    }
})();
