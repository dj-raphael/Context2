(function () {
    'use strict';
    angular
        .module('app')
        .service('timeoutDialogOptions', timeoutDialogOptions);

    timeoutDialogOptions.$inject = [];

    function timeoutDialogOptions() {
        return {
            animation: true,
            templateUrl: '/app/client/dialogs/timeout/timeout.html',
            controller: 'timeoutDialogController',
            controllerAs: 'vm',
            size: 'md',
            backdrop: 'static'
        };
    }
})();
