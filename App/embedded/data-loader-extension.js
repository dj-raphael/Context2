function dataLoader(config, common, localStorage) {
    "use strict";
    return {
        getThreadsCount: getThreadsCount,
        getStopWords: getStopWords
    };

    function getThreadsCount(callback) {
        var url = config.context2Url + config.getThreadsCountUrl + '?url=' + encodeURIComponent(location.href) + '&language=' + common.getLanguage();
        jsonp(url, function (response) {
            callback(response == 0 ? null : response);
        });
    }

    function getStopWordsFromServer(callback) {
        var url = config.context2Url + config.getStopWordsUrl + '?domain=' + encodeURIComponent(location.host);
        jsonp(url, function (stopWords) {
            localStorage[config.stopWordsLocalStorageKeyPrefix + location.host] = stopWords;
            localStorage[config.stopWordsLastUpdateLocalStorageKeyPrefix + location.host] = new Date();
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
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(JSON.parse(xhr.responseText));
            }
        }
        xhr.send();
    }
}