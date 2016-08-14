(function () {
    'use strict';
    angular
        .module('app')
        .service('wikiTransport', wikiTransport);

    wikiTransport.$inject = [
        '$q',
        '$http',
        'configService'
    ];

    function wikiTransport($q, $http, configService) {
        this.getWiki = getWiki;
        this.setWiki = setWiki;

        function getWiki(params) {
            return $http.get(configService.getUrl('getWiki'), { params: params }).then(function (data) {
                return data.data === '<div>No Wiki Avaliable</div>'? '' : data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function setWiki(params) {
            return $http.post(configService.getUrl('setWiki'), params).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }
    }
})();
