(function () {
    'use strict';
    angular
        .module('app')
        .service('frameMessagesService', frameMessagesService);

    frameMessagesService.$inject = [
        '$q',
        '$window',
        'configService',
        'externalDataMapper'
    ];

    function frameMessagesService($q, $window, configService, externalDataMapper) {
        this.sendReady = sendReady;
        this.sendClose = sendClose;
        this.getExternalData = getExternalData;

        var url = parseQueryString($window.location.search.substr(1).split('&')).url,
            externalData = null,
            getExternalDataPromise = $q.defer();

        function sendReady() {
            $window.parent.postMessage(configService.getConfig().frameReadyMessageData, url);
            $window.addEventListener('message', function (e) {
                externalData = externalDataMapper.mapFrom(e.data);
                getExternalDataPromise.resolve(externalData);
            }, false);
            return getExternalDataPromise.promise;
        }

        function getExternalData() {
            return getExternalDataPromise.promise;
        }

        function sendClose() {
            $window.parent.postMessage(configService.getConfig().frameCloseMessageData, url);
        }

        function parseQueryString(a) {
            if (a == "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i) {
                var p = a[i].split('=', 2);
                if (p.length == 1)
                    b[p[0]] = "";
                else
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        }
    }
})();