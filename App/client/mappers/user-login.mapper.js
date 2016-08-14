(function () {
    'use strict';
    angular
        .module('app')
        .service('userLoginMapper', userLoginMapper);

    userLoginMapper.inject = [        
        'BaseMapper'
    ];

    function userLoginMapper(BaseMapper) {
        UserLoginMapper.prototype = Object.create(BaseMapper.prototype);
        UserLoginMapper.prototype.mapTo = mapTo;

        return new UserLoginMapper();

        function UserLoginMapper() {
            BaseMapper.call(this);
        }

        function mapTo(data) {
            return {
                UserName: data.userName,
                Password: data.password,
                RememberMe: data.remember
            }
        }
    }
})();
