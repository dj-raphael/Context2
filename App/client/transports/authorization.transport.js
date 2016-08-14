(function () {
    'use strict';
    angular
        .module('app')
        .service('authorizationTransport', authorizationTransport);

    authorizationTransport.$inject = [
        '$q',
        '$http',
        'configService'
    ];

    function authorizationTransport($q, $http, configService) {
        this.isAuthenticated = isAuthenticated;
        this.login = login;
        this.logout = logout;
        this.register = register;

        function isAuthenticated(params) {
            return $http.get(configService.getUrl('isAuthenticated'), { params: params }).then(function (data) {
                return data.data;
            });
        }

        function login(params) {
            return $http.post(configService.getUrl('login'), params).then(function (data) {
                if (data.data.result === 'success') {
                    return $q.resolve({
                        isAuthenticated: true,
                        username: data.data.username,
                        uid: data.data.uid
                    });
                }
                return $q.reject(true);
            }, function () {
                return $q.reject(null);
            });
        }

        function logout(params) {
            return $http.get(configService.getUrl('logout'), { params: params }).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function register(params) {
            return $http.post(configService.getUrl('register'), params).then(function (data) {
                if (data.data.result === 'success') {
                    return login({
                        UserName: params.UserName,
                        Password: params.Password,
                        RememberMe: false
                    });
                }
                return $q.reject(true);
            }, function () {
                return $q.reject(null);
            });
        }
    }
})();
