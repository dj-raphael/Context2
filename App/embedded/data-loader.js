function dataLoader(config, common, localStorage) {
    "use strict";
    return {
        getThreadsCount: getThreadsCount,
        getStopWords: getStopWords
    };

    function getThreadsCount(callback) {
        var url = config.context2Url + config.getThreadsCountUrl + '?url=' + encodeURIComponent(location.href) + '&language=' + common.getLanguage() + '&callback=?';
        jsonp(url, function (response) {
            callback(response == 0 ? null : response);
        });
    }

    function getStopWordsFromServer(callback) {
        var url = config.context2Url + config.getStopWordsUrl + '?domain=' + encodeURIComponent(location.host) + '&callback=?';
        jsonp(url, function (stopWords) {
            localStorage[config.stopWordsLocalStorageKeyPrefix + location.host] = stopWords
            localStorage[config.stopWordsLastUpdateLocalStorageKeyPrefix + location.host] = new Date()
            callback(stopWords);
        });
    }

    function getStopWords(callback) {
        var
            stopWords = localStorage[config.stopWordsLocalStorageKeyPrefix + location.host],
            stopWordsUpdated = new Date(localStorage[config.stopWordsLastUpdateLocalStorageKeyPrefix + location.host]),
            now = new Date();
        if ((stopWords != null && stopWords != "") || (now - stopWordsUpdated < config.stopWordsCacheTimeout)) {
            callback(stopWords);
        } else {
            getStopWordsFromServer(callback);
        }
    }

    function jsonp(url, callback) {
        var w = unsafeWindow == null ? window : unsafeWindow;
        var id = '_' + (new Date()).getTime();

        w[id] = function (result) {
            if (callback)
                callback(result);

            var sc = w.document.getElementById(id);
            sc.parentNode.removeChild(sc);
            w[id] = null;
        }

        url = url.replace('callback=?', 'callback=' + id);

        var script = document.createElement('script');
        script.setAttribute('id', id);
        script.setAttribute('src', url);
        script.setAttribute('type', 'text/javascript');
        w.document.body.appendChild(script);
    }
}