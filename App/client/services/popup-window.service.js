(function () {
    'use strict';
    angular
        .module('app')
        .service('popupWindowService', popupWindowService);

    popupWindowService.$inject = [
        '$q',
        '$window',
        '$interval'
    ];

    function popupWindowService($q, $window, $interval) {
        this.open = open;

        function open(url, name, params) {
            var dfd = $q.defer();
            var popup = $window.open(url, name, params);
            var interval = $interval(function () {
                try {
                    if (popup == null || popup.closed) {
                        $interval.cancel(interval);
                        dfd.resolve();
                    }
                }
                catch (e) {
                }
            }, 1000);

            if ($window.focus && popup != null && !popup.closed) {
                popup.focus();
            }

            return dfd.promise;
        }
    }
})();