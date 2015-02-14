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
                var isAuthenticated = authService.isAuthenticated();
                if (isAuthenticated) {
                    $scope.username = localStorage['username'];
                    var tRaiting = $rootScope.threadRaiting;
                    if (tRaiting && !isNaN(tRaiting) && tRaiting != 0) {
                        if (Math.abs(tRaiting) < 10) {
                            tRaiting = Math.round(tRaiting * 10) / 10;
                        } else {
                            tRaiting = Math.round(tRaiting);
                        }
                        if (tRaiting > 0) {
                            $scope.score = "+" + tRaiting;
                            $(".CI_score").removeClass("red");
                        } else {
                            $scope.score = tRaiting;
                            $(".CI_score").addClass("red");
                        }
                    }
                } else {
                    $scope.username = "Guest";
                    $scope.score = "";
                }
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
                        authService.logoff().success(function () {
                            update();
                            $scope.mLeave();
                        });
                        break;
                    case 'settings':
                        event.preventDefault();
                        $(".popup-settings").show();
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

            if ($rootScope.threadRaiting != null) {
                update();
            } else {
                var watchDestroyer = $rootScope.$watch('threadRaiting', function(newValue) {
                    if (newValue != null) {
                        update();
                        watchDestroyer(); //This unbinds watch
                    }
                });
            }
        }
    ]);
})