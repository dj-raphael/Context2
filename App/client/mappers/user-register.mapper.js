(function () {
    'use strict';
    angular
        .module('app')
        .service('userRegisterMapper', userRegisterMapper);

    userRegisterMapper.inject = [
        'BaseMapper'
    ];

    function userRegisterMapper(BaseMapper) {
        UserRegisterMapper.prototype = Object.create(BaseMapper.prototype);
        UserRegisterMapper.prototype.mapTo = mapTo;

        return new UserRegisterMapper();

        function UserRegisterMapper() {
            BaseMapper.call(this);
        }

        function mapTo(data) {
            return {
                UserName: data.userName,
                Password: data.password,
                ConfirmPassword: data.confirm,
                AcceptsTerms: data.accept
            }
        }
    }
})();
