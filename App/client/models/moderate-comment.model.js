(function () {
    'use strict';
    angular
        .module('app')
        .factory('ModerateCommentModel', ModerateCommentModel);

    ModerateCommentModel.$inject = [];

    function ModerateCommentModel() {
        return moderateCommentModel;
        function moderateCommentModel() {
            this.message = '';
            this.moderatorMessage = '';
            this.moderateFail = false;
            this.penalty = 0;
        }
    }
})();
