(function () {
    'use strict';
    angular
        .module('app')
        .service('modalDialogService', modalDialogService);

    modalDialogService.$inject = ['$uibModal'];

    function modalDialogService($uibModal) {
        this.openDialog = openDialog;
        function openDialog(model, dialogDataFunc) {
            var dialogModel = angular.extend({}, model);
            if (typeof dialogDataFunc === 'function') {
                dialogModel = angular.extend(dialogModel, { resolve: { dialogData: dialogDataFunc } });
            }
            return $uibModal.open(dialogModel).result;
        }
    }
})();