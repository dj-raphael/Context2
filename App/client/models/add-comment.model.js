(function () {
    'use strict';
    angular
        .module('app')
        .factory('AddCommentModel', AddCommentModel);

    AddCommentModel.$inject = [];

    function AddCommentModel() {
        return addCommentModel;
        function addCommentModel() {
            this.message = '';
            this.addFail = false;
        }
    }
})();
