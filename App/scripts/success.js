require(['jquery', 'services/auth'],
    function ($, authService) {
        "use strict";

        function init() {
            authService.setCookie().done(function (data) {
                if (data.result === 'success') {
                    window.location.href = 'en/Account/Options';//TODO
                } else {
                    window.location.href = 'login.html';
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
