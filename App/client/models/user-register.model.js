(function () {
    'use strict';
    angular
        .module('app')
        .factory('UserRegisterModel', UserRegisterModel);

    UserRegisterModel.$inject = [];

    function UserRegisterModel() {
        return userRegisterModel;
        function userRegisterModel() {
            this.userName = '';
            this.password = '';
            this.confirm = '';
            this.accept = false;
            this.registerFail = false;
        }
    }
})();
