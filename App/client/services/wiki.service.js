(function () {
    'use strict';
    angular
        .module('app')
        .service('wikiService', wikiService);

    wikiService.$inject = [
        'requestHandlerHelper',
        'wikiTransport',
        'wikiMapper'
    ];

    function wikiService(requestHandlerHelper, wikiTransport, wikiMapper) {
        this.getWiki = getWiki;
        this.setWiki = setWiki;

        function getWiki(threadId, languageCode) {
            var requestData = {
                threadId: threadId,
                language: languageCode
            };

            return requestHandlerHelper.handleRequest(wikiTransport.getWiki(requestData)).then(function (data) {
                return wikiMapper.mapFrom(data);
            });
        }

        function setWiki(threadId, languageCode, value) {
            var requestData = {
                ThreadId: threadId,
                language: languageCode,
                value: value
            };

            return requestHandlerHelper.handleRequest(wikiTransport.setWiki(requestData)).then(function (data) {
                return data;
            });
        }
    }
})();