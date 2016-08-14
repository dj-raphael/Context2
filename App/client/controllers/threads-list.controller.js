(function () {
    'use strict';
    angular
        .module('app')
        .controller('threadsListController', threadsListController);

    threadsListController.$inject = [
        '$state',
        'sessionService',
        'threadsService',
        'TopMenuModel',
        'AuthUserModel',
        'topMenuViewService',
        'authorizationViewService',
        'threadsLogicService',
        'ApplicationStateModel'
    ];

    function threadsListController($state,
                                    sessionService,
                                    threadsService,
                                    TopMenuModel,
                                    AuthUserModel,
                                    topMenuViewService,
                                    authorizationViewService,
                                    threadsLogicService,
                                    ApplicationStateModel) {
        var vm = this;
        vm.threads = [];
        vm.topMenu = sessionService.set('topMenu', new TopMenuModel());
        vm.state = sessionService.set('applicationState', new ApplicationStateModel());
        vm.selectLanguage = selectLanguage;
        vm.search = search;
        vm.addThread = addThread;
        vm.authUser = new AuthUserModel();
        vm.close = topMenuViewService.close;
        vm.reloadPage = topMenuViewService.reloadPage;
        vm.openThread = openThread;
        vm.newThreadTitle = '';
        vm.showAddThread = false;
        activate();
        function activate() {
            vm.topMenu.showSearch = true;
            return topMenuViewService.init(vm.topMenu).then(function () {
                vm.newThreadTitle = vm.topMenu.pageTitle;
                return getThreads();
            });
        }

        function selectLanguage(item) {
            topMenuViewService.changeLanguage(vm.topMenu, item);
            return getThreads();
        }

        function search() {
            return getThreads();
        }

        function getThreads() {
            return threadsService.getThreads(vm.topMenu.search, vm.topMenu.language.code).then(function (threads) {
                var mainThreadId = threadsLogicService.getMainThread(threads);
                if (mainThreadId != null && !vm.state.threadFirstTimeLoaded) {
                    openThread(mainThreadId);
                } else {
                    vm.threads = threads;
                    vm.newThreadTitle = topMenuViewService.getNewThreadTitle(vm.topMenu);
                    vm.showAddThread = threadsLogicService.findByTitle(vm.newThreadTitle, threads) == null;
                }
            });
        }

        function addThread() {
            return threadsService.addThread(vm.topMenu.search, vm.topMenu.language.code).then(function (thread) {
                vm.topMenu.search = '';
                openThread(thread.id);
            }, function () {
                return authorizationViewService.showLoginDialog().then(function (authUser) {
                    vm.authUser = authUser;
                });
            });
        }

        function openThread(threadId) {
            $state.go('root.thread', { id: threadId });
        }
    }
})();