define('services/threads',
    ['configuration', 'services/transport'],
    function (configuration, transport) {
        "use strict";
        var _threads;
        var _language;
        
        function getThreads(url, language, keywords) {
            var promize;
            if (_threads && _language && _language == language) {
                promize = {
                    done: function (callback) {
                        this.doneCalback = callback;
                        return this;
                    },
                    error: function (callback) {
                        this.errorCalback = callback;
                        return this;
                    }
                };
                window.setTimeout(function () { promize.doneCalback(_threads); }, 1);
                return promize;
            } else {
                _language = language;
                promize = transport.request('POST',
                    configuration.urls.getThreads,
                    { url: url, language: language, keywords: keywords }
                ).done(function (data) { _threads = data; });
                return promize;
            }
        }
        
        function searchThreads(title, language) {
            var promize = transport.request('GET',
                configuration.urls.searchThreads,
                { title: title, language: language }
            );
            return promize;
        }
        
        function addThread(title, language, url) {
            var promize = transport.request('POST',
                configuration.urls.addThread,
                { Title: title, Language: language, Url: url });
            return promize;
        }

        var service = {
            getThreads: getThreads,
            searchThreads: searchThreads,
            addThread: addThread
        };
        return service;
    }
);
