define('services/transport',
    ['configuration', 'jquery'],
    function (configuration, $) {
        "use strict";

        // private method
        function request(method, url, params) {
            var r;
            if (method == 'POST') {
                r = $.ajax({
                    url: url,
                    type: method,
                    contentType: "application/json",
                    data: JSON.stringify(params),
                    cache: false,
                    async: true
                });
            } else {
                r = $.ajax({
                    url: url,
                    type: method,
                    data: params,
                    cache: false,
                    async: true
                });
            }
            r.fail(function (e) {
                if (e.status == 401) {
                	$('.popup-authorize').show();
                }
            });
            return r;
        }

        var service = {
            request: request
        };

        return service;
    }
);
