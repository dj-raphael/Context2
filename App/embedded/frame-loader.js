function frameLoader(config, common, dataLoader, analyzer, document, navigator, window) {
    "use strict";
    return {
        loadFrame: loadFrame
    }

    function loadFrame(frame, panelWrapper, isMobile, frameOpenCallback, frameCloseCallback) {
        var theme = config.theme === '' || config.theme == null ? '' : '-' + config.theme;
        frame.id = config.frameId;
        frame.src = config.context2Url + 'app/index' + theme + '.html?url=' + encodeURIComponent(window.location.href);
        panelWrapper.appendChild(frame);

        dataLoader.getStopWords(function (stopWords) {
            window.addEventListener('message', function (e) {
                if (e.data == config.frameReadyMessageData) {
                    var postData = {
                        keywords: analyzer.extractKeywords(document.body, {
                            top: config.postWordsCount,
                            stopLangs: navigator.languages
                        }, stopWords),
                        type2: "keywords",
                        title: analyzer.extractTitle(document.body, stopWords),
                        layout: isMobile ? 'mobile' : 'desktop',
                        url: window.location.href,
                        language: common.getLanguage()
                    };
                    frame.contentWindow.postMessage(postData, config.context2Url);
                    frameOpenCallback();
                }
                if (e.data == config.frameCloseMessageData) {
                    frameCloseCallback()
                }
            }, false);
        });
    }
}