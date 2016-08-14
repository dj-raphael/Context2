(function () {
    'use strict';
    angular
        .module('app')
        .filter('trustResourceUrl', trustResourceUrlFilter);

    trustResourceUrlFilter.$inject = [
        '$sce'
    ];

    function trustResourceUrlFilter($sce) {
        return trustResourceUrl;
        function trustResourceUrl(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }
})();
