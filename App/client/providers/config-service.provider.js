(function (config) {
    'use strict';
    angular
        .module('app')
        .provider('configService', configServiceProvider);

    configServiceProvider.$inject = [
        'appConfiguration'
    ];

    function configServiceProvider(appConfiguration) {
        this.getConfig = getConfig;
        this.getConfiguration = getConfiguration;
        this.getUrl = getUrl;
        this.getStorageKey = getStorageKey;
        this.$get = configService;

        configService.$inject = [];

        function configService() {
            this.getConfig = getConfig;
            this.getConfiguration = getConfiguration;
            this.getUrl = getUrl;
            this.getStorageKey = getStorageKey;

            return this;
        }

        function getConfig() {
            return sharedConfig();
        }

        function getConfiguration() {
            return appConfiguration;
        }

        function getUrl(urlId) {
            return appConfiguration.baseUrl + appConfiguration.urls[urlId];
        }

        function getStorageKey(keyId) {
            return appConfiguration.storageKeys[keyId];
        }
    }
})(sharedConfig);