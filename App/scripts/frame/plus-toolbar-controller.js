define('frame/plus-toolbar-controller', ['frame/app'], function(app) {
    app.controller('plusController_toolbar', ['$scope', '$rootScope',
        function ($scope, $rootScope) {
            $scope.show_wiki = false;
            $scope.show_faq = false;

            $scope.click = function (parameter, event) {
                event.stopPropagation();
                event.stopImmediatePropagation();
                event.preventDefault();
                switch (parameter) {
                    case 'wiki':
                        $rootScope.$broadcast('addTab', 'wiki');
                        break;
                    case 'faq':
                        $rootScope.$broadcast('addTab', 'faq');
                        break;
                    default:
                        break;
                }
            };

            $scope.mEnter = function () {
                if ($('#tab_wiki').length < 1) $scope.show_wiki = true;
                if ($('#tab_faq').length < 1) $scope.show_faq = true;
                window.setTimeout(function () {
                    $scope.$apply();
                });
            };

            $scope.mLeave = function () {
                $scope.show_wiki = false;
                $scope.show_faq = false;
                window.setTimeout(function () {
                    $scope.$apply();
                });
            };
        }
    ]);
})