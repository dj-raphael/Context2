require(['jquery', 'services/auth', 'services/languages'],
    function ($, authService, languages) {
        "use strict";

        function init() {
            authService.setCookie().done(function (data) {
                if (data.result === 'success') {
                    window.location.href = window.location.protocol + "//" + window.location.host + "/" + languages.getCurrentLanguage() + "/Account/Options";
                } else {
                    window.location.replace(window.location.protocol + "//" + window.location.host + "/" + languages.getCurrentLanguage() + "/Account/Login?ReturnUrl=%2fen%2fAccount%2fManage");
                }
            });
        }

        function get(name) {
            if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
                return decodeURIComponent(name[1]);
        }

        init();
    }
);


