(function (chrome) {
    "use strict";
    if (window.parent !== window) {
        return;
    }
    var el = document.createElement('script');
    el.src = 'http://www.context2.com/App/mainEmbedded.js'

//    function handleRequest(request, sender, sendResponse) {
//        if (request.callFunction == "toggleSidebar") {
//            toggleSidebar();
//        }
//    }
//    if (!window.listenerAdded) {
//        window.listenerAdded = true;
//        chrome.extension.onMessage.addListener(handleRequest);
//    }

})(chrome);


(function (chrome) {
    // part for wikipedia
    "use strict";
    if (window.parent === window) {
        return;
    }

    function init() {
        window.addEventListener('message', messageHandler, false);
        window.parent.postMessage('ready:' + window.location.hostname, '*');
    }

    function messageHandler(event) {
        if (event.data.type2 != null && event.data.type2 == 'keywords')
            if (event.data.data.indexOf('style:') == 0) {
                applyStyle(event.data.data.substring(6));
            }
    }

    function applyStyle(style) {
        var sheet = document.head.appendChild(document.createElement('style')).sheet;
        var styles = style.split('}');
        for (var i = 0; i < styles.length-1; i++) {
            sheet.insertRule(styles[i]+'}');
        }
        var links = document.querySelectorAll('a:not([href^="#"])');
        for (var i = 0; i < links.length - 1; i++) {
            links[i].target = '_blank';
        }
    }

    init();

})(chrome);