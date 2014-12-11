define('services/config',
    [/*Dependencies*/],
    function () {
        "use strict";

        function getDefaultTab(domain) {
            // TODO: call page and get stored tab
            return 'discussion';
        }

        function setDefaultTab(domain, tab) {
            // TODO: call page and set stored tab
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
