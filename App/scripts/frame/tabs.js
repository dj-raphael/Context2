define('frame/tabs', ['frame/app', 'services/config', 'frame/wiki-controller', 'frame/faq-controller', 'frame/discussion-controller', 'frame/manage-controller', 'frame/banner-controller'],
    function (app, configService) {

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



        app.controller('TabsCtrl', ['$scope',
            function ($scope) {

                var activeTab = configService.getDefaultTab();

                $scope.tabs = [
                  { id: "wiki", title: "Wiki", template: 'wiki.html', toolbar: 'toolbar-wiki.html', active: (activeTab == 'wiki'), updated: false, },
                  { id: "discussion", title: "Discussion", template: 'discussion.html', active: (activeTab == 'discussion'), updated: false, },
                  { id: "faq", title: "FAQ", template: 'faq.html', active: (activeTab == 'faq'), updated: false, },
                  { id: "manage", title: "Manage", template: 'thread-manage.html', active: (activeTab == 'manage'), updated: false, className: "pull-right" },
                  { id: "profile", toolbar: 'toolbar-profile.html', active: false, updated: false, className: "pull-right" },
                ];


                $scope.foo = function (e) {
                    e.templateUrl = e.template;
                    configService.setDefaultTab(e.id);
                };
            }]);

    });

