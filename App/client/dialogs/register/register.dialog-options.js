(function () {
    'use strict';
    angular
        .module('app')
        .service('registerDialogOptions', registerDialogOptions);

    registerDialogOptions.$inject = [];

    function registerDialogOptions() {
        return {
            animation: true,
            templateUrl: '/app/client/dialogs/register/register.html',
            controller: 'registerDialogController',
            controllerAs: 'vm',
            size: 'md'
        };
    }
})();
