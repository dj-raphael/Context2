define('services/banner',
    ['configuration', 'services/transport', 'services/languages'],
    function(configuration, transport,languages) {
        "use strict";
        var _keywords;

        function getBanners(keywords, threadId) {
            var promize;
            if (_keywords) {
                promize = {
                    done: function(callback) {
                        this.doneCalback = callback;
                        return this;
                    },
                    error: function(callback) {
                        this.errorCalback = callback;
                        return this;
                    }
                };
                window.setTimeout(function() { promize.doneCalback(_threads); }, 1);//TODO
                return promize;
            } else {
                promize = transport.request('POST',
                    configuration.urls.getBanners,
                    {
                        keywords: keywords,
                        Language: languages.getCurrentLanguage(),
                        ThreadId: threadId
                    }
                ).done(function(data) { _keywords = data; });
                return promize;
            }
        }

        //function getGeoId() {
        //    var promize = transport.request('GET',
        //        configuration.urls.getGeoId,
        //        {
        //            ipadress: IP_adress
        //        }
        //    );
        //    return promize;
        //}

        var service = {
            getBanners: getBanners
            //getGeoId: getGeoId
        };

        return service;
    }
);

