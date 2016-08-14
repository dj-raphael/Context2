(function () {
    'use strict';
    angular
        .module('app')
        .controller('loginDialogController', loginDialogController);

    loginDialogController.$inject = [
        '$uibModalInstance',
        'authorizationService',
        'UserLoginModel',
        'externalLoginOptions'
    ];

    function loginDialogController($uibModalInstance, authorizationService, UserLoginModel, externalLoginOptions) {
        var vm = this;
        vm.user = new UserLoginModel();
        vm.login = login;
        vm.cancel = cancel;
        vm.showRegistration = showRegistration;
        vm.externalLogins = externalLoginOptions;
        vm.socialLogin = socialLogin;
        activate();
        function activate() {
        }

        function login() {
            return authorizationService.login(vm.user).then(function (data) {
                $uibModalInstance.close(data);
            }, function () {
                vm.user.loginFail = true;
            });
        }

        function cancel() {
            $uibModalInstance.dismiss();
        }

        function showRegistration() {
            $uibModalInstance.close('register');
        }

        function socialLogin(providerName) {
            return authorizationService.externalLogin(providerName).then(function () {
                return authorizationService.isAuthenticated().then(function (data) {
                    return isLoginSuccess(data);
                });
            });
        }

        function isLoginSuccess(authUser) {
            if (authUser.isAuthenticated) {
                $uibModalInstance.close(authUser);
            } else {
                vm.user.loginFail = true;
            }
        }
    }
})();
