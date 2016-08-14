(function () {
    'use strict';
    angular
        .module('app')
        .directive('cdWindowFocus', cdWindowFocusDirective);

    cdWindowFocusDirective.$inject = [];

    function cdWindowFocusDirective() {
        var directive = {
            restrict: 'A',            
            scope: true,
            controller: 'cdWindowFocusDirectiveController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }
})();
