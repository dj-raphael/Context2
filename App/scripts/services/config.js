define('services/config',
    [/*Dependencies*/],
    function () {
        "use strict";

        function getDefaultTab() {
            if (localStorage['tab']) {
                return localStorage['tab'];
            }
            return 'wiki';
        }

        function setDefaultTab(tab) {
            localStorage['tab'] = tab;
            return localStorage['tab'];
        }

        function DomainConfig(host) {
            this.prefix = host + '/';
        }

        DomainConfig.prototype.getValue = function(key) {
            return localStorage[this.prefix + key];
        };
        DomainConfig.prototype.setValue = function (key, value) {
            localStorage[this.prefix + key] = value;
        };

        function getDomainConfig(host) {
            return new DomainConfig(host);
        }

        var service = {
            getDefaultTab: getDefaultTab,
            setDefaultTab: setDefaultTab,
            getDomainConfig: getDomainConfig
        };
        return service;
    }
);
