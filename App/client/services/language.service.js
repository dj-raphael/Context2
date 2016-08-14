(function () {
    'use strict';
    angular
        .module('app')
        .service('languageService', languageService);

    languageService.$inject = [
        '$q',
        'moment',
        '$translate',
        'languageTransport',
        'frameMessagesService',
        'configService',
        'languageMapper',
        'storageService'
    ];

    function languageService($q, moment, $translate, languageTransport, frameMessagesService, configService, languageMapper, storageService) {
        this.getCurrentLanguage = getCurrentLanguage;
        this.setAvailableLanguages = setAvailableLanguages;
        this.getAvailableLanguages = getAvailableLanguages;
        this.getUrlLangRelated = getUrlLangRelated;
        this.setCurrentLanguage = setCurrentLanguage;
        this.getUnavailableLanguages = getUnavailableLanguages;

        function getCurrentLanguage() {
            var languageCode = storageService.getCurrentLanguage();
            return getLanguageByCode(languageCode).then(function (lang) {
                if (lang == null) {
                    return frameMessagesService.getExternalData().then(function (externalData) {
                        return getLanguageByCode(externalData.language).then(function (lang) {
                            if (lang == null) {
                                throw new Error('Unknown language code "' + externalData.language + '"');
                            } else {
                                return lang;
                            }
                        });
                    });
                } else {
                    return lang
                }
            });
        }

        function getLanguageByCode(languageCode) {
            return getAllLanguages().then(function (langs) {
                var filteredLangs = langs.filter(function (item) {
                    return item.code === languageCode;
                });

                if (filteredLangs.length === 0) {
                    return null;
                }

                return filteredLangs[0];
            });
        }

        function setAvailableLanguages(availableLanguages) {
            storageService.setAvailableLanguages(availableLanguages);
        }

        function getAvailableLanguages() {
            var availableLanguages = storageService.getAvailableLanguages();
            if (availableLanguages == null) {
                return getAllLanguages().then(function (allLanguages) {
                    var availableLanguagesCodes = configService.getConfig().avialableUI,
                        availableLanguages = allLanguages.filter(function (lang) {
                            return availableLanguagesCodes.indexOf(lang.code) !== -1;
                        });
                    storageService.setAvailableLanguages(availableLanguages);
                    return availableLanguages;
                });
            }

            return $q.resolve(availableLanguages);
        }

        function getUnavailableLanguages() {
            return getAllLanguages().then(function (allLanguages) {
                return getAvailableLanguages().then(function (availableLanguages) {
                    var unavailableLanguages = allLanguages.filter(function (lang) {
                        return availableLanguages.indexOf(lang) === -1;
                    });

                    return unavailableLanguages;
                });
            });
        }

        function getAllLanguages() {
            return languageTransport.getAvailableLanguages().then(function (data) {
                return languageMapper.mapArrayFrom(data);
            });
        }

        function getUrlLangRelated(urlId) {
            return getCurrentLanguage().then(function (lang) {
                return configService.getConfiguration().baseUrl + lang.code + '/' + configService.getConfiguration().urls[urlId];
            });
        }

        function setCurrentLanguage(lang) {
            storageService.setCurrentLanguage(lang.code);
            setTranslation(lang.code);
            setMomentLocale(lang.code);
        }

        function setTranslation(langCode) {
            var locale = configService.getConfig().language;
            if (configService.getConfig().avialableUI.indexOf(langCode) !== -1) {
                locale = langCode;
            }

            $translate.use(locale);
        }

        function setMomentLocale(langCode) {
            var momentLocale = 'en-gb';
            switch (langCode) {
                case 'ru': momentLocale = 'ru';
                    break;
                case 'en': momentLocale = 'en-gb';
                    break;
                default: momentLocale = 'en-gb'
                    break;
            }
            moment.locale(momentLocale);
        }
    }
})();