(function () {
    'use strict';
    angular
        .module('app')
        .service('storageService', storageService);

    storageService.$inject = [
        'configService',
        'localStorageService'
    ];

    function storageService(configService, localStorageService) {
        this.getAvailableLanguages = getAvailableLanguages;
        this.setAvailableLanguages = setAvailableLanguages;
        this.getCurrentLanguage = getCurrentLanguage;
        this.setCurrentLanguage = setCurrentLanguage;

        function getAvailableLanguages() {
            return localStorageService.get(configService.getStorageKey('availableLanguages'));
        }

        function setAvailableLanguages(data) {
            localStorageService.set(configService.getStorageKey('availableLanguages'), data);
        }

        function getCurrentLanguage() {
            return localStorageService.get(configService.getStorageKey('currentLanguage'));
        }

        function setCurrentLanguage(data) {
            localStorageService.set(configService.getStorageKey('currentLanguage'), data);
        }
    }
})();