define('frame/tabs', ['frame/app', 'services/config', 'services/auth', 'services/faq', 'services/wiki', 'frame/wiki-controller', 'frame/faq-controller', 'frame/discussion-controller', 'frame/profile-toolbar-controller', 'frame/plus-toolbar-controller', 'frame/options-controller'],
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
                        $rootScope.threadRaiting = $('#thread_box').select2('data').raiting;
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
                var tabsCount = 4;
                var isAuthenticated = authService.isAuthenticated();
                var faqCheckDone, wikiCheckDone = false;

                var
                    tabWiki =       { id: "wiki", title: "Wiki", template: 'wiki.html', toolbar: 'toolbar-wiki.html', active: (activeTab == 'wiki'), updated: false, },
                    tabFaq =        { id: "faq", title: "FAQ", template: 'faq.html', active: (activeTab == 'faq'), updated: false, },
                    tabPlus =       { id: "plus", title: "+", toolbar: 'toolbar-plus.html', active: false, updated: false, className: "tab-plus" },
                    tabDiscussion = { id: "discussion", title: "Discussion", template: 'discussion.html', active: (activeTab == 'discussion'), updated: false },
                    tabProfile =    { id: "profile", title: "", toolbar: 'toolbar-profile.html', active: false, updated: false, className: "pull-right tab-profile" };

                var removePlus = function () {
                    var i = $scope.tabs.indexOf(tabPlus);
                    $scope.tabs.splice(i, 1);
                };

                $scope.tabs = [
                    tabDiscussion,
                    tabProfile
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
                            $scope.tabs.splice($scope.tabs.indexOf(tabDiscussion) + 1, 0, tabFaq);
                            break;
                        default:
                            break;
                    }
                    if ($scope.tabs.length > tabsCount) removePlus();
                });

                var addPlus = function () {
                    if (faqCheckDone && wikiCheckDone) {
                        if (isAuthenticated) {
                            if ($scope.tabs.length >= tabsCount) return;
                            $scope.tabs.push(tabPlus);
                        };
                    }
                };

                if ($rootScope.thread && $rootScope.language) {
                    faqService.getList($rootScope.thread, $rootScope.language, 0, 1).done(function(data) {
                        if (data != null && data.totalRecords != null && data.totalRecords > 0) {
                            $scope.tabs.splice($scope.tabs.indexOf(tabDiscussion) + 1, 0, tabFaq);
                        }
                        faqCheckDone = true;
                        addPlus();

                    });
                    wikiService.getWiki($rootScope.thread, $rootScope.language).done(function(data) {
                        if (data != null && data != "<div>No Wiki Avaliable</div>") {
                            $scope.tabs.unshift(tabWiki);
                        }
                        wikiCheckDone = true;
                        addPlus();
                    });
                };

                

            }]);

    });

