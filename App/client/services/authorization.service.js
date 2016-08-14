(function () {
    'use strict';
    angular
        .module('app')
        .service('authorizationService', authorizationService);

    authorizationService.$inject = [
        '$window',
        '$document',
        '$timeout',
        '$q',
        '$translate',
        'popupWindowService',
        'configService',
        'authorizationTransport',
        'requestHandlerHelper',
        'authUserMapper',
        'userLoginMapper',
        'userRegisterMapper',
        'AuthUserModel'
    ];

    function authorizationService($window,
                                $document,
                                $timeout,
                                $q,
                                $translate,
                                popupWindowService,
                                configService,
                                authorizationTransport,
                                requestHandlerHelper,
                                authUserMapper,
                                userLoginMapper,
                                userRegisterMapper,
                                AuthUserModel) {
        this.isAuthenticated = isAuthenticated;
        this.login = login;
        this.logout = logout;
        this.register = register;
        this.externalLogin = externalLogin;

        function isAuthenticated(threadId) {
            return requestHandlerHelper.handleRequest(authorizationTransport.isAuthenticated({threadId: threadId})).then(function (data) {
                return authUserMapper.mapFrom(data);
            });
        }

        function login(userLoginModel) {
            return requestHandlerHelper.handleRequest(authorizationTransport.login(userLoginMapper.mapTo(userLoginModel))).then(function (data) {
                return authUserMapper.mapFrom(data);
            });
        }

        function logout() {
            return requestHandlerHelper.handleRequest(authorizationTransport.logout()).then(function (data) {
                return new AuthUserModel();
            });
        }

        function register(userRegisterModel) {
            return requestHandlerHelper.handleRequest(authorizationTransport.register(userRegisterMapper.mapTo(userRegisterModel))).then(function (data) {
                return authUserMapper.mapFrom(data);
            });
        }

        function externalLogin(providerName) {
            var w = configService.getConfiguration().externalLoginWindowWidth,
                h = configService.getConfiguration().externalLoginWindowHeight,
                left = $window.screen.availWidth / 2 - (w / 2),
                top = $window.screen.availHeight / 2 - -(h / 2);
            return popupWindowService.open(configService.getUrl('getExternalLogin') + providerName,
                configService.getConfiguration().externalLoginWindowName,
                'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        }
    }
})();