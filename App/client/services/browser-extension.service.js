(function (browserExtensionModule) {
    'use strict';
    angular
        .module('app')
        .service('browserExtensionService', browserExtensionService);

    browserExtensionService.$inject = [
        '$window',
        '$q',
        'configService'
    ];

    function browserExtensionService($window, $q, configService) {
        this.isExtensionInstalled = isExtensionInstalled;

        function isExtensionInstalled() {
            var dfd = $q.defer(),
                browserExtensionModule = browserExtension(configService.getConfig(), $window);

            browserExtensionModule.isExtensionInstalled(function (isInstalled) {
                dfd.resolve(isInstalled);
            });

            return dfd.promise;
        }
    }
})(browserExtension);