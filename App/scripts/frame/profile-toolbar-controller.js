define('frame/profile-toolbar-controller', ['frame/app', 'services/auth'], function (app, authService) {
    app.controller('profileController_toolbar', ['$scope', '$rootScope',
        function ($scope, $rootScope) {
            $scope.showSettingsBtn = false;
            $scope.showAccountBtn = false;
            $scope.showLoginBtn = false;
            $scope.showLogoutBtn = false;
            $scope.username = "Guest";
            $scope.score = "";

            var update = function () {
                authService.isAuthenticated(function (isAuthenticated, username) {
                    if (isAuthenticated) {
                        $scope.username = username;
                        $scope.score = "";
                    } else {
                        $scope.username = "Guest";
                        $scope.score = "";
                    }
                });
            };

            $scope.click = function (parameter, event) {
                event.stopPropagation();
                event.stopImmediatePropagation();
                switch (parameter) {
                    case 'login':
                        //Do default action
                        break;
                    case 'logout':
                        event.preventDefault();
                        authService.logoff().success(function() {
                            update();
                            $scope.mLeave();
                        });
                        break;
                    case 'settings':
                        //Do default action
                        break;
                    case 'account':
                        event.preventDefault();
                        alert('account');
                        break;
                    default:
                        event.preventDefault();
                        break;
                }
            };

            $scope.mEnter = function () {
                $scope.showSettingsBtn = true;
                if (authService.isAuthenticated()) {
                    $scope.showAccountBtn = true;
                    $scope.showLogoutBtn = true;
                } else {
                    $scope.showLoginBtn = true;
                }
                window.setTimeout(function () {
                    $scope.$apply();
                });
            };

            $scope.mLeave = function () {
                $scope.showSettingsBtn = false;
                $scope.showAccountBtn = false;
                $scope.showLoginBtn = false;
                $scope.showLogoutBtn = false;
                window.setTimeout(function () {
                    $scope.$apply();
                });
            };
            
            update();
        }
    ]);
})