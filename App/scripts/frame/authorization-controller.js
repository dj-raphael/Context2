define("frame/authorization-controller", ["frame/app", "jquery", "services/auth"],
    function (app, $, authService) {
        "use strict";

        app.controller('authorizationController', [
            '$scope', '$rootScope',
            function ($scope, $rootScope) {
                $scope.authError = false;
                $scope.login = function () {
                    authService.login($scope.username, $scope.password, true).done(
                        function (e) {
                            if (e.result === "login failed") {
                                $scope.authError = true;
                                if ($rootScope.$$phase !== "$apply" && $rootScope.$$phase !== "$digest") {
                                    $rootScope.$apply();
                                }
                            } else {
                                authService.isAuthenticated($rootScope.isAuthenticatedCalback);
                                $('.popup-authorize').hide();
                            }
                            console.log(e);
                        }
                    ).fail(
                        function (e) {
                            $scope.authError = true;
                            console.log(e);
                        }
                    );
                }
            }
        ]);

    });
