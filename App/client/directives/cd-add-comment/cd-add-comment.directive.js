(function () {
    'use strict';
    angular
        .module('app')
        .directive('cdAddComment', cdAddCommentDirective);

    cdAddCommentDirective.$inject = [];

    function cdAddCommentDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/client/directives/cd-add-comment/cd-add-comment.html',
            scope: {
                cdShow: '=',
                cdHideLogin: '=',
                cdOnAddComment: '&',
                cdOnLogin: '&'
            },
            controller: 'cdAddCommentDirectiveController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }
})();
