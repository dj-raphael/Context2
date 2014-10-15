define('services/languages',
    ['configuration', 'services/transport'],
    function (configuration, transport) {
        "use strict";

        var _languages;

        function getLanguages() {
            var promize;
            if (_languages) {
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
                window.setTimeout(function () { promize.doneCalback(_languages) }, 1);
                return promize;
            } else {
                promize = transport.request('POST',
                    configuration.urls.getLanguages
                ).done(function (data) { _languages = data; });
                return promize;
            }
        }

        function getSelectedLanguages() {
            if (localStorage['selectedLanguages']) {
                return JSON.parse(localStorage['selectedLanguages']);
            }
            if (Array.isArray(_languages)) {
                var current = getCurrentLanguage();
                var res = null;
                _languages.forEach(function (item) {
                    if (item.uniCode === current) {
                        res = item;
                    }
                });
                if (res) {
                    localStorage['selectedLanguages'] = JSON.stringify([res]);
                    return [res];
                }
            }
            return [];
        }

        function setSelectedLanguages(languages) {
            localStorage['selectedLanguages'] = JSON.stringify(languages);
        }

        function getCurrentLanguage() {   
            if (localStorage['currentlang'] == null)
                return navigator.language;
            else {
                return localStorage['currentlang'];
            }
        }

        function setCurrentLanguage(value) {
            localStorage['currentlang'] = value;
        }

        var service = {
            getLanguages: getLanguages,
            getSelectedLanguages: getSelectedLanguages,
            setSelectedLanguages: setSelectedLanguages,
            getCurrentLanguage: getCurrentLanguage,
            setCurrentLanguage: setCurrentLanguage
        };
        return service;
    }
);
