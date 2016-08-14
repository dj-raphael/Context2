(function () {
    'use strict';
    angular
        .module('app')
        .controller('cdEditQuestionDirectiveController', cdEditQuestionDirectiveController);

    cdEditQuestionDirectiveController.$inject = [];

    function cdEditQuestionDirectiveController() {
        var vm = this;
        vm.close = close;
        vm.save = save;

        function close() {
            vm.cdModel.editMode = false;
        }

        function save() {
            vm.cdOnSave({ faqModel: vm.cdModel });
        }
    }
})();