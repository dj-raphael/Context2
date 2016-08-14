(function () {
    'use strict';
    angular
        .module('app')
        .service('sessionService', sessionService);

    sessionService.$inject = [
        '$rootScope',
        'sessionServiceKeys'
    ];

    function sessionService($rootScope, sessionServiceKeys) {
        var sessionStorage = [];
        this.set = set;
        this.get = get;
        function testKey(key) {
            if (sessionServiceKeys[key] === undefined) {
                throw new Error('Unknown session key "' + key + '", add key to session service keys first.');
            }
        }

        function set(key, object, replace) {
            testKey(key);
            if (sessionStorage[key] == null) {
                sessionStorage[key] = object;
            } else if (replace) {
                angular.merge(sessionStorage[key], object);
            }
            return sessionStorage[key];
        }

        function get(key) {
            testKey(key);
            return sessionStorage[key];
        }
    }
})();