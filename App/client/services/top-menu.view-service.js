(function () {
    'use strict';
    angular
        .module('app')
        .service('topMenuViewService', topMenuViewService);

    topMenuViewService.$inject = [
        '$window',
        '$q',
        'frameMessagesService',
        'languageService',
        'layoutEnum',
        'browserExtensionService',
        'configService'
    ];

    function topMenuViewService($window,
                                $q,
                                frameMessagesService,
                                languageService,
                                layoutEnum,
                                browserExtensionService,
                                configService) {
        this.init = init;
        this.reloadPage = reloadPage;
        this.close = close;
        this.changeLanguage = changeLanguage;
        this.changeThread = changeThread;
        this.getNewThreadTitle = getNewThreadTitle;

        function init(topMenuModel) {
            if (!topMenuModel.initialized) {
                topMenuModel.showBanners = configService.getConfiguration().showBanners;
                return frameMessagesService.getExternalData().then(function (externalData) {
                    topMenuModel.showBack = externalData.layout === layoutEnum.mobile;
                    topMenuModel.pageTitle = externalData.title;
                    return languageService.getAvailableLanguages().then(function (langs) {
                        topMenuModel.languages = langs;
                        return languageService.getCurrentLanguage().then(function (lang) {
                            topMenuModel.language = lang;
                            topMenuModel.initialized = true;
                            languageService.setCurrentLanguage(lang);
                            return browserExtensionService.isExtensionInstalled().then(function (extInstalled) {
                                topMenuModel.extInstalled = extInstalled;
                            })
                        });
                    });
                });
            } else {
                return $q.resolve();
            }
        }

        function reloadPage() {
            $window.location.reload();
        }

        function close() {
            return frameMessagesService.sendClose();
        }

        function changeLanguage(topMenuModel, language) {
            topMenuModel.language = language;
            languageService.setCurrentLanguage(language);
        }

        function changeThread(topMenuModel, threadModel) {
            topMenuModel.threadTitle = threadModel.title;
            topMenuModel.threadCode = threadModel.code;
        }

        function getNewThreadTitle(topMenuModel) {
            if (topMenuModel.search !== '') {
                return topMenuModel.search;
            } else {
                return topMenuModel.pageTitle;
            }
        }
    }
})();