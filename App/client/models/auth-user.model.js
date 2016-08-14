(function () {
    'use strict';
    angular
        .module('app')
        .factory('AuthUserModel', AuthUserModel);

    AuthUserModel.$inject = [];

    function AuthUserModel() {
        return authUserModel;
        function authUserModel() {
            this.isAuthenticated = false;
            this.name = '';
            this.userId = null;
            this.isModerator = false;
            this.rating = 0;
        }
    }
})();
