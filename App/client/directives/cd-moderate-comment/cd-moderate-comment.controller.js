(function () {
    'use strict';
    angular
        .module('app')
        .controller('cdModerateCommentDirectiveController', cdModerateCommentDirectiveController);

    cdModerateCommentDirectiveController.$inject = [
        'ModerateCommentModel'
    ];

    function cdModerateCommentDirectiveController(ModerateCommentModel) {
        var vm = this;
        vm.close = close;
        vm.model = new ModerateCommentModel();
        vm.moderateComment = moderateComment;
        vm.removeComment = removeComment;
        activate();

        function activate() {
            vm.model.message = vm.cdMessage;
            vm.model.moderatorMessage = vm.cdModeratorMessage;
        }

        function close() {
            vm.cdShow = false;
        }

        function moderateComment() {
            vm.cdOnModerateComment({ moderateCommentModel: vm.model });
        }

        function removeComment() {
            vm.cdOnRemoveComment();
        }
    }
})();