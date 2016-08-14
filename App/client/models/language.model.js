(function () {
    'use strict';
    angular
        .module('app')
        .factory('LanguageModel', LanguageModel);

    LanguageModel.$inject = [];

    function LanguageModel() {
        return languageModel;
        function languageModel() {
            this.code = null;
            this.label = '';
        }
    }
})();
