(function () {
    'use strict';
    angular
        .module('app')
        .directive('cdPagination', cdPaginationDirective);

    cdPaginationDirective.$inject = [];

    function cdPaginationDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/client/directives/cd-pagination/cd-pagination.html',
            scope: {
                cdModel: '=',
                cdOnChange: '&'
            },
            controller: 'cdPaginationDirectiveController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }
})();
