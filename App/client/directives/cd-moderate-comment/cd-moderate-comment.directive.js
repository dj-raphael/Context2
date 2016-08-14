(function () {
    'use strict';
    angular
        .module('app')
        .directive('cdModerateComment', cdModerateCommentDirective);

    cdModerateCommentDirective.$inject = [];

    function cdModerateCommentDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/client/directives/cd-moderate-comment/cd-moderate-comment.html',
            scope: {
                cdShow: '=',
                cdMessage: '=',
                cdModeratorMessage: '=',
                cdOnModerateComment: '&',
                cdOnRemoveComment: '&'
            },
            controller: 'cdModerateCommentDirectiveController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }
})();
