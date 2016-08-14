(function () {
    'use strict';
    angular
        .module('app')
        .service('loginDialogOptions', loginDialogOptions);

    loginDialogOptions.$inject = [];

    function loginDialogOptions() {
        return {
            animation: true,
            templateUrl: '/app/client/dialogs/login/login.html',
            controller: 'loginDialogController',
            controllerAs: 'vm',
            size: 'md'
        };
    }
})();
