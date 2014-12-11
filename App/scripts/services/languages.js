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
            if (localStorage['selectedLanguages'] != null) {
                return JSON.parse(localStorage['selectedLanguages']);
            }
            return [];
        }

        function initSelectedLanguages() {
            if (Array.isArray(_languages)) {
                var current = getCurrentLanguage();
                var nav = window.navigator.languages;
                nav.push(current);
                var res = [];
                _languages.forEach(function (item) {
                    for (var i = 0; i < nav.length; i++) {
                        if (nav[i].indexOf(item.uniCode) === 0) {
                            res.push(item);
                            break;
                        }
                    }
                });
                if (res.length > 0 ) {
                    localStorage['selectedLanguages'] = JSON.stringify(res);
                    return [res];
                }
            }
        }

        function setSelectedLanguages(languages) {
            localStorage['selectedLanguages'] = JSON.stringify(languages);
        }

        function getCurrentLanguage() {   
            if (localStorage['currentlang'] == null)
                return window.navigator.language;
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
            setCurrentLanguage: setCurrentLanguage,
            initSelectedLanguages: initSelectedLanguages
        };
        return service;
    }
);
