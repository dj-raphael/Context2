require(['services/auth', 'services/languages'],
    function (authService, langService) {
        "use strict";

        var keywords = [];

        function init() {
            authService.isAuthenticated(authService.setCookie());
            initLanguages();
        }

        function initLanguages() {
            if (!langService.getCurrentLanguage()) {
                langService.getLanguages().done(function (data) {
                    langService.setCurrentLanguage('en');
                    data.forEach(function (it) {
                        if (it.uniCode === window.navigator.language) {
                            langService.setCurrentLanguage(it.uniCode);
                        }
                    });
                    langService.getSelectedLanguages();
                });
            }
            langService.getSelectedLanguages();
        }

        window.chrome.extension.onMessage.addListener(function (r,s,sr) {
            console.log(arguments);
            var tabId = arguments[1].tab.id;
            var sendResponse = arguments[2];
            if (r.callFunction === 'setKeywords') {
                keywords[tabId] = r.data;
            } else if (r.callFunction === 'getKeywords') {
                sendResponse(keywords[tabId]);
            }
        });

        init();
    }
);

