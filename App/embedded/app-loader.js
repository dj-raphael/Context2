function appLoader(config, panel, embedded, browserExtension) {
    "use strict";
    return {
        init: init
    };

    function init() {
        if (config.method === 'sidepanel') {
            panel.init();
        } else if (config.method === 'embedded') {
            browserExtension.isExtensionInstalled(function (isInstalled) {
                if (isInstalled) {
                    panel.init();
                } else {
                    embedded.init();
                }
            });            
        }
    }
}