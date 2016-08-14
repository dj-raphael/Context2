(function () {
    'use strict';
    angular
        .module('app')
        .service('authUserMapper', authUserMapper);

    authUserMapper.inject = [
        'AuthUserModel',
        'BaseMapper'
    ];

    function authUserMapper(AuthUserModel, BaseMapper) {
        AuthUserMapper.prototype = Object.create(BaseMapper.prototype);
        AuthUserMapper.prototype.mapFrom = mapFrom;

        return new AuthUserMapper();

        function AuthUserMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            var result = new AuthUserModel();

            result.isAuthenticated = data.isAuthenticated;
            result.name = data.username;
            result.userId = data.uid;
            result.isModerator = data.isModerator;
            result.rating = data.raiting? Math.round(data.raiting): 0;
            return result;
        }
    }
})();
