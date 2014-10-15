﻿define('services/manage',
    ['configuration', 'services/transport'],
    function (configuration, transport) {
        "use strict";

        function getWiki(threadId, language) {
            var promize = transport.request('GET',
                configuration.urls.getWiki, {
                    threadId: threadId,
                    language: language
                }
            );
            return promize;
        }
        
        function setWiki(threadId, language, value) {
            var promize = transport.request('POST',
                configuration.urls.setWiki, {
                    ThreadId: threadId,
                    language: language,
                    value: value
                }
            );
            return promize;
        }

        var service = {
            getWiki: getWiki,
            setWiki: setWiki
        };
        return service;
    }
);

