(function () {
    'use strict';
    angular
        .module('app')
        .service('threadsService', threadsService);

    threadsService.$inject = [
        'requestHandlerHelper',
        'threadsTransport',
        'threadInfoMapper',
        'frameMessagesService'
    ];

    function threadsService(requestHandlerHelper, threadsTransport, threadInfoMapper, frameMessagesService) {
        this.getThreads = getThreads;
        this.getThread = getThread;
        this.addThread = addThread;
        this.renameThread = renameThread;

        function getThreads(search, languageCode) {
            if (search === '') {
                return frameMessagesService.getExternalData().then(function (externalData) {
                    var requestData = {
                        language: languageCode,
                        url: externalData.url,
                        keywords: externalData.keywords
                    };

                    return requestHandlerHelper.handleRequest(threadsTransport.getThreads(requestData)).then(function (data) {
                        return threadInfoMapper.mapArrayFrom(data);
                    });
                });
            } else {
                var requestData = {
                    title: search,
                    language: languageCode,
                };

                return requestHandlerHelper.handleRequest(threadsTransport.searchThreads(requestData)).then(function (data) {
                    return threadInfoMapper.mapArrayFrom(data);
                });
            }
        }

        function getThread(threadId, languageCode) {
            return frameMessagesService.getExternalData().then(function (externalData) {
                var requestData = {
                    threadId: threadId,
                    url: externalData.url,
                    language: languageCode
                };

                return requestHandlerHelper.handleRequest(threadsTransport.getThread(requestData)).then(function (data) {
                    return threadInfoMapper.mapFrom(data);
                });
            });
        }

        function addThread(title, languageCode) {
            return frameMessagesService.getExternalData().then(function (externalData) {
                var requestData = {
                    Title: title,
                    Language: languageCode,
                    Url: externalData.url
                };

                return requestHandlerHelper.handleRequest(threadsTransport.addThread(requestData)).then(function (data) {
                    return threadInfoMapper.mapFrom(data);
                });
            });
        }

        function renameThread(threadId, languageCode, title) {
            var requestData = {
                ThreadId: threadId,
                Title: title,
                Language: languageCode
            };

            return requestHandlerHelper.handleRequest(threadsTransport.renameThread(requestData));
        }
    }
})();