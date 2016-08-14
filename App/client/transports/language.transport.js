(function () {
    'use strict';
    angular
        .module('app')
        .service('languageTransport', languageTransport);

    languageTransport.$inject = [
        '$q',
        '$http',
        'configService'
    ];

    function languageTransport($q, $http, configService) {
        this.getAvailableLanguages = getAvailableLanguages;

        function getAvailableLanguages() {
            return $http.get(configService.getUrl('getLanguages')).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }
    }
})();
