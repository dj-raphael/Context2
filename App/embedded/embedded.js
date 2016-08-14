function embedded(config, common, frameLoader, document) {
    "use strict";
    return {
        init: init
    }

    function init() {
        var isMobile = common.mobileAndTabletcheck(),
             container = !!config.container ? document.querySelector(config.container) : document.body,
             height = config.height,
            frame = document.createElement('iframe');
        frame.style.width = '100%';
        frame.style.height = config.height;
        frameLoader.loadFrame(frame, container, isMobile, function () { });
    }
}