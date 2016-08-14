(function () {
    'use strict';
    angular
        .module('app', [
            'ngSanitize',
            'ngAnimate',
            'ui.router',
            'pascalprecht.translate',
            'ui.bootstrap',
            'LocalStorageModule',
            'angularMoment',
            'textAngular',
            'app.templates'
        ])
        .config(appConfig)
        .run(appRun);

    appConfig.$inject = [
        '$logProvider',
        '$stateProvider',
        '$urlRouterProvider',
        '$translateProvider',
        'configServiceProvider',
        'localStorageServiceProvider',
        'localizations'
    ];
    appRun.$inject = [
        '$rootScope',
        'frameMessagesService'
    ];

    function appConfig(
                    $logProvider,
                    $stateProvider,
                    $urlRouterProvider,
                    $translateProvider,
                    configServiceProvider,
                    localStorageServiceProvider,
                    localizations) {
        $logProvider.debugEnabled(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state({
                name: 'root',
                abstract: true,
                views: {
                    'content-wrapper': {
                        templateUrl: '/app/client/views/content-wrapper.html'
                    }
                }
            })
            .state({
                name: 'root.threadsList',
                url: '/',
                views: {
                    'content-container': {
                        templateUrl: '/app/client/views/threads-list.html',
                        controller: 'threadsListController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state({
                name: 'root.thread',
                url: '/thread/:id',
                views: {
                    'content-container': {
                        templateUrl: '/app/client/views/thread.html',
                        controller: 'threadController',
                        controllerAs: 'vm'
                    }
                }
            });

        configServiceProvider.getConfig().avialableUI.forEach(function (lang) {
            $translateProvider.translations(lang, localizations[lang]);
        });

        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.preferredLanguage(configServiceProvider.getConfig().language);

        localStorageServiceProvider.setPrefix('context-comment');
    }

    function appRun($rootScope, frameMessagesService) {
        $rootScope.isLoading = true;
        $rootScope.isError = false;
        return frameMessagesService.sendReady().then(function () {
            $rootScope.isLoading = false;
        });
    }
})();