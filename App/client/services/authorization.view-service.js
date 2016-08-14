(function () {
    'use strict';
    angular
        .module('app')
        .service('authorizationViewService', authorizationViewService);

    authorizationViewService.$inject = [
        'modalDialogService',
        'loginDialogOptions',
        'registerDialogOptions'
    ];

    function authorizationViewService(modalDialogService,
                                        loginDialogOptions,
                                        registerDialogOptions) {
        this.showLoginDialog = showLoginDialog;

        function showLoginDialog() {
            return modalDialogService.openDialog(loginDialogOptions).then(function (loginResult) {
                if (loginResult === 'register') {
                    return modalDialogService.openDialog(registerDialogOptions).then(function (registerResult) {
                        return registerResult;
                    });
                }
                return loginResult;
            });
        }
    }
})();