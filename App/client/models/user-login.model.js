(function () {
    'use strict';
    angular
        .module('app')
        .factory('UserLoginModel', UserLoginModel);

    UserLoginModel.$inject = [];

    function UserLoginModel() {
        return userLoginModel;
        function userLoginModel() {
            this.userName = '';
            this.password = '';
            this.remember = false;
            this.loginFail = false;
        }
    }
})();
