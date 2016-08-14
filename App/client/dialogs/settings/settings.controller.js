(function () {
    'use strict';
    angular
        .module('app')
        .controller('settingsDialogController', settingsDialogController);

    settingsDialogController.$inject = [
        '$uibModalInstance',
        'languageService'
    ];

    function settingsDialogController($uibModalInstance, languageService) {
        var vm = this;
        vm.availableLanguages = [];
        vm.unavailableLanguages = [];
        vm.filteredUnavailableLanguages = [];
        vm.langFilter = '';
        vm.changeFilter = changeFilter;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.setUnavailable = setUnavailable;
        vm.setAvailable = setAvailable;

        activate();
        function activate() {
            return languageService.getAvailableLanguages().then(function (availableLanguages) {
                vm.availableLanguages = availableLanguages;
                return languageService.getUnavailableLanguages().then(function (unavailableLanguages) {
                    vm.filteredUnavailableLanguages = vm.unavailableLanguages = unavailableLanguages;
                });
            });
        }

        function changeFilter() {
            vm.filteredUnavailableLanguages = vm.unavailableLanguages.filter(function (item) {
                return item.label.toLowerCase().indexOf(vm.langFilter.toLowerCase()) > -1;
            });
        }

        function ok() {
            languageService.setAvailableLanguages(vm.availableLanguages);
            $uibModalInstance.close(vm.availableLanguages);
        }

        function cancel() {
            $uibModalInstance.dismiss();
        }

        function setUnavailable(lang) {
            var index = vm.availableLanguages.indexOf(lang);
            vm.availableLanguages.splice(index, 1);
            vm.unavailableLanguages.unshift(lang);
            changeFilter();
        }

        function setAvailable(lang) {
            var index = vm.unavailableLanguages.indexOf(lang);
            vm.unavailableLanguages.splice(index, 1);
            changeFilter();
            vm.availableLanguages.push(lang);
        }
    }
})();
