define('frame/tabs', ['frame/app', 'services/config', 'services/auth', 'services/faq', 'services/wiki', 'frame/wiki-controller', 'frame/faq-controller', 'frame/discussion-controller', 'frame/manage-controller', 'frame/banner-controller', 'frame/profile-toolbar-controller', 'frame/plus-toolbar-controller'],
    function (app, configService, authService, faqService, wikiService) {

        app.controller('mainCtrl', function ($scope, $rootScope) {
            $scope.onThreadSelect = function (noCheck) {
                //if (!noCheck && $rootScope.threadCode && $rootScope.thread && ($rootScope.thread == $scope.$$childHead.thread) && ($rootScope.threadCode.indexOf('site:') != 0)) return;

                $scope.threadTemplate = '';
                window.setTimeout(function () {
                    $scope.$apply();
                });
                window.setTimeout(function () {
                    $scope.threadTemplate = 'tabs.html';
                    $scope.$apply();
                });
                $rootScope.thread = $scope.$$childHead.thread;
                window.setTimeout(function () {
                    if ($('#thread_box').select2('data')) {
                        $rootScope.threadCode = $('#thread_box').select2('data').code;
                        $rootScope.threadText = $('#thread_box').select2('data').text;
                    }
                });
                $rootScope.language = $scope.$$childHead.language;
                window.setTimeout(function () {
                    if ($('#language_box').select2('data')) {
                        $rootScope.languageText = $('#language_box').select2('data').text;
                    }
                });
            };

            $scope.$on('tabsContentChanged', function () {
                $scope.onThreadSelect(true);
            });

        });



        app.controller('TabsCtrl', ['$scope', '$rootScope',
            function ($scope, $rootScope) {

                var activeTab = configService.getDefaultTab();
                var tabsCount = 5;
                var isAuthenticated = authService.isAuthenticated();
                var domainConfig = configService.getDomainConfig(decodeURIComponent(location.search.substr(5)));

                var
                   tabWiki = { id: "wiki", title: "Wiki", template: 'wiki.html', toolbar: 'toolbar-wiki.html', active: (activeTab == 'wiki'), updated: false, },
                   tabFaq = { id: "faq", title: "FAQ", template: 'faq.html', active: (activeTab == 'faq'), updated: false, },
                   tabManage = { id: "manage", title: "Manage", template: 'thread-manage.html', active: (activeTab == 'manage'), updated: false, className: "pull-right" },
                   tabPlus = { id: "plus", title: "+", toolbar: 'toolbar-plus.html', active: false, updated: false, className: "tab-plus" };

                var removePlus = function () {
                    var i = $scope.tabs.indexOf(tabPlus);
                    $scope.tabs.splice(i, 1);
                };

                $scope.tabs = [
                  { id: "discussion", title: "Discussion", template: 'discussion.html', active: (activeTab == 'discussion'), updated: false },
                  { id: "profile", toolbar: 'toolbar-profile.html', active: false, updated: false, className: "pull-right" }
                ];

                $scope.foo = function (e) {
                    e.templateUrl = e.template;
                    configService.setDefaultTab(e.id);
                };

                $scope.$on('addTab', function (event, data) {
                    switch (data) {
                        case 'wiki':
                            tabWiki.active = true;
                            $scope.tabs.unshift(tabWiki);
                            break;
                        case 'faq':
                            tabFaq.active = true;
                            $scope.tabs.unshift(tabFaq);
                            break;
                        case 'manage':
                            tabManage.active = true;
                            $scope.tabs.unshift(tabManage);
                            domainConfig.setValue('showManageTab', true);
                            break;
                        default:
                            break;
                    }
                    if ($scope.tabs.length > tabsCount) removePlus();
                });

               
                if (isAuthenticated) {
                    $scope.tabs.push(tabPlus);
                    if (domainConfig.getValue('showManageTab')) {
                        $scope.tabs.unshift(tabManage);
                    }
                };

                if ($rootScope.thread && $rootScope.language) {
                    faqService.getList($rootScope.thread, $rootScope.language, 0, 1).success(function(data) {
                        if (data != null && data.totalRecords != null && data.totalRecords > 0) {
                            $scope.tabs.unshift(tabFaq);
                        }
                    });
                    wikiService.getWiki($rootScope.thread, $rootScope.language).success(function(data) {
                        if (data != null) {
                            $scope.tabs.unshift(tabWiki);
                        }
                    });
                };

                if ($scope.tabs.length > tabsCount) removePlus();

            }]);

    });

