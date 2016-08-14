(function () {
    'use strict';
    angular
        .module('app')
        .directive('cdEditQuestion', cdEditQuestionDirective);

    cdEditQuestionDirective.$inject = [];

    function cdEditQuestionDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/client/directives/cd-edit-question/cd-edit-question.html',
            scope: {
                cdModel: '=',                
                cdOnSave: '&'
            },
            controller: 'cdEditQuestionDirectiveController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }
})();
