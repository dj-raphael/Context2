(function () {
    'use strict';
    angular
        .module('app')
        .controller('registerDialogController', registerDialogController);

    registerDialogController.$inject = [
        '$uibModalInstance',
        'authorizationService',
        'languageService',
        'UserRegisterModel'
    ];

    function registerDialogController($uibModalInstance, authorizationService, languageService, UserRegisterModel) {
        var vm = this;
        vm.user = new UserRegisterModel();
        vm.register = register;
        vm.cancel = cancel;
        vm.termsUrl = '';
        activate();
        function activate() {
            return languageService.getUrlLangRelated('getTerms').then(function (url) {
                vm.termsUrl = url;
            });
        }

        function register() {
            return authorizationService.register(vm.user).then(function (data) {
                $uibModalInstance.close(data);
            }, function () {
                vm.user.registerFail = true;
            });
        }

        function cancel() {
            $uibModalInstance.dismiss();
        }
    }
})();
