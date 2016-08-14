function browserExtension(config, window) {
    "use strict";
    return {
        isExtensionInstalled: isExtensionInstalled
    };

    function isExtensionInstalled(callback) {
        if (window.chrome != null && window.chrome.runtime != null) {
            window.chrome.runtime.sendMessage(config.chromeExtensionId, { message: config.chromeExtensionName },
              function (response) {
                  if (response === config.chromeExtensionName) {
                      callback(true);
                  } else {
                      callback(false);
                  }
              });
        } else {
            callback(false);
        }
    }
}