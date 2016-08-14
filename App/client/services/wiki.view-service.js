(function () {
    'use strict';
    angular
        .module('app')
        .service('wikiViewService', wikiViewService);

    wikiViewService.$inject = [
        'wikiModeEnum',
        'wikiService'
    ];

    function wikiViewService(wikiModeEnum, wikiService) {
        this.setWikiMode = setWikiMode;
        this.setWikiUrl = setWikiUrl;
        this.setWikiText = setWikiText;

        function setWikiMode(wikiModel, mode) {
            if (mode == null) {
                if (wikiModel.editMode !== wikiModeEnum.none) {
                    mode = wikiModeEnum.none;
                } else {
                    switch (wikiModel.viewMode) {
                        case wikiModeEnum.none:
                        case wikiModeEnum.url:
                            mode = wikiModeEnum.url;
                            break;
                        case wikiModeEnum.text:
                            mode = wikiModeEnum.text;
                            break;
                    }
                }
            }

            wikiModel.editMode = mode;
        }

        function setWikiUrl(wikiModel, threadId, languageCode) {
            return wikiService.setWiki(threadId, languageCode, wikiModel.url).then(function () {
                wikiModel.editMode = wikiModeEnum.none;
                wikiModel.viewMode = wikiModeEnum.url;
            });
        }

        function setWikiText(wikiModel, threadId, languageCode) {
            return wikiService.setWiki(threadId, languageCode, wikiModel.text).then(function () {
                wikiModel.editMode = wikiModeEnum.none;
                wikiModel.viewMode = wikiModeEnum.text;
            });
        }
    }
})();