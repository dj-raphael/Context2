(function () {
    'use strict';
    angular
        .module('app')
        .factory('FaqModel', FaqModel);

    FaqModel.$inject = [];

    function FaqModel() {
        return faqModel;
        function faqModel() {
            this.id = null;
            this.question = '';
            this.answer = '';
            this.voteSum = 0;
            this.editMode = false;
            this.saveFail = false;
            this.expanded = false;
        }
    }
})();
