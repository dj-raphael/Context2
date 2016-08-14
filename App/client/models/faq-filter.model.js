(function () {
    'use strict';
    angular
        .module('app')
        .factory('FaqFilterModel', FaqFilterModel);

    FaqFilterModel.$inject = [];

    function FaqFilterModel() {
        return faqFilterModel;
        function faqFilterModel() {
            this.languageCode = null,
            this.threadId = null
        }
    }
})();
