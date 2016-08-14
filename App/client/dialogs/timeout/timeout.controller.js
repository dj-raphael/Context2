(function () {
    'use strict';
    angular
        .module('app')
        .controller('timeoutDialogController', timeoutDialogController);

    timeoutDialogController.$inject = [
        '$uibModalInstance',
        '$interval',
        'moment',
        'dialogData'
    ];

    function timeoutDialogController($uibModalInstance, $interval, moment, dialogData) {
        var vm = this,
            intervalPromise = null;
        vm.ok = ok;
        vm.now = moment();
        vm.timeoutFinish = dialogData.timeout;
        activate();

        function activate() {
            return countdown(dialogData.timeout).then(function () {
                $uibModalInstance.close();
            });
        }

        function countdown(timeout) {
            intervalPromise = $interval(function () {
                vm.timeoutFinish -= 1000;
                vm.now = moment();
            }, 1000, Math.floor(timeout / 1000));
            return intervalPromise;
        }

        function ok() {
            $interval.cancel(intervalPromise);
            $uibModalInstance.close();
        }
    }
})();
