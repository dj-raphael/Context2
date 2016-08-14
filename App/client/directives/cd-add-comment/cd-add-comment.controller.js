(function () {
    'use strict';
    angular
        .module('app')
        .controller('cdAddCommentDirectiveController', cdAddCommentDirectiveController);

    cdAddCommentDirectiveController.$inject = [
        'AddCommentModel'
    ];

    function cdAddCommentDirectiveController(AddCommentModel) {
        var vm = this;
        vm.close = close;
        vm.model = new AddCommentModel();
        vm.addComment = addComment;
        vm.login = login;

        function close() {
            vm.cdShow = false;
        }

        function addComment() {
            vm.cdOnAddComment({ addCommentModel: vm.model });
        }

        function login() {
            vm.cdOnLogin();
        }
    }
})();